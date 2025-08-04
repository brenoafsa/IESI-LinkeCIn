import express from 'express'
import opportunityController from '../controllers/opportunityController.js'

const router = express.Router()

router.get('/post', opportunityController.getAllOpportunities)
router.post('/post', opportunityController.createOpportunity)
router.get('/post/:id', opportunityController.getOpportunityById)
router.post('/post/apply', opportunityController.applyToOpportunity)
router.delete('/post/:id', opportunityController.deleteOpportunity) 
router.put('/post/:id', opportunityController.updateOpportunity)
router.post('/reqcheck', opportunityController.CheckRequiredSubjects)
router.post('/opportunity/save', opportunityController.saveOpportunity)
router.post('/opportunity/unsave', opportunityController.unsaveOpportunity)
router.post('/opportunities/saved', opportunityController.getSavedOpportunities)


export default router