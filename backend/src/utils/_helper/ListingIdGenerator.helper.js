const randomString = require('randomstring');
const Sequelize = require('../../config/_db/mlbrokerage.db');
const { FindPrefix } = require('../../streamline/listing.datastream');

module.exports = async (prefix_name) => {
    try {

        const GenerateRefNum = await Sequelize.transaction( async (transaction) => {

            const getPrefix = await FindPrefix(prefix_name, transaction);

            const generateString = randomString.generate({
                length: 8,
                charset: 'alphabetic'
            }).toUpperCase();

            return {
                listing_id: getPrefix.prefix + generateString,
                approval_type: getPrefix.prefix_type_name
            };
        })
        
        return GenerateRefNum;

    } catch (error) {
        throw error
    }
}