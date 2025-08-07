import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import api from '../services/api';
import { userAuth } from '../services/userAuth';
import DoughnutChart from '../components/DoughnutChart';

function StudentAnalyticsPage() {
  const navigate = useNavigate();
  const [totalCandidaturas, setTotalCandidaturas] = useState(0);
  const [dadosTiposCandidaturas, setDadosTiposCandidaturas] = useState({});
  const [dadosTiposParticipacoes, setDadosTiposParticipacoes] = useState({});
  const [oportunidadesRecentes, setOportunidadesRecentes] = useState([]);
  const [totalParticipacoes, setTotalParticipacoes] = useState(0);
  const token = userAuth.getAccessToken();

  const coresPieChart = [
    '#FF6384',
    '#36A2EB',
    '#FFCD56',
    '#4BC0C0' 
  ];

  const mapearTipo = (tipo) => {
    switch(tipo) {
      case 'EXTENSION': return 'Extensão';
      case 'RESEARCH': return 'Pesquisa';
      case 'COMPLEMENTARY': return 'Complementar';
      default: return tipo;
    }
  };

  useEffect(() => {
  if (token) {
    api.post('/student/posts', { accessToken: token })
      .then((res) => {
        const candidaturas = res.data;
        setTotalCandidaturas(candidaturas.length);
        
        const tiposCandidaturas = {};
        candidaturas.forEach(oportunidade => {
          const tipoMapeado = mapearTipo(oportunidade.type);
          tiposCandidaturas[tipoMapeado] = (tiposCandidaturas[tipoMapeado] || 0) + 1;
        });
        setDadosTiposCandidaturas(tiposCandidaturas);
        
        const recentes = candidaturas
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4);
        setOportunidadesRecentes(recentes);

        return api.post('/student/participations', { accessToken: token });
      })
      .then((res) => {
        const participacoes = res.data;
        setTotalParticipacoes(participacoes.length);
        
        const tiposParticipacoes = {};
        
        participacoes.forEach(oportunidade => {
          const tipoMapeado = mapearTipo(oportunidade.type);
          tiposParticipacoes[tipoMapeado] = (tiposParticipacoes[tipoMapeado] || 0) + 1;
        });
        
        setDadosTiposParticipacoes(tiposParticipacoes);
      })
      .catch((err) => {
        console.error({ error: "Erro ao buscar dados do estudante", err });
        setDadosTiposParticipacoes({});
        setTotalParticipacoes(0);
      });
  }
}, [token]);

  const criarDadosComCores = (dados) => {
    return Object.keys(dados).map((tipo, index) => ({
      nome: tipo,
      cor: coresPieChart[index % coresPieChart.length]
    }));
  };

  const candidaturasComCores = criarDadosComCores(dadosTiposCandidaturas);
  const participacoesComCores = criarDadosComCores(dadosTiposParticipacoes);

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
      
     {/* Cards de estatísticas */}
      <div className="flex gap-6 mb-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-[15px] shadow-md w-64">
            <h3 className="text-lg font-semibold text-black mb-3">Total de Candidaturas:</h3>
            <p className="text-4xl font-bold text-red-700">{totalCandidaturas}</p>
            <p className="text-lg font-semibold text-red-700">oportunidades</p>
          </div>

          <div className="bg-white p-6 rounded-[15px] shadow-md w-64">
            <h3 className="text-lg font-semibold text-black mb-3">Participações Efetivas:</h3>
            <p className="text-4xl font-bold text-red-700">{totalParticipacoes}</p>
            <p className="text-lg font-semibold text-red-700">atividades</p>
          </div>
        </div>

        {/* Três gráficos lado a lado */}
        <div className="flex gap-6">
          {/* Gráfico de Candidaturas */}
          <div className="bg-white p-6 rounded-[15px] shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold text-black mb-4">Candidaturas por Tipo</h3>
            <div className="flex gap-8 items-center">
              <div className="flex flex-col items-center">
                <DoughnutChart dadosCursos={dadosTiposCandidaturas} />
              </div>
              <div className="flex flex-col gap-4">
                {candidaturasComCores.map((tipo, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span 
                      className="w-4 h-4 rounded" 
                      style={{ backgroundColor: tipo.cor }}
                    ></span>
                    <span className="text-sm font-medium text-black">
                      {tipo.nome}: {dadosTiposCandidaturas[tipo.nome] || 0}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gráfico de Participações */}
          <div className="bg-white p-6 rounded-[15px] shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold text-black mb-4">Participações por Tipo</h3>
            <div className="flex gap-8 items-center">
              <div className="flex flex-col items-center">
                <DoughnutChart dadosCursos={dadosTiposParticipacoes} />
              </div>
              <div className="flex flex-col gap-4">
                {participacoesComCores.map((tipo, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span 
                      className="w-4 h-4 rounded" 
                      style={{ backgroundColor: tipo.cor }}
                    ></span>
                    <span className="text-sm font-medium text-black">
                      {tipo.nome}: {dadosTiposParticipacoes[tipo.nome] || 0}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Oportunidades Recentes */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Minhas Oportunidades Recentes</h2>
        <div className="flex flex-col gap-3 items-start">
          {oportunidadesRecentes.map((oportunidade) => (
            <Link key={oportunidade.id} to={`/opportunity/${oportunidade.id}`}>
              <div className="bg-red-700 p-3 rounded-[10px] shadow-md w-80">
                <h3 className="text-white font-semibold mb-1 text-base">{oportunidade.tittle}</h3>
                <p className="text-red-200 text-xs">
                  Tipo: {mapearTipo(oportunidade.type)} | 
                  Publicado por: {oportunidade.publisher?.fullName || 'Professor'}
                </p>
                <p className="text-red-200 text-xs">
                  Prazo: {new Date(oportunidade.deadline).toLocaleDateString('pt-BR')}
                </p>
              </div>
            </Link>
          ))}
          {oportunidadesRecentes.length === 0 && (
            <p className="text-gray-500 text-center w-full">Nenhuma oportunidade encontrada</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentAnalyticsPage;