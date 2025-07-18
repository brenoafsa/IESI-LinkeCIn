import prisma from '../../prismaClient.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

async function getAllOpportunities(req, res) {
    try {
        const opportunities = await prisma.opportunityPost.findMany({
            include: {
                publisher: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                        role: true
                    }
                },
                candidates: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true
                    }
                },
                _count: {
                    select: {
                        candidates: true
                    }
                }
            }
        })
        res.status(200).json(opportunities)
    } catch (err) {
        console.error('Erro ao buscar oportunidades:', err)
        res.status(500).json({ error: 'Erro interno no servidor' })
    }
}

async function createOpportunity(req, res) {
    const { tittle, description, type, deadline, city, state, hours, tokenAcesso } = req.body

    const decodificado = jwt.verify(tokenAcesso, process.env.ACCESS_TOKEN_SECRET)

    try {
        const opportunity = await prisma.opportunityPost.create({
            data: {
                tittle,
                description,
                type,
                deadline: new Date(deadline),
                city,
                state,
                hours,
                publisherId: decodificado.id
            },
            include: {
                publisher: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                        role: true
                    }
                }
            }
        })

        res.status(201).json(opportunity)
    } catch (err) {
        console.error('Erro ao criar oportunidade:', err)
        res.status(500).json({ error: 'Erro ao criar oportunidade' })
    }
}

async function getOpportunityById(req, res) {
    const { id } = req.params

    try {
        const opportunity = await prisma.opportunityPost.findUnique({
            where: { id },
            include: {
                publisher: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                        role: true
                    }
                },
                candidates: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true
                    }
                }
            }
        })

        if (!opportunity) {
            return res.status(404).json({ error: 'Oportunidade não encontrada' })
        }

        res.status(200).json(opportunity)
    } catch (err) {
        console.error('Erro ao buscar oportunidade:', err)
        res.status(500).json({ error: 'Erro interno no servidor' })
    }
}

async function applyToOpportunity(req, res) {
    const { opportunityId, accessToken } = req.body

    try {
        const decodificado = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        
        const userId = decodificado.id
        
        if (!userId) {
            return res.status(401).json({ error: 'Token inválido - ID do usuário não encontrado' })
        }

        const existingCandidate = await prisma.opportunityPost.findFirst({
            where: {
                id: opportunityId,
                candidates: {
                    some: {
                        id: userId
                    }
                }
            }
        })

        if (existingCandidate) {
            return res.status(400).json({ error: 'Você já se candidatou a esta oportunidade' })
        }

        const opportunity = await prisma.opportunityPost.update({
            where: { id: opportunityId },
            data: {
                candidates: {
                    connect: { id: userId }
                }
            },
            include: {
                candidates: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true
                    }
                }
            }
        })

        res.status(200).json({ message: 'Candidatura realizada com sucesso', opportunity })
    } catch (err) {
        console.error('Erro ao se candidatar à oportunidade:', err)
        
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Token inválido' })
        }
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expirado' })
        }
        
        res.status(500).json({ error: 'Erro ao se candidatar à oportunidade' })
    }
}

export default {
    getAllOpportunities,
    createOpportunity,
    getOpportunityById,
    applyToOpportunity
}