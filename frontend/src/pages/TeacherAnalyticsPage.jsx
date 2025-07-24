import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { userAuth } from '../services/userAuth';
import PieChart from '../components/PieChart';

function TeacherAnalyticsPage() {
     const navigate = useNavigate();
     const [quantidadePosts, setQuantidadePosts] = useState(0);
     const [dadosCursos, setDadosCursos] = useState({});
     const [totalCandidatos, setTotalCandidatos] = useState(0);
     const [dadosPostsCursos, setDadosPostsCursos] = useState([]);
     const token = userAuth.getAccessToken();

     useEffect(() => {
        api.post('/teacher/posts', { accessToken: token })
        .then((res) => {
            const posts = res.data.publishedPosts;
            setQuantidadePosts(posts.length);
            
            const quantidadeGeralCurso = {};
            const postsData = [];
            let totalCandidatos = 0;
            
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
                
                postsData.push({
                    id: post.id,
                    titulo: post.tittle,
                    tipo: post.type,
                    totalCandidatos: totalCandidatosPost,
                    candidatosPorCurso: quantidadeCursoPost
                });
            });
            
            setDadosCursos(quantidadeGeralCurso);
            setTotalCandidatos(totalCandidatos);
            setDadosPostsCursos(postsData);
        })
        .catch((err) => console.error({ error: "Erro ao buscar posts do professor", err }))
     }, [token])

  return (
    <div className="bg-mainbg min-h-screen w-full p-10">
      
      {/* Botão Voltar */}
      <div className="flex justify-start mb-6">
        <button onClick={() => navigate('/feed')} className="bg-white text-black font-semibold px-6 py-2 rounded-[15px] shadow-md hover:bg-gray-100 transition ">
          Voltar
        </button>
      </div>

      <h1 className="text-3xl font-bold text-red-700 mb-8">Distribuição de Candidatos por Curso</h1>

      {/* Seção de Estatísticas Gerais */}
      <div className="mb-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-[15px] shadow-md text-center">
            <h3 className="text-lg font-semibold text-red-700 mb-2">Total de Posts</h3>
            <p className="text-3xl font-bold text-gray-800">{quantidadePosts}</p>
          </div>
          <div className="bg-white p-6 rounded-[15px] shadow-md text-center">
            <h3 className="text-lg font-semibold text-red-700 mb-2">Total de Candidatos</h3>
            <p className="text-3xl font-bold text-gray-800">{totalCandidatos}</p>
          </div>
          <div className="bg-white p-6 rounded-[15px] shadow-md text-center">
            <h3 className="text-lg font-semibold text-red-700 mb-2">Cursos Diferentes</h3>
            <p className="text-3xl font-bold text-gray-800">{Object.keys(dadosCursos).length}</p>
          </div>
        </div>
      </div>

      {/* Seção do Gráfico de Pizza */}
      <div className="mt-8 mb-8">
        <div className="bg-white p-6 rounded-[15px] shadow-md">
          <PieChart dadosCursos={dadosCursos} />
        </div>
      </div>

      {/* Seção detalhada por post */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-red-700 mb-6">Candidatos por Post</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dadosPostsCursos.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-[15px] shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-red-700">{post.titulo}</h3>
              <p className="text-sm text-gray-600 mb-3">Tipo: {post.tipo}</p>
              <p className="text-sm font-semibold mb-3">Total de Candidatos: {post.totalCandidatos}</p>
              
              <div className="border-t pt-3">
                <h4 className="text-sm font-semibold mb-2">Por Curso:</h4>
                <div className="space-y-1">
                  {Object.entries(post.candidatosPorCurso).map(([curso, quantidade]) => (
                    <div key={curso} className="flex justify-between items-center text-sm">
                      <span className="text-left">{curso}:</span>
                      <span className="font-semibold">{quantidade}</span>
                    </div>
                  ))}
                  {Object.keys(post.candidatosPorCurso).length === 0 && (
                    <p className="text-gray-500 text-sm">Nenhum candidato</p>
                  )}
                </div>
              </div>
            </div>
          ))}
          {dadosPostsCursos.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">Nenhum post publicado ainda</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherAnalyticsPage;