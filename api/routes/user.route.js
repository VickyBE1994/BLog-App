import express from 'express'
import {updateUser,deleteUser,signout} from '../controllers/user.controller.js'
import { veryfyToken } from '../utils/verifyUser.js'

const router=express.Router()


router.put('/update/:userId',veryfyToken,updateUser)
router.delete('/delete/:userId',veryfyToken,deleteUser)
router.post('/signout',signout)


    



export default router