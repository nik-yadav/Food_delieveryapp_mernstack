const bcrypt = require('bcrypt')
const { saltRounds } = require("../constant")

const hashUserPassword = async(password) => {
    try {
        const saltValue = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, saltValue);
        return hashedPassword;
    } catch (error) {
        return "Unable to hash your password"
    }
}

module.exports = {
    hashUserPassword
}
