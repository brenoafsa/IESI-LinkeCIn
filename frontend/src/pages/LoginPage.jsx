import { useEffect, useState } from "react"
import api from '../services/api'
import { Link, useNavigate } from "react-router-dom"
import imagem from '../assets/img_HomePage.png';

const HomePage = () => {
	const [usuarios, setUsuarios] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		api.get('/users')
			.then((res) => setUsuarios(res.data))
			.catch((err) => console.error({ error: "Erro ao buscar usuários", err }))
	}, [usuarios])

	const handleLoginTry = async (event) => {
		event.preventDefault();

		const email = document.getElementById("email-login").value;
		const password = document.getElementById("password-login").value;

		if (!email || !password) {
			alert("Por favor, preencha todos os campos e selecione um cargo.");
			return;
		}

		// envia os dados do formulário
		const formData = { email, password };

		try {
			const response = await api.post("/login", formData);

			if (response.status === 200) {
				alert("Você logou com sucesso!");
				navigate("/feed");
			}
		} catch (error) {
			console.error("Erro:", error);
			if (error.response) {
				console.error("Dados da resposta:", error.response.data);
				console.error("Status:", error.response.status);
			}
			alert("Erro ao criar usuário. Tente novamente.");
		}
	};

	return (
		<div className="min-h-screen bg-mainbg">
			<div className="w-full min-h-screen flex bg-mainbg">
				<section className="text-extrabold bg-mainbg flex flex-row w-full">
					<div className="w-1/2 max-h-10xl p-[20px] sm:p-[24px] md:p-[32px] lg:p-[48px] xl:p-[64px] mt-20">
						<h1 className="max-w-2xl max-h-10xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Conecte-se às melhores oportunidades no maior <span className="text-darkred">Centro de Informática</span> do país.</h1>
						<form className="pt-10 space-y-4">
							<input type="email" id="email-login" className="p-2 rounded-xl w-full border-3 border-darkred focus:outline-none" placeholder="Email" />
							<input type="password" id="password-login" className="p-2 rounded-xl w-full border-3 border-darkred focus:outline-none" placeholder="Senha" />
							<button type="submit" className="bg-white text-darkred p-2 rounded-xl font-black w-full h-12">Continuar</button>
						</form>
						<p className="pt-3 text-extrabold pl-4 text-center">Ainda não faz parte do LinkeCIn? <Link to="/register" className="text-darkred underline font-bold">Cadastre-se agora</Link></p>
					</div>
					<div className="w-1/2 max-h-md flex items-center justify-center	">
						<img src={imagem} alt="" className="h-auto mx-auto pointer-events-none max-w-2xl self-start" />
					</div>
				</section>
			</div>
		</div>

	);
}

export default HomePage