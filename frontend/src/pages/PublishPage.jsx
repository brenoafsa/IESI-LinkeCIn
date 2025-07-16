import { useEffect, useState } from "react"
import api from '../services/api'
import Publication from "../components/publication"

const PublishPage = () => {
	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		api.get('/users')
		.then((res) => setUsuarios(res.data))
		.catch((err) => console.error({ error: "Erro ao buscar usuários", err }))
	}, [usuarios])

	return (
		<div className="w-full min-h-screen bg-mainbg flex p-[20px] sm:p-[24px] md:p-[32px] lg:p-[48px] xl:p-[64px]">
			<section className="text-extrabold bg-mainbg w-1/2 ml-auto">
				<div>
					<h1 className="text-2xl max-w-2xl font-black text-darkred text-center">Adicione sua oportunidade! </h1>
					<Publication />
				</div>
			</section>
		</div>
	);
}

export default PublishPage