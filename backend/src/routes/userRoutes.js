import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()

router.get('/users', userController.getAllUsers)
router.post('/users', userController.createUser)
router.post('/login', userController.checkUserExists)
router.post('/student', userController.setStudentRecord)
router.post('/user/specific', userController.getSpecificUser)
router.post('/user/posts', userController.userOpportunityHistory)

export default router