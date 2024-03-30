import express from 'express'
import {veryfyToken} from '../utils/verifyUser.js'
import { create,getposts,deletepost,updatepost} from '../controllers/post.controller.js'


const router=express.Router()

router.post('/create' ,veryfyToken,create)
router.get('/getposts',getposts)
router.delete('/deletepost/:postId/:userId',veryfyToken,deletepost)
router.put('/updatepost/:postId/:userId',veryfyToken,updatepost)

export default router