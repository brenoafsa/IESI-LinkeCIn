import { useEffect, useState } from "react"
import api from '../services/api'
import { Link } from "react-router-dom"
import Opportunity from "../components/opportunity"
import { Folder } from "lucide-react"

const FeedPage = () => {
	const [usuarios, setUsuarios] = useState([])
	const [tipo, setTipo] = useState('');

	useEffect(() => {
		api.get('/users')
			.then((res) => setUsuarios(res.data))
			.catch((err) => console.error({ error: "Erro ao buscar usuários", err }))
	}, [usuarios])

	return (
		<div className="min-h-screen bg-mainbg lg:flex">
			<section className="lg:w-1/4 w-full flex h-full flex-col gap-1 bg-white p-2 m-10 self-stretch rounded-xl">
				<div className="p-4">
					<h2 className="text-xl font-bold text-darkred mt-5">Informações Adicionais</h2>
					<p className="text-gray-600">Aqui você pode adicionar informações adicionais sobre o usuário.</p>
				</div>
			</section>
			<section className="lg:w-2/3 w-full lg:flex xl:flex h-full flex-col gap-1 m-10 self-stretch rounded-xl">
				<div className="w-full bg-white rounded-xl flex p-3">
					<form>
						<Folder size={16} className="text-darkred inline-block" />
						<select			className="text-darkred font-normal pl-3"					value={tipo}
								onChange={(e) => setTipo(e.target.value)}
								id="curso-select"
							>
								<option value="">Oportunidade 1</option>
								<option value="cc">Oportunidade 2</option>
								<option value="ec">Oportunidade 3</option>
								<option value="si">Oportunidade 4</option>
								<option value="ia">Oportunidade 5</option>
							</select>
					</form>
				</div>
				<Opportunity />
			</section >
		</div >
	);
}

export default FeedPage