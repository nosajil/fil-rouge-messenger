import {Router} from 'express'
const appRouter = Router()
import User from '../models/userModel.js'
import Product from '../models/productModel.js'
import checkAuthorization from '../middlewares/checkAuthorization.js'

appRouter.get('/api/users', checkAuthorization, async (req, res) => {
    try{
        const users = await User.find()
        return res.json(users)
    }
    catch(err){
        console.log(err)
    }
})

appRouter.get('/api/products', checkAuthorization, async (req, res) => {
    try{
        const products = await Product.find()
        return res.json(products)
    }
    catch(err){
        console.log(err)
    }
})

export default appRouter