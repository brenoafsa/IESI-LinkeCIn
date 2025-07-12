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
		<div> <h1>Profile Page</h1>
		</div>
	);
}

export default ProfilePage