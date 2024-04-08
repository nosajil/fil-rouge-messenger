import {Router} from 'express'
import User from '../models/userModel.js'
const userRouter = Router()


userRouter.get('/api/users', async (req, res) => {
    try{
        const users = await User.find()
        return res.json(users)
    }
    catch(err){
        console.log(err)
    }
})



export default userRouter