import { useEffect, useState } from "react"
import api from '../services/api'
import Register from "../components/register"
import { Link } from "react-router-dom"

const RegisterPage = () => {
	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		api.get('/users')
		.then((res) => setUsuarios(res.data))
		.catch((err) => console.error({ error: "Erro ao buscar usuários", err }))
	}, [usuarios])

	return (
		<div className="w-full min-h-screen bg-mainbg flex ml-auto">
			<section className="text-extrabold bg-mainbg">
				<div className="w-max-md mx-auto">
					<h1 className="text-2xl max-w-md font-black text-darkred text-center">Crie sua conta! </h1>
					<Register />
					<p className="pt-3 text-extrabold pl-4 text-center">Já faz parte do LinkeCIn? <Link to="/" className="text-darkred underline font-bold">Entrar</Link></p>
				</div>
			</section>
		</div>
	);
}

export default RegisterPage