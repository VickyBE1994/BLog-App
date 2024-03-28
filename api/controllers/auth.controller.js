import User from '../models/usermodel.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'




export const signup=async(req,res,next)=>{
    const{username, email, password }=req.body
    if(!username||
        !email ||
        !password || 
        username ==='' ||
         email === ''  || 
         password ==='' )
         {

    next(errorHandler(400,'all feilds are required'))
}
const hassedpassword= bcryptjs.hashSync( password, 10 )

const newUser= new User({
    username:username,
    email:email,
    password:hassedpassword
})

try {
    await newUser.save()

    res.json('signup success')

} catch (error) {
    next(error)
}

}

export const signin=async(req,res,next)=>{
const {email,password}=req.body

if( !email || !password || email=== '' || password=== ''){
next(errorHandler(400,'all fields are required'))
}
try {
    const validUser=await User.findOne({email})
    if(!validUser){
       return  next(errorHandler(404,'user not found'))
    }
    const validpassword=bcryptjs.compareSync(password,validUser.password)
    const{password:pass,...rest}=validUser._doc
    if(!validpassword){
        return  next(errorHandler(400,'invalid password'))
    }
    const token=jwt.sign({id: validUser._id, isAdmin:validUser.isAdmin},process.env.JWTSECRET)
    res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest)

    
} catch (error) {
    next(error)
}
}


 export const google=async(req,res,next)=>{
const{email,name,googlePhotoUrl}=req.body
try {
    const user= await User.findOne({email})
    if(user){
        const token=jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWTSECRET)
        const {password,...rest}=user._doc
        res.status(200).cookie('access_token',token,{
        httpOnly:true,
    }).json(rest)
}
else{
    const genaratedPassword=
     Math.random().toString(36).slice(-8) + 
      Math.random().toString(36).slice(-8)
    const hassedpassword=bcryptjs.hashSync(genaratedPassword,10)
    const newUser= new User({
        username:
        name.toLowerCase().split(' ').join('') +
         Math.random().toString(9).slice (-4),
        email,
        password:hassedpassword,
        profilePicture:googlePhotoUrl
    })
    await newUser.save()
    const token=jwt.sign(
        {id:newUser._id, isAdmin: newUser.isAdmin},process.env.JWTSECRET)
    const {password,...rest}=newUser._doc
    res.
    status(200)
    .cookie('access_token',token,{
      httpOnly:true
    })
    .json(rest)
}

} catch (error) {
    next(error)
}

}

 