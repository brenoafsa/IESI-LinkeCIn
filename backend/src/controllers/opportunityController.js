import prisma from '../../prismaClient.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

async function getAllPosts(req, res) {
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
                participants: {
                    select: {
                        id: true,
                        fullName: true
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

async function getAllOpenPosts(req, res) {
    try {
        const opportunities = await prisma.opportunityPost.findMany({
            where: { isClosed: false },
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

async function getAllClosedPosts(req, res) {
    try {
        const opportunities = await prisma.opportunityPost.findMany({
            where: { isClosed: true },
            include: {
                publisher: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                        role: true
                    }
                },
                participants: {
                    select: {
                        id: true,
                        fullName: true
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
        console.error('Erro ao buscar oportunidades fechadas:', err)
        res.status(500).json({ error: 'Erro interno no servidor' })
    }
}

async function createOpportunity(req, res) {
    const { tittle, description, type, deadline, city, state, hours, requiredSubjects, tokenAcesso } = req.body

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
                requiredSubjects,
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
        
        await prisma.user.update({
            where: { id: userId },
            data: {
                appliedPosts: {
                    connect: { id: opportunityId }
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

async function deleteOpportunity(req, res) {
    const{ id } = req.params; // pegamos o ID da oportunidade da URL
    const { accessToken } = req.body; // pegamos o token de acesso do usuário, para verificar a permissão



    try {
        // verificamos se o token é valido e decodificamos ele para conseguir pegar o ID do user
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const userId = decoded.id

        const opportunity = await prisma.opportunityPost.findUnique({
            where: { id }, // buscamos a oportunidade pelo ID
            select: {
                id: true,
                publisherId: true,
                tittle: true
            }
        });


        // aqui verificamos se a oportunidade existe
        if (!opportunity){
            return res.status(404).json({ error: 'Oportunidade não encontrada' });
        }


        if (opportunity.publisherId !== userId){
            return res.status(403).json({ error: " Você não tem permissão para deletar esta oportunidade"});
        }

        // aqui deletamos a oportunidade do database
        await prisma.opportunityPost.delete({
            where: { id }
        });

        res.status(200).json({
             message: 'Oportunidade deletada com sucesso',
             deleteOpportunity: opportunity.tittle // breno tava usando tittle, e eu to usando title( nao sei se vai dar problema)
            });

    } catch (error) {
        console.error('Erro ao deletar oportunidade:', error);

        if (error.name === "JsonWebTokenError"){
            return res.status(401).json({error: "Token Inválido"});
        }
        if (error.name === "TokenExpiredError"){
            return res.status(401).json({error: "Token Expirado"});
        }

        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

async function updateOpportunity(req, res) {
    const { id } = req.params; // pegamos o ID da oportunidade da URL
    const {
        tittle,
        description,
        type,
        deadline,
        city,
        state,
        hours,
        requiredSubjects,
        accessToken
    } = req.body; // esse são os dados que o usuário vai enviar para atualizar a oportunidade
    


    try {
        
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const userId = decoded.id;
        
        const existingOpportunity = await prisma.opportunityPost.findUnique({
            where: { id },
            select: {
                id: true,
                publisherId: true
            }
        });


        if (!existingOpportunity) {
            return res.status(404).json({ error: 'Oportunidade não encontrada' });
        }

        if (existingOpportunity.publisherId !== userId) {
            return res.status(403).json({ error: 'Você não tem permissão para editar esta oportunidade' });
        }

        // Preparar dados para atualização (só campos enviados)
        const updateData = {};
        if (tittle !== undefined) updateData.tittle = tittle;
        if (description !== undefined) updateData.description = description;
        if (type !== undefined) updateData.type = type;
        if (deadline !== undefined) updateData.deadline = new Date(deadline);
        if (city !== undefined) updateData.city = city;
        if (state !== undefined) updateData.state = state;
        if (hours !== undefined) updateData.hours = parseInt(hours);
        if (requiredSubjects !== undefined) updateData.requiredSubjects = requiredSubjects;
        

        // aqui atualizamos as informações da oportunidade no database
        const updateOpportunity = await prisma.opportunityPost.update({
            where: { id },
            data: updateData,
            include: {
                publisher:{
                    select:{
                        id: true,
                        fullName: true, // pq isso é boolean ?
                        email: true,
                        role: true
                    }
                },

                candidates: {
                    select:{
                        id: true,
                        fullName: true,
                        email: true
                    }
                }
                
            }
        });

        // aqui é a resposta da requisição, se tudo der certo
        res.status(200).json({
            message: "Oportunidade atualizada com sucesso",
            opportunity: updateOpportunity
        });


    } catch (error) {
        console.error('Erro ao atualizar oportunidade:', error);

        if (error.name === "JsonWebTokenError"){
            return res.status(401).json({error: "Token Inválido"});
        }
        if (error.name === "TokenExpiredError"){
            return res.status(401).json({error: "Token Expirado"});
        }

        res.status(500).json({ error: "Erro ao atualizar oportunidade"});
        
    }

}

async function CheckRequiredSubjects(req, res) {
    const { accessToken, postId } = req.body;

    try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const userId = decoded.id;

        const userInfo = await prisma.user.findUnique({
            where: { id: userId },
            include: { studentRecord: true }
        });

        const postInfo = await prisma.opportunityPost.findUnique({
            where: { id: postId }
        });

        if (!userInfo) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        if (!postInfo) {
            return res.status(404).json({ error: 'Oportunidade não encontrada' });
        }

        const userFinishedSubjects = userInfo.studentRecord.finishedSubjects || [];
        const requiredSubjects = postInfo.requiredSubjects || [];

        const hasAllRequirements = requiredSubjects.every(subject => 
            userFinishedSubjects.includes(subject)
        );

        if (hasAllRequirements) {
            res.status(200).json({ 
                message: 'Usuário possui todos os pré-requisitos',
                hasRequirements: true
            });
        } else {
            const missingSubjects = requiredSubjects.filter(subject => 
                !userFinishedSubjects.includes(subject)
            );
            
            res.status(403).json({ 
                message: 'Usuário não possui todos os pré-requisitos',
                hasRequirements: false,
                missingSubjects: missingSubjects
            });
        }

    } catch (error) {
        console.error('Erro ao verificar pré-requisitos:', error);

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Token inválido' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expirado' });
        }

        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

async function saveOpportunity(req, res) {
    const { opportunityId, accessToken } = req.body;

    try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const userId = decoded.id;
        
        if (!userId) {
            return res.status(401).json({ error: 'Token inválido - ID do usuário não encontrado' });
        }

        // verifica se já está salvo
        const alreadySaved = await prisma.opportunityPost.findFirst({
            where: {
                id: opportunityId,
                savedBy: {
                    some: {
                        id: userId
                    }
                }
            }
        });

        if (alreadySaved) {
            return res.status(400).json({ error: 'Oportunidade já está salva' });
        }

        // salva a oportunidade
        await prisma.user.update({
            where: { id: userId },
            data: {
                savedPosts: {
                    connect: { id: opportunityId }
                }
            }
        });

        res.status(200).json({ message: 'Oportunidade salva com sucesso' });
    } catch (error) {
        console.error('Erro ao salvar oportunidade:', error);

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Token inválido' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expirado' });
        }
        
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

async function unsaveOpportunity(req, res) {
    const { opportunityId, accessToken } = req.body;

    try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const userId = decoded.id;
        
        if (!userId) {
            return res.status(401).json({ error: 'Token inválido - ID do usuário não encontrado' });
        }

        // Remover a oportunidade dos salvos
        await prisma.user.update({
            where: { id: userId },
            data: {
                savedPosts: {
                    disconnect: { id: opportunityId }
                }
            }
        });

        res.status(200).json({ message: 'Oportunidade removida dos salvos com sucesso' });
    } catch (error) {
        console.error('Erro ao remover oportunidade dos salvos:', error);

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Token inválido' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expirado' });
        }
        
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

async function getSavedOpportunities(req, res) {
    const { accessToken } = req.body;

    try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const userId = decoded.id;
        
        if (!userId) {
            return res.status(401).json({ error: 'Token inválido - ID do usuário não encontrado' });
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                savedPosts: {
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
                }
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(200).json(user.savedPosts);
    } catch (error) {
        console.error('Erro ao buscar oportunidades salvas:', error);

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Token inválido' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expirado' });
        }
        
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

async function closePost(req, res) {
    const { postId, tokenAcesso, candidatesAccepted } = req.body;
    try {
        if (!postId || !tokenAcesso || !Array.isArray(candidatesAccepted)) {
            return res.status(400).json({ error: "ID do post, token de acesso ou candidatos aceitos não foi fornecido corretamente" });
        }

        const decoded = jwt.verify(tokenAcesso, process.env.ACCESS_TOKEN_SECRET);
        const userId = decoded.id;

        const postagem = await prisma.opportunityPost.findUnique({
            where: { id: postId },
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
        });

        if (!postagem) {
            return res.status(404).json({ error: "Oportunidade não encontrada" });
        }

        if (postagem.publisher.id !== userId) {
            return res.status(403).json({ error: "Você não tem permissão para fazer isso" });
        }

        await prisma.opportunityPost.update({
            where: { id: postId },
            data: {
                isClosed: true,
                participants: {
                    connect: candidatesAccepted.map(id => ({ id }))
                }
            }
        });

        res.status(200).json({ message: "Post atualizado com sucesso!" });
    } catch (err) {
        console.error('Erro ao fechar o post:', err);
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Token inválido' });
        }
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expirado' });
        }
        res.status(500).json({ error: 'Erro ao fechar o post' });
    }
}

async function getPostCandidates(req, res) {
    const { postId, tokenAcesso } = req.body;
    
    if (!postId || !tokenAcesso) {
        return res.status(400).json({ error: "ID do post ou token de acesso não foi fornecido" });
    }

    try {
        const decoded = jwt.verify(tokenAcesso, process.env.ACCESS_TOKEN_SECRET);
        const userId = decoded.id;

        const post = await prisma.opportunityPost.findUnique({
            where: { id: postId },
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
                        email: true,
                        role: true
                    }
                }
            }
        });

        if (!post) {
            return res.status(404).json({ error: "Oportunidade não encontrada" });
        }

        if (post.publisher.id !== userId) {
            return res.status(403).json({ error: "Você não tem permissão para ver os candidatos desta oportunidade" });
        }

        res.status(200).json({
            message: "Candidatos recuperados com sucesso",
            postTitle: post.tittle,
            candidatesCount: post.candidates.length,
            candidates: post.candidates
        });

    } catch (error) {
        console.error('Erro ao buscar candidatos:', error);

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Token inválido' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expirado' });
        }

        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

export default {
    getAllPosts,
    getAllOpenPosts,
    getAllClosedPosts,
    createOpportunity,
    getOpportunityById,
    applyToOpportunity,
    deleteOpportunity, // essa foi a func delete do crud :)
    updateOpportunity, // essa foi a func update do crud
    CheckRequiredSubjects,
    saveOpportunity,
    unsaveOpportunity,
    getSavedOpportunities,
    closePost,
    getPostCandidates
}