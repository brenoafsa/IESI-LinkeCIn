import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../services/api';

function OpportunityPage() {
   const navigate = useNavigate();
   const [information, setInformation] = useState(null);
   const { id } = useParams();

    useEffect(() => {
        api.get(`/post/${id}`)
            .then((res) => setInformation(res.data))
            .catch((err) => console.error({ error: "Erro ao buscar post", err }))
    }, [id])

    // Helper function to format deadline
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

    // Helper function to get opportunity type in Portuguese
    const getTypeInPortuguese = (type) => {
        switch(type) {
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

    // Helper function to check if opportunity is open
    const isOpportunityOpen = (deadline) => {
        const now = new Date();
        const deadlineDate = new Date(deadline);
        return deadlineDate > now;
    };

    if (!information) {
        return (
            <div className="bg-mainbg min-h-screen flex items-center justify-center">
                <p>Carregando...</p>
            </div>
        );
    }
   
  return (
    <>
      {/* botao voltar */}
      <div className="bg-mainbg w-full">
        <button onClick={() => navigate('/feed')} className= "px-10 ml-10 bg-white rounded-[15px] py-2 shadow text-xl font-bold text-darkred mt-5">
          Voltar
        </button>
      </div>

      {/* Blocos lado a lado */}
      <div className="bg-mainbg flex justify-center gap-8 px-10 mt-8">
        {/* o bloco do meio */}
        <div className="flex-1 flex flex-col space-y-10 bg-white rounded-[12px] p-6 shadow-md">
          <h1 className="text-xl font-bold text-red-700 mb-2">{information.tittle}</h1>
          <h2>{getTypeInPortuguese(information.type)}</h2>

          <h2 className="text-xl font-bold text-red-700 mb-2">Descrição Completa</h2>
          <p>{information.description}</p>

          <h2 className="text-xl font-bold text-red-700 mb-2">Carga horária estimada</h2>
          <div className="flex items-end space-x-1">
            {/* aqui tem as horas! */}
            <h1 className="text-5xl font-bold text-black">{information.hours}</h1>
            <p className="pb-1">horas</p>
          </div>

            {/* botão que deve adicionar nas horas do sigaa */}
          <button className="bg-red-600 text-white px-6 py-2 rounded-[15px] w-fit">Adicionar ao simulador</button>

          <h2 className="text-xl font-bold text-red-700 mb-2">Pré-Requisitos</h2>
          <p>A definir conforme necessário</p>

          <div className="flex space-x-4">
            {/* botão para editar as informações*/}
            <button className="bg-white border border-red-600 text-darkred px-6 py-2 rounded-[15px] font-bold">
              Editar Oportunidade
            </button>
            {/* botão para apagar a oportunidade! */}
            <button className="bg-white border border-red-600 text-darkred px-6 py-2 rounded-[15px] font-bold">
              Apagar Oportunidade
            </button>
          </div>
        </div>

        {/* bloco da direita */}
        <div className="w-[300px] bg-white rounded-[12px] p-6 shadow-md">
          <h1 className="text-xl font-bold text-red-700 mb-2">Publicado Por:</h1>
          {/* nome do professor que adicionou */}
          <p className="font-bold">{information.publisher.fullName}</p>
          {/* seu email institucional*/}
          <p className="text-sm text-red-600 mt-2">{information.publisher.email}</p>
          {/* se for possivel, verificar pelo dia se está aberta ou encerrada*/}
          <p className="text-sm mt-4">Status: <span className="text-red-600">
            {isOpportunityOpen(information.deadline) ? 'Aberta' : 'Encerrada'}
          </span></p>
          <p className="text-sm">Prazo para inscrição: {formatDeadline(information.deadline)}</p>
          <p className="text-sm">Localização: {information.city}, {information.state}</p>
        </div>
      </div>
    </>
  );
}

export default OpportunityPage;