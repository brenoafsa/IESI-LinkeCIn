import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()

router.get('/users', userController.getAllUsers)
router.post('/users', userController.createUser)
router.post('/login', userController.checkUserExists)

router.post('/student', userController.setStudentRecord)
router.post('/student/specific', userController.getSpecificStudent)
router.post('/student/posts', userController.studentOpportunityHistory)
router.post('/student/participations', userController.studentParticipationHistory)

router.post('/teacher/posts', userController.teacherHistoryInformation)

router.post('/student/simulate-hours', userController.simulateHours)

router.put('/user/edit', userController.editUserProfile)

export default router