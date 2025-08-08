import express from 'express'
import opportunityController from '../controllers/opportunityController.js'

const router = express.Router()

router.get('/post/open', opportunityController.getAllOpenPosts)
router.get('/post/close', opportunityController.getAllClosedPosts)
router.get('/post', opportunityController.getAllPosts)
router.post('/post', opportunityController.createOpportunity)

router.get('/post/:id', opportunityController.getOpportunityById) 
router.post('/post/apply', opportunityController.applyToOpportunity)
router.delete('/post/:id', opportunityController.deleteOpportunity) 
router.put('/post/:id', opportunityController.updateOpportunity)

router.post('/reqcheck', opportunityController.CheckRequiredSubjects)
router.post('/opportunity/save', opportunityController.saveOpportunity)
router.post('/opportunity/unsave', opportunityController.unsaveOpportunity)
router.post('/opportunities/saved', opportunityController.getSavedOpportunities)

router.post('/post/close', opportunityController.closePost)
router.get('/filtrar', opportunityController.listarOportunidadesFiltradas)
router.post('/post/candidates', opportunityController.getPostCandidates)


export default router