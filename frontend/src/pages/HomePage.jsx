import { useEffect, useState } from "react"
import api from '../services/api'

const App = () => {
	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		api.get('/users')
		.then((res) => setUsuarios(res.data))
		.catch((err) => console.error({ error: "Erro ao buscar usuários", err }))
	}, [])

	return (
	usuarios.map((user) => (
		<p className="ml-2">{user.username}</p>
	))
	);
}

export default App