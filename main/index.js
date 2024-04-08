import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())
app.use(cookieParser())



app.use("/", userRouter)


app.listen(3000, () => console.log(`🟢 Server is running on port 3000`))