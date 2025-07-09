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
        const senhaHashed = await bcrypt.hash(password, 10);
        const novoUsuario = await prisma.user.create({
            data: { fullName, email, password: senhaHashed, role }
        });
        res.status(200).json(novoUsuario);
     } catch (err) {
        res.status(500).json({ error: "Erro ao criar usuário" })
     }
}

export default {
    getAllUsers,
	createUser
}