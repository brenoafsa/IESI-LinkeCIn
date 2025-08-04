import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Opportunity from '../components/opportunity'; 
import api from '../services/api';
import { userAuth } from '../services/userAuth';

function Favorites() {
  const navigate = useNavigate();
  const [savedOpportunities, setSavedOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = userAuth.getAccessToken();

  useEffect(() => {
    // Verificarse o usuário está autenticado
    if (!token) {
      navigate('/login');
      return;
    }

    // Busca oportunidades salvas
    setLoading(true);
    api.post('/opportunities/saved', { accessToken: token })
      .then(response => {
        setSavedOpportunities(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar oportunidades salvas:", err);
        setLoading(false);
      });
  }, [token, navigate]);

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

        <h1 className='text-2xl font-bold text-red-700 mb-8'>Suas oportunidades favoritas</h1>

      <div className="w-full max-w-5xl">

          {loading ? (
          <div className="text-center p-8 bg-white rounded-xl shadow">
            <p className="text-lg">Carregando suas oportunidades...</p>
          </div>
        ) : savedOpportunities.length > 0 ? (
          <div className="space-y-4">
            {savedOpportunities.map(opportunity => (
              <div key={opportunity.id} onClick={() => navigate(`/opportunity/${opportunity.id}`)} className="cursor-pointer">
                <Opportunity opportunity={opportunity} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-white rounded-xl shadow">
            <p className="text-lg">Você ainda não salvou nenhuma oportunidade.</p>
            <button 
              onClick={() => navigate('/feed')} 
              className="mt-4 bg-darkred text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
            >
              Explorar oportunidades
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Favorites;
