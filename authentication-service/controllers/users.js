const UserModel = require("../models/users");
const bcrypt = require("bcryptjs");
const jwtHandler = require("../jwt_handler/index");

class UsersController {

    constructor(){
        this.jwtHandler = new jwtHandler();
    }

    async signup (req, res) {
        const { username, email, password } = req.body
        try {
            const passwordSalt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, passwordSalt)
    
            const newUser = new UserModel({
                username,
                email,
                password : hashedPassword
            })
            const user = await newUser.save()
            const token = this.jwtHandler.buildJwt(user);
            return res.json({ message :`Welcome ${user.username}`, token})
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    async login (req, res) {
        const {email, password } = req.body
        try{
            const user = await UserModel.findOne({email})
            if(user=== null){
                return res.status(401).json({message : 'Invalid credentials'})
            }
            else if(!bcrypt.compare(password, user.password)){
                return res.status(401).json({message : 'Invalid credentials'})
            }
            const token = this.jwtHandler.buildJwt(user);
            const message = `Welcome back ${user.username}`;
            return res.json({message, token, user})
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    }

    async editStatus (req, res) {
        const {email, status } = req.body
        try{
            const user = await UserModel.findOne({email})
            if(user=== null){
                return res.status(401).json({message : 'Invalid credentials'})
            }
            else if(!bcrypt.compare(password, user.password)){
                return res.status(401).json({message : 'Invalid credentials'})
            }
            user.status = !user.status;
            const message = `Status of ${user.username} have been updated`;
            return res.json({message, token, user})
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}

module.exports = UsersController;
