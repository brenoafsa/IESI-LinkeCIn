import express from 'express'
import opportunityController from '../controllers/opportunityController.js'

const router = express.Router()

router.get('/post', opportunityController.getAllOpportunities)
router.post('/post', opportunityController.createOpportunity)
router.get('/post/:id', opportunityController.getOpportunityById)
router.post('/post/apply', opportunityController.applyToOpportunity)
router.get('/filtrar', opportunityController.listarOportunidadesFiltradas)

export default router