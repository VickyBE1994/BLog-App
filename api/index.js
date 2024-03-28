import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'




dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("mongodb is connected")
})
.catch((err)=>{
console.log(err)
})


const app=express()
app.use(express.json())
app.use(cookieParser())




app.listen(7000,()=>{
    console.log('server listning port 7000')
})

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next)=>{
const statuscode=err.statuscode ||500
const message=err.message||'internal server error'
res.status(statuscode).json({
    succeuss:false,
    statuscode,
    message
})
})

  