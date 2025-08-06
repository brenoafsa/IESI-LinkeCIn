import { useParams, useNavigate } from "react-router-dom";
import { userAuth } from "../services/userAuth";
import { useEffect } from "react";
import api from "../services/api";
import { useState } from "react";

function SelectCandidates() {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = userAuth.getAccessToken();
    const [listaCandidatos, setListaCandidatos] = useState([]);
    const [candidatosStatus, setCandidatosStatus] = useState({});

    useEffect(() => {
        if (id && token) {
            api.post('/post/candidates', { postId: id, tokenAcesso: token })
            .then((res) => setListaCandidatos(res.data.candidates))
            .catch((error) => console.log(error));
        }
    }, [id, token]);

    const handleStatusChange = (candidatoId, status) => {
        setCandidatosStatus(prev => ({
            ...prev,
            [candidatoId]: status
        }));
    };

    const handleClosePost = async () => {
        const candidatosAceitosIds = listaCandidatos
        .filter(candidato => candidatosStatus[candidato.id] === 'aceitar')
        .map(candidato => candidato.id);

        const formData = { postId: id, tokenAcesso: token, candidatesAccepted: candidatosAceitosIds }

        try {
            const response = await api.post('/post/close', formData)

            if (response.status === 200){ 
            alert('Postagem fechada com sucesso!')
            navigate('/feed')
            }
        } catch (error) {
            console.error("Erro ao fechar post:", error);
            
            if (error.response?.status === 403){
            alert('Você não tem permissão para efetuar essa ação.')
            } else {
            alert('Algo deu errado. Tente novamente')
            }
        }
    }

    return (
        <div className="p-5 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Selecionar Candidatos</h2>
            
            {listaCandidatos.length === 0 ? (
                <p>Não há candidatos</p>
            ) : (
                <>
                    <div className="mb-8">
                        {listaCandidatos.map((candidato) => (
                            <div
                                key={candidato.id}
                                className="border border-gray-300 rounded-lg p-5 mb-4 flex justify-between items-center bg-gray-50"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">
                                        {candidato.fullName || candidato.nome || 'Nome não disponível'}
                                    </h3>
                                    <p className="text-gray-600">
                                        {candidato.email || 'Email não disponível'}
                                    </p>
                                </div>
                                
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleStatusChange(candidato.id, 'aceitar')}
                                        className={`px-4 py-2 border rounded transition-colors ${
                                            candidatosStatus[candidato.id] === 'aceitar'
                                                ? 'bg-green-600 text-white border-green-600'
                                                : 'bg-gray-100 text-gray-700 border-gray-300'
                                        }`}
                                    >
                                        Aceitar
                                    </button>
                                    
                                    <button
                                        onClick={() => handleStatusChange(candidato.id, 'recusar')}
                                        className={`px-4 py-2 border rounded transition-colors ${
                                            candidatosStatus[candidato.id] === 'recusar'
                                                ? 'bg-red-600 text-white border-red-600'
                                                : 'bg-gray-100 text-gray-700 border-gray-300'
                                        }`}
                                    >
                                        Recusar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center">
                        <button
                            onClick={handleClosePost}
                            className="px-8 py-3 bg-darkred text-white rounded-lg text-lg font-bold hover:bg-darkred transition-colors"
                        >
                            Finalizar Postagem
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default SelectCandidates;