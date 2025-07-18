import prisma from '../../prismaClient.js'
import bcrypt from 'bcrypt'

async function getAllUsers (req, res) {
    try {
		const users = await prisma.user.findMany({
            include: { studentRecord: true }
        })
		res.json(users)
	} catch (err) {
		console.error('Erro ao buscar usuários:', err)
		res.status(500).json({ 
			error: 'Erro ao buscar usuários',
			details: err.message 
		}) 
	}
}

// criar usuário, recebe o email, nome, senha e o role
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

async function setStudentRecord(req, res){
    const { userId, horas, curso, entrada, disciplinas } = req.body;

    try {
        const historicoEscolar = await prisma.studentRecord.create({
            data: { studentId: userId, complementaryHours: horas, course: curso, entrance: entrada, finishedSubjects: disciplinas}
        })
        res.status(201).json(historicoEscolar)
    } catch (err) {
        console.error("Erro ao criar histórico escolar. Tente novamente.")
        res.status(500).json({ error: "Erro ao criar registro do estudante" });
    }
}

export default {
    getAllUsers,
	createUser,
    setStudentRecord
}