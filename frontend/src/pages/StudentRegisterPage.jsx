import { useEffect, useState } from "react"
import api from '../services/api'
import StudentRegister from "../components/student"
import { Link } from "react-router-dom"

const StudentRegisterPage = () => {
	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		api.get('/users')
		.then((res) => setUsuarios(res.data))
		.catch((err) => console.error({ error: "Erro ao buscar usuários", err }))
	}, [usuarios])

	return (
		<div className="w-full min-h-screen bg-mainbg">
			<section className="text-extrabold bg-mainbg p-20 pl-170">
				<div className="w-100">
					<h1 className="text-2xl max-w-md font-black text-darkred text-center">Continue seu cadastro! </h1>
					<StudentRegister />
					<p className="pt-3 text-extrabold pl-4 text-center">Já faz parte do LinkeCIn? <Link to="/" className="text-darkred underline font-bold">Entrar</Link></p>
				</div>
			</section>
		</div>
	);
}

export default StudentRegisterPage