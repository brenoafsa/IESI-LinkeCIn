import { useNavigate } from 'react-router-dom';
import Opportunity from '../components/opportunity'; 

function Favorites() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-mainbg px-6 py-10 flex flex-col items-center">
      
      

      <div className="w-full flex justify-start mb-6">
        <button
          onClick={() => navigate(-1)} 
          className="bg-white text-darkred font-bold px-10 py-3 rounded-xl shadow-md hover:bg-darkred hover:text-white transition"
        >
          Voltar
        </button>
      </div>

        <h1 className='text-2xl font-bold text-red-700 mb-8'>Suas oportunidades favoritas</h1>
      <div className="w-full max-w-5xl">
        <Opportunity />
      </div>
    </div>
  );
}

export default Favorites
