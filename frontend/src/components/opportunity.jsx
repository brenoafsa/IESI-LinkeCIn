import { Clock4, MapPin, Users } from 'lucide-react';
import {useState, useEffect} from 'react';
import api from '../services/api';
import { userAuth } from '../services/userAuth';
import { Heart} from 'lucide-react';

export default function Opportunity({ opportunity }) {
    const [favoritado, setFavoritado] = useState(false);
    const token = userAuth.getAccessToken();

    useEffect(() => {
        // Verificar se a oportunidade já está favoritada ao carregar o componente
        if (token && opportunity?.id) {
            api.post('/opportunities/saved', { accessToken: token })
                .then(response => {
                    const savedOpportunities = response.data;
                    const isAlreadySaved = savedOpportunities.some(saved => saved.id === opportunity.id);
                    setFavoritado(isAlreadySaved);
                })
                .catch(err => console.error("Erro ao verificar oportunidades salvas:", err));
        }
    }, [token, opportunity?.id]);

    const alternarFavoritado = async() => {
        if (!token) {
            alert("Você precisa estar logado para salvar oportunidades!");
            return;
        }

        try {
            if (favoritado) {
                await api.post('/opportunity/unsave', { 
                    opportunityId: opportunity.id, 
                    accessToken: token 
                });
                setFavoritado(false);
            } else {
                await api.post('/opportunity/save', { 
                    opportunityId: opportunity.id, 
                    accessToken: token 
                });
                setFavoritado(true);
            }
        } catch (error) {
            console.error("Erro ao salvar/remover dos favoritos:", error);
            alert("Ocorreu um erro. Tente novamente.");
        }
    }
    const formataData = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const traduzTipo = (tipo) => {
        const tipoDicionario = {
            'EXTENSION': 'EXTENSÃO',
            'COMPLEMENTARY': 'COMPLEMENTAR',
            'INTERNSHIP': 'ESTÁGIO'
        };
        return tipoDicionario[tipo] || tipo;
    };

    return (
        <div className="w-full bg-white rounded-xl flex">
            <div className="lg:w-2/4 w-full flex h-full flex-col bg-white p-4 self-stretch rounded-xl">
                <h2 className="text-lg font-bold mb-2 text-darkred flex items-centes gap-2">
                    <button onClick={(event) => { 
                            event.preventDefault(); // ← impede o clique de "vazar" para o Link pai
                            event.stopPropagation();
    
                            alternarFavoritado();
                            }}className="focus:outline-none">
                        {favoritado ? (
                             <Heart className="stroke-darkred fill-darkred" />
                        ) : (
                            <Heart className="stroke-darkred fill-none" />
                        )}
                    </button>
                    {opportunity?.tittle || 'Título da Oportunidade'}
                </h2>
                <p className="text-gray-600 mb-4">
                    Publicado por: {opportunity?.publisher?.fullName ? `${opportunity.publisher.fullName}` : '(nome e tipo)'}
                </p>
                <div className="flex items-center space-x-4">
                    <Clock4 size={16} className="text-darkred inline-block mr-1" />
                    <p className='text-darkred text-sm text-bold'>
                        Prazo para inscrição: {opportunity?.deadline ? formataData(opportunity.deadline) : 'dd/mm'}
                    </p>
                    <MapPin size={16} className="text-darkred inline-block mr-1" />
                    <p className='text-darkred text-sm text-bold'>
                        {opportunity?.city && opportunity?.state ? `${opportunity.city}/${opportunity.state}` : 'Cidade/Estado'}
                    </p>
                </div>
                {opportunity?.hours && (
                    <div className="mt-2">
                        <p className='text-darkred text-sm'>Carga horária: {opportunity.hours}h</p>
                    </div>
                )}
            </div>
            <div className='right-4 flex flex-col lg:w-1/3 w-full lg:flex xl:flex h-full self-stretch rounded-xl ml-auto'>
                <span className='bg-whitered p-2 rounded-bl-xl rounded-tr-xl flex items-center justify-between'>
                    <p className='text-darkred text-sm font-black m-3'>
                        <Users className="text-darkred inline-block" /> 
                        {traduzTipo(opportunity?.type) || 'TIPO'}
                    </p>
                </span>
                <button className='bg-darkred h-8 text-white rounded-l-xl rounded-r-none hover:bg-red-700 flex items-center text-center justify-center mt-2'>
                    Saber mais
                </button>
               
            </div>
        </div>
    );
}