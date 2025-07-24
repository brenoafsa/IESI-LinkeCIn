import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import api from '../services/api';
import { userAuth } from '../services/userAuth';
import PieChart from '../components/PieChart';

function TeacherAnalyticsPage() {
     const navigate = useNavigate();
     const [quantidadePosts, setQuantidadePosts] = useState(0);
     const [dadosCursos, setDadosCursos] = useState({});
     const [totalCandidatos, setTotalCandidatos] = useState(0);
     const [dadosPostsCursos, setDadosPostsCursos] = useState([]);
     const [oportunidadeMaisInteresse, setOportunidadeMaisInteresse] = useState(null);
     const token = userAuth.getAccessToken();

     useEffect(() => {
        api.post('/teacher/posts', { accessToken: token })
        .then((res) => {
            const posts = res.data.publishedPosts;
            setQuantidadePosts(posts.length);
            
            const quantidadeGeralCurso = {};
            const postsData = [];
            let totalCandidatos = 0;
            let postComMaisCandidatos = null;
            let maxCandidatos = 0;
            
            posts.forEach(post => {
                const quantidadeCursoPost = {};
                let totalCandidatosPost = 0;
                
                post.candidates.forEach(candidate => {
                    if (candidate.studentRecord) {
                        const curso = candidate.studentRecord.course;
                        
                        quantidadeGeralCurso[curso] = (quantidadeGeralCurso[curso] || 0) + 1;
                        quantidadeCursoPost[curso] = (quantidadeCursoPost[curso] || 0) + 1;
                        
                        totalCandidatos++;
                        totalCandidatosPost++;
                    }
                });
                
                if (totalCandidatosPost > maxCandidatos) {
                    maxCandidatos = totalCandidatosPost;
                    postComMaisCandidatos = post;
                }
                
                postsData.push({
                    id: post.id,
                    titulo: post.tittle,
                    tipo: post.type,
                    totalCandidatos: totalCandidatosPost,
                    candidatosPorCurso: quantidadeCursoPost,
                    createdAt: post.createdAt
                });
            });
            
            setDadosCursos(quantidadeGeralCurso);
            setTotalCandidatos(totalCandidatos);
            setDadosPostsCursos(postsData);
            setOportunidadeMaisInteresse(postComMaisCandidatos);
        })
        .catch((err) => console.error({ error: "Erro ao buscar posts do professor", err }))
     }, [token])

     const oportunidadesRecentes = dadosPostsCursos
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4);

  return (
    <div className="bg-mainbg min-h-screen w-full p-10">
      <div className="flex justify-start mb-8">
        <button 
          onClick={() => navigate('/feed')} 
          className="bg-red-700 text-white font-semibold px-6 py-2 rounded-[15px] shadow-md hover:bg-red-800 transition"
        >
          Voltar
        </button>
      </div>

      <div className="flex gap-6 mb-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-[15px] shadow-md w-64">
            <h3 className="text-lg font-semibold text-black mb-3">Oportunidades Publicadas:</h3>
            <p className="text-4xl font-bold text-red-700">{quantidadePosts}</p>
            <p className="text-lg font-semibold text-red-700">neste período</p>
          </div>

          <div className="bg-white p-6 rounded-[15px] shadow-md w-64">
            <h3 className="text-lg font-semibold text-black mb-3">Oportunidade com mais interesse:</h3>
            <p className="text-lg font-semibold text-red-700">
              {oportunidadeMaisInteresse ? oportunidadeMaisInteresse.tittle : 'Nenhuma oportunidade ainda'}
            </p>
          </div>
        </div>

        <div className="w-90 bg-white p-6 rounded-[15px] shadow-md h-full justify-center flex">
          <p className='text-lg font-semibold'>por tipos:</p>
          <div className="">
            <PieChart dadosCursos={dadosCursos} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Oportunidades Recentes</h2>
        <div className="flex flex-col gap-3 items-start">
          {oportunidadesRecentes.map((post) => (
            <Link key={post.id} to={`/opportunity/${post.id}`}>
              <div key={post.id} className="bg-red-700 p-2 rounded-[10px] shadow-md w-64">
                <h3 className="text-white font-semibold mb-1 text-base">{post.titulo}</h3>
                <p className="text-red-200 text-xs">Candidatos: {post.totalCandidatos}</p>
              </div>
            </Link>
          ))}
          {oportunidadesRecentes.length === 0 && (
            <p className="text-gray-500 text-center w-full">Nenhuma oportunidade recente</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherAnalyticsPage;