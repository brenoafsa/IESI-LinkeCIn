// src/controllers/userController.js
import prisma from '../../prismaClient.js'
import bcrypt from 'bcrypt'

async function getAllUsers (req, res) {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (err) {
        console.error('Erro ao buscar usuários:', err)
        res.status(500).json({
            error: 'Erro ao buscar usuários',
            details: err.message
        })
    }
}

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
        res.status(201).json(novoUsuario); // Retorna status 201 (Created) para criação bem-sucedida
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
        // 1. Busca o usuário pelo email
        const user = await prisma.user.findUnique({
            where: { email }
        });

        // 2. Se não encontrar, retorna erro
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // 3. Compara a senha fornecida com a senha hash salva
        const senhaCorreta = await bcrypt.compare(password, user.password);

        if (!senhaCorreta) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        // 4. Se tudo certo, retorna dados do usuário
        return res.status(200).json({
            message: 'Login bem-sucedido',
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        console.error('Erro ao verificar usuário:', err);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
}

export default {
    getAllUsers,
    createUser,
    checkUserExists
}