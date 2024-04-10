import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRouter.js'
import axios from 'axios'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())
app.use(cookieParser())

const authenticationServiceURL = process.env.AUTHENTICATION_SERVICE_URL;

app.use("/", userRouter)
app.post("/signup", async (req, res) => {
    try {
        const signup = await axios.post(`${authenticationServiceURL}/signup`, req.body)
        return res.json(signup.data);
    } catch (error) {
        console.error(error);
    }
})

app.post("/login", async (req, res) => {
    try {
        const login = await axios.post(`${authenticationServiceURL}/login`, req.body)
        return res.json(login.data);
    } catch (error) {
        console.error(error);
    }
})


app.listen(3000, () => console.log(`🟢 Server is running on port 3000`))