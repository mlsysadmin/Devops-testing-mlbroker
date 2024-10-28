require("dotenv").config();
const bcrypt = require("bcrypt");

const algo = 'sha256';
const secret = process.env.SECRET_KEY;
const saltRounds = 10; 

const Hash = async (body) => {
    
    try {

        const salt = await bcrypt.genSalt(saltRounds);
        
        const hash = await bcrypt.hash(body, salt);

        return hash.toString()

    } catch (error) {
        return error
    }
    
}

const VerifyHash = async(password,signature) => {
    try {
        
        const verify = await bcrypt.compare(password, signature);

        return verify
        
    } catch (error) {
        return error
    }
}

module.exports = {
    Hash,
    VerifyHash
}