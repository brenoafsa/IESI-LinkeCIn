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
        alert("Você é professor, não pode se candidatar!");
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
            {/* SE ESTIVER EDITANDO, MOSTRA FORMULÁRIO */}
            {isEditing ? (
              <form onSubmit={handleEditOpportunity} className="space-y-4">
                <h1 className="text-xl font-bold text-darkred mb-4">
                  Editando Oportunidade
                </h1>

                {/* Campo Título */}
                <div>
                  <label className="block text-sm font-bold text-darkred mb-2">
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
                  <label className="block text-sm font-bold text-darkred mb-2">
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
                  <label className="block text-sm font-bold text-darkred mb-2">
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
                  <label className="block text-sm font-bold text-darkred mb-2">
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
                  <label className="block text-sm font-bold text-darkred mb-2">
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
                  <label className="block text-sm font-bold text-darkred mb-2">
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
                    className="bg-primaryred text-white px-6 py-2 rounded-[15px] w-fit hover:bg-darkred hover:shadow-lg hover:shadow-primaryred/40"
                  >
                    Salvar Alterações
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setEditData({});
                    }}
                    className="bg-gray-500 text-white px-6 py-2 rounded-[15px] font-bold hover:bg-gray-700 hover:shadow-lg hover:shadow-black/40"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            ) : (
              /* SE NÃO ESTIVER EDITANDO, MOSTRA INFORMAÇÕES NORMAIS */
              <>
                <h1 className="text-xl font-bold text-darkred mb-2">
                  {information.tittle}
                </h1>
                <h2>{getTypeInPortuguese(information.type)}</h2>

                <h2 className="text-xl font-bold text-darkred mb-2">
                  Descrição Completa:
                </h2>
                <p>{information.description}</p>

                <h2 className="text-xl font-bold text-darkred mb-2">
                  Carga horária estimada:
                </h2>
                <div className="flex items-end space-x-1">
                  <h1 className="text-5xl font-bold text-black">
                    {information.hours}
                  </h1>
                  <p className="pb-1">horas</p>
                </div>

                {/* botão que deve adicionar nas horas do sigaa */}
                <div className='-mt-8'>
                  <button className="bg-primaryred text-white px-6 py-2 rounded-[15px] w-fit hover:bg-darkred hover:shadow-lg hover:shadow-primaryred/40">Adicionar ao simulador</button>
                </div>

                <h2 className="text-xl font-bold text-darkred mb-2">
                  Pré-Requisitos:
                </h2>
                <p>A definir conforme necessário</p>
                {(information.requiredSubjects).map((each, index) => (
                  <p className="mb-2" key={index}>{each}</p>
                ))}

                <div className="flex space-x-4">
                  {/* botão para editar as informações*/}
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-white border border-primaryred text-darkred px-6 py-2 rounded-[15px] font-bold hover:text-primaryred hover:shadow-lg hover:shadow-primaryred/40"
                  >
                    Editar Oportunidade
                  </button>

                  {/* botão para apagar a oportunidade! */}
                  <button
                    onClick={handleDeleteOpportunity}
                    className="bg-white border border-primaryred text-darkred px-6 py-2 rounded-[15px] font-bold hover:shadow-lg hover:shadow-primaryred/40"
                  >
                    Apagar Oportunidade
                  </button>

                  <button
                    onClick={handleInterestClick}
                    className="bg-darkred border border-primaryred text-white px-6 py-2 rounded-[15px] font-bold hover:shadow-lg hover:shadow-primaryred/40 hover:bg-primaryred"
                  >
                    Tenho Interesse
                  </button>

                  
                   <button
                    onClick={() => navigate(`/select/${id}`)}
                    className="bg-white border border-primaryred text-darkred px-6 py-2 rounded-[15px] font-bold hover:shadow-lg hover:shadow-primaryred/40"
                  >
                    Fechar Inscrições
                  </button>
                </div>
              </>
            )}
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
    </>
  );
}

export default OpportunityPage;