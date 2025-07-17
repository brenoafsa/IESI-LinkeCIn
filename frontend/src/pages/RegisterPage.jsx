import { useEffect, useState } from "react"
import api from '../services/api'
import { Link } from "react-router-dom"

const RegisterPage = () => {
	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		api.get('/users')
			.then((res) => setUsuarios(res.data))
			.catch((err) => console.error({ error: "Erro ao buscar usuários", err }))
	}, [usuarios])

	return (
		<div className="w-full min-h-screen bg-mainbg flex p-[20px] sm:p-[24px] md:p-[32px] lg:p-[48px] xl:p-[64px]">
			<section className="text-extrabold bg-mainbg ml-auto">
				<div className="w-max-md mx-auto">
					<h1 className="text-2xl max-w-2xl font-black text-darkred text-center">Crie sua conta! </h1>
					<form className="pt-4 w-full space-y-4">
						<input type="text" id="nome-completo" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Nome Completo" />
						<input type="email" id="email-registro" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Email" />
						<input type="password" id="password-registro" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14 " placeholder="Senha" />
						<h1 className="text-xl text-center">Selecione abaixo o seu cargo:</h1>
						<div className="flex items-center mt-2">
							<button type="button" className="bg-darkred text-white rounded-xl w-full h-9 sm:h-10 md:h-12 lg:h-14  mr-2">Professor</button>
							<button type="button" className="bg-darkred text-white rounded-xl w-full h-9 sm:h-10 md:h-12 lg:h-14  mr-2">Aluno</button>
						</div>
						<button type="submit" className="bg-white text-darkred rounded-xl font-black w-full h-9 sm:h-10 md:h-12 lg:h-14  mt-4">Continuar</button>
					</form>
					<p className="pt-3 text-extrabold pl-4 text-center">Já faz parte do LinkeCIn? <Link to="/login" className="text-darkred underline font-bold">Entrar</Link></p>
				</div>
			</section>
		</div>
	);
}

export default RegisterPage