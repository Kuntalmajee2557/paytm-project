import express from "express"
import cors from 'cors'
import userRouter from './routes/user.js'
import accountRouter from './routes/account.js'
import connectToDatabase from './db.js'
const app = express()

const port = 3000;

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded())

app.use('/app/v1/user', userRouter)
app.use('/app/v1/account', accountRouter)
app.use(connectToDatabase)

app.listen(port, () => {
    console.log(`listing the port ${port}`)
})