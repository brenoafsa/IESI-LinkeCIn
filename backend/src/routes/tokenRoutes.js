import express from 'express'
import tokenController from '../controllers/tokenController.js'

const router = express.Router()

router.post('/token', tokenController.generateAccessToken)

export default router