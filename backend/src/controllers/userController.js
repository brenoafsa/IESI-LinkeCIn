// src/controllers/userController.js
import prisma from '../../prismaClient.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import tokenController from './tokenController.js'

dotenv.config();

async function getAllUsers (req, res) {
    try {
		const users = await prisma.user.findMany({
            include: { studentRecord: true }
        })
		res.status(200).json(users)
	} catch (err) {
		console.error('Erro ao buscar usuários:', err)
	}
}

// criar usuário, recebe o email, nome, senha e o role
async function createUser(req, res){
    const { fullName, email, password, role } = req.body;

    try{
        // Verifique se o email já existe
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(409).json({ error: 'Este email já está cadastrado.' });
        }

        const senhaHashed = await bcrypt.hash(password, 10);
        const novoUsuario = await prisma.user.create({
            data: { fullName, email, password: senhaHashed, role }
        });

        const token = tokenController.generateAccessToken(novoUsuario.id, novoUsuario.email)
        
        if (role === "STUDENT"){
            res.status(201).json(novoUsuario); // Retorna status 201 (Created) para criação bem-sucedida
        } else {
            res.status(200).json({
                message: 'Login bem-sucedido',
                accessToken: token
            });
        }
    } catch (err) {
        console.error('Erro ao criar usuário:', err); // MUITO IMPORTANTE: Loga o erro completo no console
        res.status(500).json({
            error: "Erro ao criar usuário",
            details: err.message // Envia a mensagem de erro detalhada na resposta (apenas para desenvolvimento)
        });
    }
}

async function checkUserExists(req, res) {
    const { email, password } = req.body;

    try {
        //1. Busca o usuário pelo email
        const usuario = await prisma.user.findUnique({
            where: { email }
        });
        //2. Se não encontrar, retorna erro
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        //3. Compara a senha fornecida com a senha hash salva
        const senhaCorreta = await bcrypt.compare(password, usuario.password);

        if (!senhaCorreta) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        const token = tokenController.generateAccessToken(usuario.id, usuario.email)
        //4. Se tudo certo, retorna dados do usuário
        return res.status(200).json({
            message: 'Login bem-sucedido',
            accessToken: token
        });
    } catch (err) {
        console.error('Erro ao verificar usuário:', err);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

async function setStudentRecord(req, res){
    const { userId, horas, curso, entrada, disciplinas } = req.body;

    try {
        await prisma.studentRecord.create({
            data: { studentId: userId, complementaryHours: horas, course: curso, entrance: entrada, finishedSubjects: disciplinas}
        })

        const estudante = await prisma.user.findUnique({
            where: { id: userId }
        })

        const token = tokenController.generateAccessToken(estudante.id, estudante.email)
        res.status(201).json({ accessToken: token })
    } catch (err) {
        console.error("Erro ao criar histórico escolar. Tente novamente.")
        res.status(500).json({ error: "Erro ao criar registro do estudante" });
    }
}

async function getSpecificStudent (req, res) {
    const { accessToken } = req.body;

    if (!accessToken) {
            return res.status(400).json({ error: 'Token de acesso é obrigatório' });
        }

    const decodificado = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    try {
		const specificUser = await prisma.user.findFirst({
            where: {
                id: decodificado.id
            },
            include: {
                studentRecord: true
            }
        })
		res.status(200).json(specificUser)
	} catch (err) {
		console.error('Erro ao buscar usuário específico:', err)
	}
}

async function studentOpportunityHistory(req, res) {
    try {
        const { accessToken } = req.body;
        
        if (!accessToken) {
            return res.status(400).json({ error: 'Token de acesso é obrigatório' });
        }
        const decodificado = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        
        const userComCandidatura = await prisma.user.findUnique({
            where: { id: decodificado.id },
            include: {
                appliedPosts: {
                    include: {
                        publisher: {
                            select: {
                                id: true,
                                fullName: true,
                                email: true,
                                role: true
                            }
                        }
                    },
                    orderBy: {
                        deadline: 'desc'
                    }
                }
            }
        });
        const oportunidadesUser = userComCandidatura?.appliedPosts || [];

        res.status(200).json(oportunidadesUser);
    } catch (error) {
        console.error("Erro ao buscar histórico de oportunidades do usuário:", error);

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Token inválido' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expirado' });
        }
        
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

async function teacherHistoryInformation(req, res) {
    try {
        const { accessToken } = req.body;
        
        if (!accessToken) {
            return res.status(400).json({ error: 'Token de acesso é obrigatório' });
        }
        const decodificado = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        
        const information = await prisma.user.findFirst({
            where: { id: decodificado.id },
            include: { publishedPosts: { 
                include: { candidates: {
                    include: {
                        studentRecord: true
                    }
                }}
            }}
        })

        res.status(200).json(information);
    } catch (error) {
        console.error("Erro ao buscar informações do professor:", error);

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
    getAllUsers,
    createUser,
    checkUserExists,
    setStudentRecord,
    getSpecificStudent,
    studentOpportunityHistory,
    teacherHistoryInformation
}