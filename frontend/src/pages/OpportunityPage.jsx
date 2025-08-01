import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../services/api';
import { userAuth } from '../services/userAuth';

function OpportunityPage() {
  const navigate = useNavigate();
  const [information, setInformation] = useState(null);
  const { id } = useParams();
  const token = userAuth.getAccessToken();

  useEffect(() => {
    api.get(`/post/${id}`)
      .then((res) => setInformation(res.data))
      .catch((err) => console.error({ error: "Erro ao buscar post", err }))
  }, [id])

  const formatDeadline = (deadline) => {
    const date = new Date(deadline);
    const now = new Date();
    const diffTime = date - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
      return `faltam ${diffDays} dias!`;
    } else if (diffDays === 0) {
      return "último dia!";
    } else {
      return "prazo encerrado";
    }
  };

  const getTypeInPortuguese = (type) => {
    switch (type) {
      case 'COMPLEMENTARY':
        return 'Atividade Complementar';
      case 'EXTENSION':
        return 'Extensão';
      case 'RESEARCH':
        return 'Pesquisa';
      default:
        return type;
    }
  };

  const isOpportunityOpen = (deadline) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    return deadlineDate > now;
  };

  const handleInterest = async () => {
    const formData = {
      opportunityId: id,
      accessToken: token
    }

    try {
      const response = await api.post('/post/apply', formData)

      if (response.status === 200) {
        alert("Você se candidatou à essa Oportunidade!")
      }
    } catch (error) {
      console.error("Erro ao se candidatar:", error);

      if (error.response) {
        const errorMessage = error.response.data.error || "Erro desconhecido";
        alert(`Erro: ${errorMessage}`);
      } else if (error.request) {
        alert("Erro de conexão. Tente novamente.");
      } else {
        alert("Algo deu errado. Tente novamente");
      }
    }
  }

  if (!information) {
    return (
      <div className="bg-mainbg min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="bg-mainbg min-h-screen">
      {/* botao voltar */}
      <div className="w-full">
        <button onClick={() => navigate('/feed')} className="px-10 ml-10 bg-white rounded-xl py-2 font-bold text-darkred mt-5 shadow-md hover:bg-primaryred hover:text-white transition hover:shadow-primaryred/40">
          Voltar
        </button>
      </div>

      {/* Blocos lado a lado */}
      <div className="bg-mainbg flex justify-center gap-8 px-10 mt-8">
        {/* o bloco do meio */}
        <div className="flex-1 flex flex-col space-y-10 bg-white rounded-[12px] p-6 shadow-md">
          <h1 className="text-xl font-bold text-red-700 mb-2">{information.tittle}</h1>
          <h2>{getTypeInPortuguese(information.type)}</h2>

          <h2 className="text-xl font-bold text-red-700 mb-2">Descrição Completa:</h2>
          <p>{information.description}</p>

          <h2 className="text-xl font-bold text-red-700 mb-2">Carga horária estimada:</h2>
          <div className="flex items-end space-x-1">
            {/* aqui tem as horas! */}
            <h1 className="text-5xl font-bold text-black">{information.hours}</h1>
            <p className="pb-1">horas</p>
          </div>

          {/* botão que deve adicionar nas horas do sigaa */}
          <div className='-mt-8'>
            <button className="bg-primaryred text-white px-6 py-2 rounded-[15px] w-fit hover:bg-darkred hover:shadow-lg hover:shadow-primaryred/40">Adicionar ao simulador</button>
          </div>

          <h2 className="text-xl font-bold text-red-700 mb-2">Pré-Requisitos:</h2>
          <p>A definir conforme necessário</p>

          <div className="flex space-x-4">
            {/* botão para editar as informações*/}
            <button className="bg-white border border-primaryred text-darkred px-6 py-2 rounded-[15px] font-bold hover:text-primaryred hover:shadow-lg hover:shadow-primaryred/40">
              Editar Oportunidade
            </button>
            {/* botão para apagar a oportunidade! */}
            <button className="bg-white border border-primaryred text-darkred px-6 py-2 rounded-[15px] font-bold hover:shadow-lg hover:shadow-primaryred/40">
              Apagar Oportunidade
            </button>
            <button onClick={handleInterest} className="bg-darkred border border-primaryred text-white px-6 py-2 rounded-[15px] font-bold hover:shadow-lg hover:shadow-primaryred/40 hover:bg-primaryred">
              Tenho Interesse
            </button>
          </div>
        </div>

        {/* bloco da direita */}
        <div className="w-[300px] bg-white rounded-[12px] p-6 shadow-md h-[50vh]">
          <h1 className="text-xl font-bold text-darkred mb-2">Publicado Por:</h1>
          <hr className="my-2 border-darkred border-t-3 rounded"></hr>
          {/* nome do professor que adicionou */}
          <p className="font-bold">{information.publisher.fullName}</p>
          {/* seu email institucional*/}
          <p className="text-sm text-darkred mt-2 font-bold">{information.publisher.email}</p>
          {/* se for possivel, verificar pelo dia se está aberta ou encerrada*/}
          <p className="text-sm mt-4 text-darkred font-bold">Status: <span className="text-gray-700 font-bold">
            {isOpportunityOpen(information.deadline) ? 'Aberta' : 'Encerrada'}
          </span></p>
          <p className="text-sm text-darkred font-bold">Prazo para inscrição: <span className="text-gray-700 font-bold"> {formatDeadline(information.deadline)}</span></p>
          <p className="text-sm text-darkred font-bold">Localização: <span className="text-gray-700 font-bold">{information.city}, {information.state}</span></p>
        </div>
      </div>
    </div>
  );
}

export default OpportunityPage;