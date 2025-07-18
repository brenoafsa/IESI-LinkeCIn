import { useEffect, useState } from "react"
import api from '../services/api'
import { userAuth } from "../services/userAuth";
import { Link, useNavigate } from "react-router-dom"
import imagem from '../assets/img_HomePage.png';
  
const HomePage = () => {
	const navigate = useNavigate()

	const handleLoginTry = async (event) => {
			event.preventDefault();
	
			const email = document.getElementById("email-login").value;
			const password = document.getElementById("password-login").value;
	
			if ( !email || !password ) {
				alert("Por favor, preencha todos os campos e selecione um cargo.");
				return;
			}
	
			//envia os dados do formulário
			const formData = { email, password };
	
			try {
				const response = await api.post("/login", formData);
	
				if (response.status === 200 ) {
					userAuth.setAccessToken(response.data.accessToken)
					navigate("/feed");
				}
			} catch (error) {
				console.error("Erro:", error);
				alert("Erro logar. Tente novamente.");
			}
		};

	return (
		<div className="relative w- min-h-screen bg-mainbg p-[40px]">
  		<img src={imagem} alt="" className="absolute right-10 top-1/2 transform -translate-y-1/2 h-250 pointer-events-none"/>
		  <div className="w-full min-h-screen bg-mainbg p-[40px] sm:p-[48px] md:p-[64px] lg:p-[96px] xl:p-[128px]">
			
			<section className="text-extrabold bg-mainbg ">
				<h1 className="max-w-2xl max-h-10xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Conecte-se às melhores oportunidades no maior <span className="text-darkred">Centro de Informática</span> do país.</h1>
				<div className="max-w-2xl max-h-10xl">
					<form className="pt-10 space-y-4" onSubmit={handleLoginTry}>
						<input type="email" id="email-login" className="p-2 rounded-xl w-full border-3 border-darkred focus:outline-none" placeholder="Email" />
						<input type="password" id="password-login" className="p-2 rounded-xl w-full border-3 border-darkred focus:outline-none" placeholder="Senha" />
						<button type="submit" className="bg-white text-darkred p-2 rounded-xl font-black w-full h-12">Continuar</button>
					</form>
					<p className="pt-3 text-extrabold pl-4 text-center">Ainda não faz parte do LinkeCIn? <Link to="/register" className="text-darkred underline font-bold">Cadastre-se agora</Link></p>
				</div>
			</section>
		  </div>
		</div> 
	);
}

export default HomePage