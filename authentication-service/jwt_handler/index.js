const jwt = require('jsonwebtoken');
const UserModel = require("../models/users");

class jwtHandler {
    constructor () {
        this.key = process.env.JWT_SECRET
    }
    buildJwt (user = new UserModel) {
        const token = jwt.sign({user}, this.key, {expiresIn : '1h'})
        return token
    }
}

module.exports = jwtHandler;