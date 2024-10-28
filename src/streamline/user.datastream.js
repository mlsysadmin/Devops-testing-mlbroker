'use strict'

const { User, Role, Approvers } = require('../models/main.model');
const Sequelize = require('../config/_db/mlbrokerage.db');
const { VerifyHash } = require('../utils/_helper/hash.helper');
const DataResponseHandlerHelper = require('../utils/_helper/DataResponseHandler.helper');

module.exports = {
    FindUserOne: async (user) => {
        try {

            return await Sequelize.transaction(async (transaction) => {

                const findUser = await User.findOne({
                    where: user,
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include:
                        [
                            {
                                model: Role, attributes:
                                {
                                    exclude: ['createdAt', 'updatedAt']
                                }
                            }
                        ],
                    transaction
                })
                return findUser;
            })

        } catch (error) {
            throw error
        }
    },
    CreateUser: async (schema, data) => {
        try {
            const { email, password } = data;

            return await Sequelize.transaction(async (transaction) => {
                const findUser = await schema.findOne({
                    where: {
                        email,
                    },
                    include: Role,
                    transaction
                })

                if (findUser) {
                    const verifyPassword = await VerifyHash(password, findUser.password);

                    if (verifyPassword) {
                        return DataResponseHandlerHelper(
                            findUser,
                            "VERIFY_SUCCESS",
                            200,
                            true,
                            "SUCCESS"
                        )
                    }
                    return DataResponseHandlerHelper(
                        null,
                        "AUTHENTICATION_ERROR",
                        401,
                        false,
                        "Email or Password is incorrect"
                    );

                }
                return DataResponseHandlerHelper(
                    null,
                    "AUTHENTICATION_ERROR",
                    401,
                    false,
                    "Email or Password is incorrect"
                );
            })

        } catch (error) {
            console.log("error", error);
            // if (error instanceof TypeError) {

            // }
            throw error
        }
    },

    FindOneSupportByEmail: async (user) => {
        try {

            return await Sequelize.transaction(async (transaction) => {

                const findSupport = await Approvers.findOne({
                    where: {
                        ...user
                    },
                    attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                    include:
                        [
                            {
                                model: Role, attributes:
                                {
                                    exclude: ['createdAt', 'updatedAt']
                                },
                                as: 'role'
                            }
                        ],
                    transaction
                });

                return findSupport;
            })

        } catch (error) {
            throw error
        }
    },
}