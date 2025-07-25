import { useEffect, useState } from "react"
import api from '../services/api'
import Opportunity from "../components/opportunity"
import { Folder } from "lucide-react"
import { Link } from "react-router-dom"

const FeedPage = () => {
    const [posts, setPosts] = useState([])
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        api.get('/post')
            .then((res) => setPosts(res.data))
            .catch((err) => console.error({ error: "Erro ao buscar posts", err }))
    }, [])

    return (
        <div className="min-h-screen bg-mainbg lg:flex">
            <section className="lg:w-1/4 w-full flex h-full flex-col gap-1 bg-white p-2 m-10 self-stretch rounded-xl">
                <div className="p-4">
                    <h3 className="text-xl font-bold text-darkred mt-5">Nome Completo</h3>
					<p className="text-gray-600">Estudante de {'{curso}'} {'{entrada}'} </p>
                </div>
            </section>
            <section className="lg:w-2/3 w-full lg:flex xl:flex h-full flex-col gap-1 m-10 self-stretch rounded-xl">
                <div className="w-full bg-white rounded-xl flex p-3">
                    <form>
                        <Folder size={16} className="text-darkred inline-block" />
                        <select className="text-darkred font-normal pl-3" value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                                id="tipo-select">
								<option disabled hidden selected value="">Tipo</option>
								<option value="mon">Monitoria</option>
								<option value="pe">Projeto de extensão</option>
								<option value="pp">Projeto de pesquisa</option>
								<option value="est">Estágio</option>
								<option value="eve">Evento</option>
                            </select>
                    </form>
                </div>
                {posts.map((post) => (
					<Link key={post.id} to={`/opportunity/${post.id}`}>
                    	<Opportunity key={post.id} opportunity={post} />
					</Link>
                ))}
            </section >
        </div >
    );
}

export default FeedPage