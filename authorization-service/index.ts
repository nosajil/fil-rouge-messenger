import {Request, Response, NextFunction} from 'express-serve-static-core'
const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
const PORT:number = 3002
const jwt_key:string = process.env.JWT_SECRET!


const verifyAuthorization = (req : Request, res : Response, next : NextFunction) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({message : 'Access not allowed - missing token'})
    }

    try{
        const data = jwt.verify(token, jwt_key)
        next()
    }
    catch(err){
        return res.status(403).json({message : 'Access forbidden - token not valid'})
    }

}

app.get('/', verifyAuthorization, (req : Request, res : Response) => {
    return res.sendStatus(200)
})



app.listen(PORT, () => console.log(`🟢 Authorization running on port ${PORT}`))