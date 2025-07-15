import { useEffect, useState } from "react"
import api from '../services/api'
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
		<div className="w-full min-h-screen bg-mainbg p-[40px] sm:p-[48px] md:p-[64px] lg:p-[96px] xl:p-[128px]">
			<section className="text-extrabold bg-mainbg">
				<h1 className="max-w-2xl max-h-10xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Conecte-se às melhores oportunidades no maior <span className="text-darkred">Centro de Informática</span> do país.</h1>
				<div className="max-w-2xl max-h-10xl">
					<Login />
					<p className="pt-3 text-extrabold pl-4 text-center">Ainda não faz parte do LinkeCIn? <Link to="/register" className="text-darkred underline font-bold">Cadastre-se agora</Link></p>
				</div>
			</section>
		</div>
	);
}

export default HomePage