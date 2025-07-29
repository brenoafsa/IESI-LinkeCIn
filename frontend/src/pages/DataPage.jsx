import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserAnalyticsPage() {
     const navigate = useNavigate();
  return (
    
    <div className="bg-mainbg min-h-screen w-full p-10">
     
      {/* Botão Voltar */}
      <div className="flex justify-home mb-6">
        <button onClick={() => navigate('/feed')} className="bg-white text-black font-semibold px-6 py-2 rounded-[15px] shadow-md hover:bg-gray-100 transition ">
          Voltar
        </button>
      </div>

    
      <h1 className="text-3xl font-bold text-red-700 mb-8">Análise de Dados do Usuário</h1>

      {/* os tres cards  */}
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
    
        <div className="bg-white p-6 rounded-[15px] shadow-md flex flex-col items-center justify-between h-64">
       
          <div className="text-5xl text-red-700 mb-4">📊</div>

        
          <h2 className="text-xl font-semibold text-center mb-4">Título do Card 1</h2>

        
        </div>

        {/* card 2 do meio */}
        <div className="bg-white p-6 rounded-[15px] shadow-md flex flex-col items-center justify-between h-64">
          <div className="text-5xl text-red-700 mb-4">📈</div>
          <h2 className="text-xl font-semibold text-center mb-4">Título do Card 2</h2>
        
        </div>

        {/* card 3 da direita */}
        <div className="bg-white p-6 rounded-[15px] shadow-md flex flex-col items-center justify-between h-64">
          <div className="text-5xl text-red-700 mb-4">📅</div>
          <h2 className="text-xl font-semibold text-center mb-4">Título do Card 3</h2>
          
        </div>
      </div>
    </div>
  );
}

export default UserAnalyticsPage;
