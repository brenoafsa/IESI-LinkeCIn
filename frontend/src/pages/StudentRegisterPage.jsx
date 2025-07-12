import { useEffect, useState } from "react"
import api from '../services/api'

const StudentRegisterPage = () => {
	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		api.get('/users')
		.then((res) => setUsuarios(res.data))
		.catch((err) => console.error({ error: "Erro ao buscar usuários", err }))
	}, [usuarios])

	return (
		<div> <h1>Student Register Page</h1>
		</div>
	);
}

export default StudentRegisterPage