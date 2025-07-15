import { useEffect, useState } from "react"
import api from '../services/api'
import Header from "../components/header.jsx"
import Login from "../components/login.jsx"
import { Link } from "react-router-dom"

const HomePage = () => {
	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		api.get('/users')
			.then((res) => setUsuarios(res.data))
			.catch((err) => console.error({ error: "Erro ao buscar usuários", err }))
	}, [usuarios])

	return (
		<div className="w-full min-h-screen bg-mainbg">
			<section className="text-extrabold bg-mainbg p-20">
				<h1 className="text-4xl max-w-md">Conecte-se às melhores oportunidades no maior <span className="text-darkred">Centro de Informática</span> do país.</h1>
				<div className="max-w-md">
					<Login />
					<p className="pt-3 text-extrabold pl-4 text-center">Ainda não faz parte do LinkeCIn? <Link to="/register" className="text-darkred underline font-bold">Cadastre-se agora</Link></p>
				</div>
			</section>
		</div>
	);
}

export default HomePage