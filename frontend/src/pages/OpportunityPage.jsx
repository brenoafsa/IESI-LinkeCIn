import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api";
import { userAuth } from "../services/userAuth";

function OpportunityPage() {
  const navigate = useNavigate();
  const [information, setInformation] = useState(null);
  const { id } = useParams();
  const token = userAuth.getAccessToken();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showSimulatorModal, setShowSimulatorModal] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);

  useEffect(() => {
    api
      .get(`/post/${id}`)
      .then((res) => setInformation(res.data))
      .catch((err) => console.error({ error: "Erro ao buscar post", err }));
  }, [id]);

  // Função para deletar a oportunidade
  const handleDeleteOpportunity = async () => {
    if (!window.confirm("Tem certeza que deseja apagar essa oportunidade?")) {
      return;
    }

    try {
      const response = await api.delete(`/post/${id}`, {
        data: { accessToken: token },
      });

      if (response.status === 200) {
        alert("Oportunidade apagada com sucesso!");
        navigate("/feed"); // ai redireciona para o feed
      }
    } catch (error) {
      console.error("Erro ao apagar a oportunidade:", error);

      if (error.response?.status === 403) {
        alert("Você não tem permissão para apagar essa oportunidade.");
      } else if (error.response?.status === 404) {
        alert("Oportunidade não encontrada.");
      } else {
        alert("Erro ao apagar a oportunidade. Tente novamente.");
      }
    }
  };

  // funct para editar oportunidade
  const handleEditOpportunity = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        tittle: editData.tittle || information.tittle,
        description: editData.description || information.description,
        type: editData.type || information.type,
        deadline: editData.deadline || information.deadline,
        city: editData.city || information.city,
        state: editData.state || information.state,
        hours: editData.hours || information.hours,
        accessToken: token,
      };

      const response = await api.put(`/post/${id}`, formData);

      if (response.status === 200) {
        alert("Oportunidade editada com sucesso!");
        setInformation(response.data.opportunity); // atualizamos os dados na tela ( nao sei se era pra ser opportunity ou opportunityPage)
        setIsEditing(false); // Fecha o modo de edição
        setEditData({});
      }
    } catch (error) {
      console.error("Erro ao editar a oportunidade:", error);

      if (error.response?.status === 403) {
        alert("você não tem permissão para editar essa oportunidade.");
      } else {
        alert("Erro ao editar a oportunidade. Tente novamente.");
      }
    }
  };

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
      case "COMPLEMENTARY":
        return "Atividade Complementar";
      case "EXTENSION":
        return "Extensão";
      case "RESEARCH":
        return "Pesquisa";
      default:
        return type;
    }
  };

  const isOpportunityOpen = (deadline) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    return deadlineDate > now;
  };

  const handleInterestClick = async () => {
    try {
      const response = await api.post("/reqcheck", {
        accessToken: token,
        postId: id,
      });

      if (response.status === 200) {
        setShowModal(true);
      }
    } catch (error) {
      console.error("Erro ao verificar pré-requisitos:", error);

      if (error.response?.status === 403) {
        alert("Você não tem os requerimentos necessários");
      } else {
        alert("Erro ao verificar pré-requisitos. Tente novamente.");
      }
    }
  };

  const handleInterest = async () => {
    const formData = {
      opportunityId: id,
      accessToken: token,
    };

    try {
      const response = await api.post("/post/apply", formData);

      if (response.status === 200) {
        alert("Você se candidatou à essa Oportunidade!");
        setShowModal(false);
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
      setShowModal(false);
    }
  };

const handleSimulateHours = async () => {
    try {
      const response = await api.post('/student/simulate-hours', {
        accessToken: token,
        hours: information.hours,
        type: information.type
      });
      
      if (response.status === 200) {
        setSimulationResult(response.data);
        setShowSimulatorModal(true);
      }
    } catch (error) {
      console.error("Erro ao simular horas:", error);
      
      if (error.response) {
        const errorMessage = error.response.data.error || "Erro desconhecido";
        alert(`Erro ao simular: ${errorMessage}`);
      } else {
        alert("Erro de conexão. Tente novamente.");
      }
    }
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
      {/* Modal de confirmação */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-darkred mb-4">
              Confirmar Interesse
            </h2>
            <p className="mb-6">
              Você tem certeza que quer mostrar interesse?
            </p>
            <div className="flex space-x-4 justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded font-bold"
              >
                Cancelar
              </button>
              <button
                onClick={handleInterest}
                className="bg-darkred text-white px-4 py-2 rounded font-bold"
              >
                Sim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* botao voltar */}
      <div className="bg-mainbg w-full">
        <button
          onClick={() => navigate("/feed")}
          className="px-10 ml-10 bg-white rounded-[15px] py-2 shadow text-xl font-bold text-darkred mt-5"
        >
          Voltar
        </button>
      </div>

      {/* Blocos lado a lado */}
      <div className="bg-mainbg flex justify-center gap-8 px-10 mt-8">
        {/* o bloco do meio */}
        <div className="flex-1 flex flex-col space-y-10 bg-white rounded-[12px] p-6 shadow-md">
          {/* SE ESTIVER EDITANDO, MOSTRA FORMULÁRIO */}
          {isEditing ? (
            <form onSubmit={handleEditOpportunity} className="space-y-4">
              <h1 className="text-xl font-bold text-red-700 mb-4">
                Editando Oportunidade
              </h1>

              {/* Campo Título */}
              <div>
                <label className="block text-sm font-bold text-red-700 mb-2">
                  Título:
                </label>
                <input
                  type="text"
                  value={editData.tittle || information.tittle}
                  onChange={(e) =>
                    setEditData({ ...editData, tittle: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Campo Descrição */}
              <div>
                <label className="block text-sm font-bold text-red-700 mb-2">
                  Descrição:
                </label>
                <textarea
                  value={editData.description || information.description}
                  onChange={(e) =>
                    setEditData({ ...editData, description: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded h-32"
                />
              </div>

              {/* Campo Tipo */}
              <div>
                <label className="block text-sm font-bold text-red-700 mb-2">
                  Tipo:
                </label>
                <select
                  value={editData.type || information.type}
                  onChange={(e) =>
                    setEditData({ ...editData, type: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="EXTENSION">Extensão</option>
                  <option value="RESEARCH">Pesquisa</option>
                  <option value="COMPLEMENTARY">Atividade Complementar</option>
                </select>
              </div>

              {/* Campo Horas */}
              <div>
                <label className="block text-sm font-bold text-red-700 mb-2">
                  Carga Horária:
                </label>
                <input
                  type="number"
                  value={editData.hours || information.hours}
                  onChange={(e) =>
                    setEditData({ ...editData, hours: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Campo Cidade */}
              <div>
                <label className="block text-sm font-bold text-red-700 mb-2">
                  Cidade:
                </label>
                <input
                  type="text"
                  value={editData.city || information.city}
                  onChange={(e) =>
                    setEditData({ ...editData, city: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Campo Estado */}
              <div>
                <label className="block text-sm font-bold text-red-700 mb-2">
                  Estado:
                </label>
                <input
                  type="text"
                  value={editData.state || information.state}
                  onChange={(e) =>
                    setEditData({ ...editData, state: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Botões do formulário */}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 py-2 rounded-[15px] font-bold"
                >
                  Salvar Alterações
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setEditData({});
                  }}
                  className="bg-gray-500 text-white px-6 py-2 rounded-[15px] font-bold"
                >
                  Cancelar
                </button>
              </div>
            </form>
          ) : (
            /* SE NÃO ESTIVER EDITANDO, MOSTRA INFORMAÇÕES NORMAIS */
            <>
              <h1 className="text-xl font-bold text-red-700 mb-2">
                {information.tittle}
              </h1>
              <h2>{getTypeInPortuguese(information.type)}</h2>

              <h2 className="text-xl font-bold text-red-700 mb-2">
                Descrição Completa
              </h2>
              <p>{information.description}</p>

              <h2 className="text-xl font-bold text-red-700 mb-2">
                Carga horária estimada
              </h2>
              <div className="flex items-end space-x-1">
                <h1 className="text-5xl font-bold text-black">
                  {information.hours}
                </h1>
                <p className="pb-1">horas</p>
              </div>

              <button 
              onClick={handleSimulateHours}
              className="bg-red-600 text-white px-6 py-2 rounded-[15px] w-fit">
                Adicionar ao simulador
              </button>

              <h2 className="text-xl font-bold text-red-700 mb-2">
                Pré-Requisitos
              </h2>
              <p>A definir conforme necessário</p>
              {(information.requiredSubjects).map((each, index) => (
                <p className="mb-2" key={index}>{each}</p>
              ))}

              <div className="flex space-x-4">
                {/* botão para editar as informações*/}
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-white border border-red-600 text-darkred px-6 py-2 rounded-[15px] font-bold"
                >
                  Editar Oportunidade
                </button>

                {/* botão para apagar a oportunidade! */}
                <button
                  onClick={handleDeleteOpportunity}
                  className="bg-white border border-red-600 text-darkred px-6 py-2 rounded-[15px] font-bold"
                >
                  Apagar Oportunidade
                </button>

                <button
                  onClick={handleInterestClick}
                  className="bg-darkred border border-red-600 text-white px-6 py-2 rounded-[15px] font-bold"
                >
                  Tenho Interesse
                </button>
              </div>
            </>
          )}
        </div>

        {/* bloco da direita - sempre visível */}
        <div className="w-[300px] bg-white rounded-[12px] p-6 shadow-md">
          <h1 className="text-xl font-bold text-red-700 mb-2">
            Publicado Por:
          </h1>
          <p className="font-bold">{information.publisher.fullName}</p>
          <p className="text-sm text-red-600 mt-2">
            {information.publisher.email}
          </p>
          <p className="text-sm mt-4">
            Status:{" "}
            <span className="text-red-600">
              {isOpportunityOpen(information.deadline) ? "Aberta" : "Encerrada"}
            </span>
          </p>
          <p className="text-sm">
            Prazo para inscrição: {formatDeadline(information.deadline)}
          </p>
          <p className="text-sm">
            Localização: {information.city}, {information.state}
          </p>
        </div>
      </div>

      {/* Modal de simulação de horas */}
      {showSimulatorModal && simulationResult && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-darkred mb-4">
              Simulação de Horas
            </h2>
            {simulationResult.course && (
              <p className="text-sm text-gray-600 mb-4">
                Curso: {simulationResult.course}
              </p>
            )}
            <div className="space-y-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Horas atuais</p>
                <p className="text-2xl font-bold">{simulationResult.currentHours}h</p>
              </div>

              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-darkred" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Horas adicionadas</p>
                <p className="text-2xl font-bold text-darkred">{simulationResult.additionalHours}h</p>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm text-gray-600">Total simulado</p>
                <p className="text-3xl font-bold">{simulationResult.simulatedHours}h</p>
                
                <div className="mt-2">
                  <div className="w-full bg-gray-300 rounded-full h-2.5 mb-1">
                    <div 
                      className="bg-darkred h-2.5 rounded-full" 
                      style={{ width: `${simulationResult.completionPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 text-right">
                    {simulationResult.completionPercentage.toFixed(0)}% concluído
                  </p>
                </div>
              </div>

              {simulationResult.remainingHours > 0 && (
                <p className="text-sm text-gray-600">
                  Faltam {simulationResult.remainingHours}h para completar as {simulationResult.requiredHours}h necessárias.
                </p>
              )}

              {simulationResult.completionPercentage >= 100 && (
                <p className="text-sm text-green-600 font-medium">
                  Parabéns! Você completou todas as horas necessárias para esta categoria.
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowSimulatorModal(false)}
                className="bg-darkred text-white px-4 py-2 rounded font-bold hover:bg-primaryred"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default OpportunityPage;