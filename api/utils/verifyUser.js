import  Jwt  from "jsonwebtoken"
import{errorHandler} from '../utils/error.js' 


export const veryfyToken=(req,res,next)=>{
    const token=req.cookies.access_token
    if(!token){
        return next (errorHandler(401,'Unauthorized'))
    }
    Jwt.verify(token,process.env.JWTSECRET,(err,user)=>{
        if(err){
            return next(errorHandler(401,'Unauthorized'))
        }
        req.user=user
        next()
    })

}