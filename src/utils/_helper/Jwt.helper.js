const tokenVersionMemory = new Map();

const UpdateTokenVersion = (userId) => {
    try {

        if (!tokenVersionMemory[userId]) {
            tokenVersionMemory[userId] = 1;
        } else {
            tokenVersionMemory[userId] += 1;
        }

    } catch (error) {
        throw error
    }
}

const GetTokenVersion = (userId) => {
    try {

        console.log(tokenVersionMemory);
        return tokenVersionMemory[userId] || 0;

    } catch (error) {
        throw error
    }
}

module.exports = {
    UpdateTokenVersion,
    GetTokenVersion
}