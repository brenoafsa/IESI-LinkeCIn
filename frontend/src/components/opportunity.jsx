import { Bookmark, Clock4, MapPin, SquareCheckBig, Users } from 'lucide-react';


export default function Opportunity() {
    return (
        <div className="w-full bg-white rounded-xl flex">
            <div className="lg:w-2/4 w-full flex h-full flex-col bg-white p-4 self-stretch rounded-xl">
                <h2 className="text-lg font-bold mb-2 text-darkred"><Bookmark className="text-darkred inline-block mr-1" />Título da Oportunidade</h2>
                <p className="text-gray-600 mb-4">Publicado por: {"(nome e tipo)"} </p>
                <div className="flex items-center space-x-4">
                    <Clock4 size={16} className="text-darkred inline-block mr-1" /><p className='text-darkred text-sm text-bold'>Prazo para inscrição: dd/mm</p>
                    <MapPin size={16} className="text-darkred inline-block mr-1" /><p className='text-darkred text-sm text-bold'>Cidade/Estado</p>
                </div>
            </div>
            <div className='right-4 flex flex-col lg:w-1/3 w-full lg:flex xl:flex h-full self-stretch rounded-xl ml-auto'>
                <span className='bg-whitered p-2 rounded-bl-xl rounded-tr-xl flex items-center justify-between'>
                    <p className='text-darkred text-sm font-black m-3'><Users className="text-darkred inline-block" /> TIPO</p>
                </span>
                <button className='bg-darkred text-white rounded-l-xl rounded-r-none hover:bg-red-700 flex items-center text-center justify-center mt-2'>Saber mais</button>
                <button className='bg-primaryred text-white rounded-tl-xl rounded-br-xl hover:bg-red-700 flex items-center text-center justify-center mt-2'>Tenho interesse</button>
            </div>
        </div>
    );
}