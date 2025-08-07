import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Opportunity from '../components/opportunity';
import api from '../services/api';

function ParticipationHistory() {
    const navigate = useNavigate();

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

            <div className="w-full max-w-5xl">

            </div>
        </div>
    );
}

export default ParticipationHistory;
