import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import axios from 'axios'
import checkLogin from './middlewares/checkLogin.js'
import appRouter from './routes/appRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())
app.use(cookieParser())

const authenticationServiceURL = process.env.AUTHENTICATION_SERVICE_URL;


app.use("/", appRouter)
app.post("/signup", async (req, res) => {
    try {
        const signup = await axios.post(`${authenticationServiceURL}/signup`, req.body)
        return res.json(signup.data);
    } catch (error) {
        console.error(error);
    }
})

app.post("/login", checkLogin, async (req, res) => {
    try {
        res.cookie('token', req.params.token)
        const login = await axios.post(`${authenticationServiceURL}/login`, req.body)
        return res.json(login.data);
    } catch (error) {
        console.error(error);
    }
})


app.listen(3000, () => console.log(`🟢 Server is running on port 3000`))