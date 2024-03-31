import express  from "express";
import { createComment,getPostComments,likeComment,editComment } from "../controllers/comment.controller.js";
import {veryfyToken } from '../utils/verifyUser.js'



const router=express.Router()


router.post('/create',veryfyToken,createComment)
router.get('/getPostComments/:postId',getPostComments)
router.put('/likeComment/:commentId',veryfyToken,likeComment)
router.put('/editComment/:commentId',veryfyToken,editComment)


export default router