import { useEffect, useState } from "react"
import api from '../services/api'
import Header from "../components/header"

const RegisterPage = () => {
	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		api.get('/users')
		.then((res) => setUsuarios(res.data))
		.catch((err) => console.error({ error: "Erro ao buscar usuários", err }))
	}, [usuarios])

	return (
		<div>
		</div>
	);
}

export default RegisterPage