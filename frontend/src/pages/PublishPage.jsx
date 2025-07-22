import { useEffect, useState } from "react"
import api from '../services/api'
import { userAuth } from "../services/userAuth"
import { useNavigate } from "react-router-dom"
import imagem from '../assets/img_PublishingPage.png';

const PublishPage = () => {
	const [tokenAcesso, setTokenAcesso] = useState("")
	const navigate = useNavigate();

	useEffect(() => {
		const token = userAuth.getAccessToken();
		setTokenAcesso(token)
	}, [])

	const handleOpportunityCreation = async (event) => {
        event.preventDefault();

		const titulo = document.getElementById("titulo-oportunidade").value;
		const descricao = document.getElementById("descricao").value;
		const tipo = document.getElementById("tipo-oportunidade").value;
		const prazoInput = document.getElementById("prazo-inscricao").value;
		const prazo = new Date(prazoInput).toISOString();
		const cidade = document.getElementById("cidade-inscricao").value;
		const estado = document.getElementById("estado-inscricao").value;
		const horas = parseInt(document.getElementById("carga-horaria").value, 10)
		
		if (!titulo || !descricao || !tipo || !prazoInput || !cidade || !estado || !horas ){
			alert("Por favor, preencha todos os campos e selecione um cargo.");
			return;
		}

        const formData = { 
			tittle: titulo, 
			description: descricao,
			type: tipo, 
			deadline: prazo, 
			city: cidade,
			state: estado,
			hours: horas, 
			tokenAcesso: tokenAcesso
		}

		try {
			const response = await api.post("/post", formData)

			if (response.status === 201){
				alert("Postagem criada!")
				navigate("/feed");
			}
		} catch (err) {
			console.error("Erro:", err);
			alert("Erro ao criar post. Tente novamente.");
		}
        
    }

	return (
		<div className="w-full min-h-screen flex justify-center bg-mainbg">
			<section className="max-w-xl max-h-md flex items-center pl-10 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-24 mt-25">
				<img src={imagem} alt="" className="h-auto pointer-events-none w-xl self-start" />
			</section>
			<section className="text-extrabold bg-mainbg p-[20px] sm:p-[24px] md:p-[32px] lg:p-[48px] xl:p-[64px] mt-10">
				<div>
					<h1 className="text-2xl w-full font-black text-darkred text-center">Adicione sua oportunidade! </h1>
					<form className="pt-4 w-[80vh] space-y-4" onSubmit={handleOpportunityCreation}>
						<input type="text" id="titulo-oportunidade" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Título da Oportunidade" />
						<div className="flex items-center space-x-2 mt-2">
							<select id="tipo-oportunidade" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14">
								<option value="">Selecione o tipo da Oportunidade</option>
								<option value="EXTENSION">Extensão</option>
								<option value="COMPLEMENTARY">Complementar</option>
							</select>
							<input type="text" id="pre-requisito" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14 " placeholder="Tem pré-requisito?" />
						</div>
						<div className="flex items-center space-x-2 mt-2">
							<input type="text" id="prazo-inscricao" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Prazo de Inscrição" />
							<input type="text" id="cidade-inscricao" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Cidade" />
							<input type="text" id="estado-inscricao" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Estado" />
						</div>
						<input type="text" id="descricao" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Descrição" />
						<div className="flex items-center space-x-2 mt-2">
							<input type="text" id="carga-horaria" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Carga horária estimada" />
						</div>
						<button type="submit" className="bg-white text-darkred rounded-xl font-black w-full h-9 sm:h-10 md:h-12 lg:h-14  mt-4">Publicar</button>
					</form>
				</div>
			</section>
		</div>
	);
}

export default PublishPage