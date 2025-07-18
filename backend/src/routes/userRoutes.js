import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()

router.get('/users', userController.getAllUsers)
router.post('/users', userController.createUser)
router.post('/login', userController.checkUserExists)

export default router