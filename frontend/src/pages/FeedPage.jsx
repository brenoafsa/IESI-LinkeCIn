import { useEffect, useState } from "react"
import api from '../services/api'
import Opportunity from "../components/opportunity"
import { Folder, Clock, Check, User, CirclePlus } from "lucide-react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { userAuth } from "../services/userAuth"
import imagem from "/src/assets/img_CInProfile.png";

const FeedPage = () => {
    const [posts, setPosts] = useState([])
    const [tipo, setTipo] = useState('');
    const [prazo, setPrazo] = useState('');
    const [usuario, setUsuario] = useState();
    const token = userAuth.getAccessToken();


    useEffect(() => {
        api.get('/post/open')
            .then((res) => setPosts(res.data))
            .catch((err) => console.error({ error: "Erro ao buscar posts", err }))

        if (token) {
            api.post('/student/specific', { accessToken: token })
                .then((res) => setUsuario(res.data))
                .catch((err) => console.error("Erro ao buscar informações do usuário", err))
        }
    }, [token]);

    useEffect(() => {
    const params = {};

    if (tipo && tipo !== 'tipo') {
        const tipoMap = {
            mon: "COMPLEMENTARY",
            pex: "EXTENSION",
            ppe: "RESEARCH",
            est: "INTERNSHIP",
            eve: "EVENT"
        };
        params.tipo = tipoMap[tipo];
    }

    if (prazo && prazo !== 'prazo' && prazo !== 'todas') {
        params.prazo = prazo;
    }

    const rota = Object.keys(params).length > 0 ? '/filtrar' : '/post/open';

    api.get(rota, { params })
        .then((res) => setPosts(res.data))
        .catch((err) => console.error('Erro ao filtrar posts:', err));
}, [tipo, prazo]);


    const [ativo, setAtivo] = useState(false);

    const handleClick = () => {
        setAtivo(!ativo);
    };

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate("/publish");
    };

    // Função para lidar com os filtros

    const handleFiltros = (e) => {
    e.preventDefault();
    
    const params = {};
    if (tipo && tipo !== 'tipo') {
        // Mapeia os valores do frontend para os valores do backend
        const tipoMap = {
            mon: "COMPLEMENTARY",
            pex: "EXTENSION",
            ppe: "RESEARCH",
            est: "INTERNSHIP",
            eve: "EVENT"
        };
        params.tipo = tipoMap[tipo];
    }
    if (prazo && prazo !== 'prazo' && prazo !== 'todas') {
        params.prazo = prazo;
    }

    // Se tiver filtros, usa a rota /filtrar, senão busca todos os posts abertos
    const rota = Object.keys(params).length > 0 ? '/filtrar' : '/post/open';

    api.get(rota, { params })
        .then((res) => setPosts(res.data))
        .catch((err) => console.error('Erro ao filtrar posts:', err));
};

    //encerra função pra lidar com filtros

    return (
        <div className="min-h-screen bg-mainbg lg:flex">
            <section className="lg:w-1/4 w-full flex h-full flex-col gap-1 p-2 mt-8 ml-10 mr-5 self-stretch">
                <div className="p-4 bg-white rounded-xl relative flex flex-col items-center justify-center">

                    <div className="w-full h-30 bg-darkred rounded-lg overflow-hidden">
                        <img src={imagem} alt="" className="object-cover w-full h-full" />
                    </div>

                    <div className="absolute flex items-center justify-center text-white text-2xl bg-[darkred] w-16 h-16 font-bold rounded-full">{usuario?.fullName.charAt(0)}</div>
                    <h3 className="text-xl font-bold text-darkred mt-5 text-center">{usuario?.fullName}</h3>
                    <p className="text-gray-600 text-center">
                        {usuario?.studentRecord
                            ? `Estudante de ${usuario.studentRecord.course} - ${usuario.studentRecord.entrance}`
                            : usuario?.role ? `Bem vindo professor!` : ""}
                    </p>
                </div>

                <button onClick={() => navigate('/favorites')} className="bg-primaryred text-white font-semibold px-4 py-2 rounded-lg mt-5 hover:bg-darkred transition-colors">
                    Oportunidades Favoritadas
                </button>
                <button className="bg-primaryred text-white font-semibold px-4 py-2 rounded-lg mt-2 hover:bg-darkred transition-colors">
                    Histórico de Participação
                </button>
                <button className="bg-primaryred text-white font-semibold py-4 rounded-lg mt-2 hover:bg-darkred transition-colors">
                    Relatório de Horas Complementares
                </button>
            </section>
            <div className="lg:w-2/3 w-full flex flex-col gap-4  mt-10 ">
                <section className="flex rounded-xl">
                    <div className="w-3/4 bg-white rounded-xl flex p-3">
                        <form onSubmit={handleFiltros} className="flex items-center gap-2 w-full">
                            <Folder size={16} className="text-black inline-block" />
                            <select className="text-darkred font-normal w-32" value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                                id="tipo-select"
                            >
                                <option value="tipo">Tipo</option>
                                <option value="mon">Monitoria</option>
                                <option value="pex">Projeto de Extensão</option>
                                <option value="ppe">Projeto de Pesquisa</option>
                                <option value="est">Estágio</option>
                                <option value="eve">Evento</option>
                            </select>
                            <Clock size={16} className="text-black inline-block" />
                            <select className="text-darkred font-normal" value={prazo}
                                onChange={(e) => setPrazo(e.target.value)}
                                id="prazo-select"
                            >
                                <option value="prazo">Prazo</option>
                                <option value="hj">Hoje</option>
                                <option value="use">Última semana</option>
                                <option value="ume">Último mês</option>
                                <option value="todas">Todas as Oportunidades</option>
                            </select>
                            <button type="button" onClick={handleClick} className={`text-darkred px-4 py-2 rounded-lg transition-colors ${ativo ? 'bg-red-100' : ''}`}>
                                <Check size={16} className="text-black inline-block" />
                                Apenas Compatíveis
                            </button>
                        </form>
                    </div>
                    <button onClick={handleClick1} className="w-1/4 flex items-center ml-3 gap-2 bg-primaryred rounded-lg text-white font-semibold hover:bg-darkred transition-colors">
                        <CirclePlus size={32} className="ml-5" />
                        <span className="pr-5">
                            Publicar nova oportunidade
                        </span>
                    </button>

                </section >
                <div className="flex flex-col gap-4 mt-4">
                    {posts.map((post) => (
                        <Link key={post.id} to={`/opportunity/${post.id}`}>
                            <Opportunity key={post.id} opportunity={post} />
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default FeedPage