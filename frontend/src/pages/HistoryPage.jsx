import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Opportunity from '../components/opportunity';
import api from '../services/api';
import { userAuth } from '../services/userAuth'; // garante que está importando corretamente

function HistoryPage() {
    const navigate = useNavigate();
    const [oportunidades, setOportunidades] = useState([]);

    useEffect(() => {
        const fetchOportunidades = async () => {
            try {
                const token = userAuth.getAccessToken(); // pega o token do localStorage

                if (!token) {
                    console.error("Token não encontrado.");
                    return;
                }

                // envia o token no body, como na página de analytics
                const response = await api.post('/student/posts', {
                    accessToken: token
                });

                setOportunidades(response.data);
            } catch (error) {
                console.error('Erro ao buscar oportunidades:', error);
            }
        };

        fetchOportunidades();
    }, []);

    return (
        <div className="w-full min-h-screen bg-mainbg px-6 py-10 flex flex-col items-center">

            <div className="w-full flex justify-start mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-white text-darkred font-bold px-10 py-2 rounded-xl shadow-md hover:bg-primaryred hover:text-white transition hover:shadow-primaryred/40"
                >
                    Voltar
                </button>
            </div>

            <h1 className='text-2xl font-bold text-red-700 mb-8'>Seu histórico de participação</h1>

            <div className="w-full max-w-5xl flex flex-col gap-4">
                {oportunidades.length === 0 ? (
                    <p className="text-gray-500">Você ainda não se interessou por nenhuma oportunidade.</p>
                ) : (
                    oportunidades.map((op) => (
                        <Opportunity key={op.id} data={op} />
                        
                    ))
                )}
            </div>
        </div>
    );
}

export default HistoryPage;
