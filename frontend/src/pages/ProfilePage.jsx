import { useEffect, useState } from "react"
import api from '../services/api'

const ProfilePage = () => {
	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		api.get('/users')
			.then((res) => setUsuarios(res.data))
			.catch((err) => console.error({ error: "Erro ao buscar usuários", err }))
	}, [usuarios])

	return (
		<div>
			<div className="min-h-screen bg-mainbg lg:flex">
				<section className="lg:w-2/3 w-full lg:flex xl:flex h-full flex-col gap-1 bg-white p-2 m-10 self-stretch rounded-xl">
					<div class="w-full h-40 bg-darkred rounded-lg"></div>
					<div className="pl-10">
						<div class="w-32 h-32 rounded-full bg-gray-400 -mt-18"></div>
						<h1 className="text-2xl font-bold text-darkred">Nome do Usuário</h1>
						<p className="text-gray-600">Estudante de {'{curso}'} {'{entrada}'} </p>
						<p className="text-gray-600 text-xs">Email institucional </p>
						<button class="px-6 py-2 rounded-xl bg-primaryred text-white mt-10 lg:w-1/4 w-full">
							Tenho interesse
						</button>
						<h1 className="text-2xl font-bold text-darkred mt-5">Histórico de Oportunidades</h1>
					</div>
				</section>
				<section className="lg:w-1/4 w-full flex h-full flex-col gap-1 bg-white p-2 m-10 self-stretch rounded-xl">
					<div className="p-4">
						<h2 className="text-xl font-bold text-darkred mt-5">Informações Adicionais</h2>
						<p className="text-gray-600">Aqui você pode adicionar informações adicionais sobre o usuário.</p>
					</div>
				</section>
			</div>
		</div>
	);
}
export default ProfilePage