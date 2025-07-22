import { useNavigate } from 'react-router-dom';

function OpportunityPage() {
   const navigate = useNavigate();
   
  return (
    <>
      {/* botao voltar */}
      <div className="bg-mainbg w-full">
        <button onClick={() => navigate('/feed')} className= "px-10 ml-10 bg-white rounded-[15px] py-2 shadow text-xl font-bold text-darkred mt-5">
          Voltar
        </button>
      </div>

      {/* Blocos lado a lado */}
      <div className="bg-mainbg flex justify-center gap-8 px-10 mt-8">
        {/* o bloco do meio */}
        <div className="flex-1 flex flex-col space-y-10 bg-white rounded-[12px] p-6 shadow-md">
          <h1 className="text-xl font-bold text-red-700 mb-2">Título da Oportunidade</h1>
          <h2>Tipo da Oportunidade</h2>

          <h2 className="text-xl font-bold text-red-700 mb-2">Descrição Completa</h2>
          <p>Textinho falando sobre a oportunidade, o que será ofertado e alguns links!</p>

          <h2 className="text-xl font-bold text-red-700 mb-2">Carga horária estimada</h2>
          <div className="flex items-end space-x-1">
            {/* aqui tem as horas! */}
            <h1 className="text-5xl font-bold text-black">2</h1>
            <p className="pb-1">horas</p>
          </div>

            {/* botão que deve adicionar nas horas do sigaa */}
          <button className="bg-red-600 text-white px-6 py-2 rounded-[15px] w-fit">Adicionar ao simulador</button>

          <h2 className="text-xl font-bold text-red-700 mb-2">Pré-Requisitos</h2>
          <p>Verificar se tem pré-requisito e informar bem aqui!</p>

          <div className="flex space-x-4">
            {/* botão para editar as informações*/}
            <button className="bg-white border border-red-600 text-darkred px-6 py-2 rounded-[15px] font-bold">
              Editar Oportunidade
            </button>
            {/* botão para apagar a oportunidade! */}
            <button className="bg-white border border-red-600 text-darkred px-6 py-2 rounded-[15px] font-bold">
              Apagar Oportunidade
            </button>
          </div>
        </div>

        {/* bloco da direita */}
        <div className="w-[300px] bg-white rounded-[12px] p-6 shadow-md">
          <h1 className="text-xl font-bold text-red-700 mb-2">Publicado Por:</h1>
          {/* nome do professor que adicionou */}
          <p className="font-bold">Professor(a) xxx</p>
          {/* seu email institucional*/}
          <p className="text-sm text-red-600 mt-2">Email Institucional</p>
          {/* se for possivel, verificar pelo dia se está aberta ou encerrada*/}
          <p className="text-sm mt-4">Status: <span className="text-red-600">Aberta/Encerrada</span></p>
          <p className="text-sm">Prazo para inscrição: faltam x dias!</p>
          <p className="text-sm">Localização: (informar)</p>
        </div>
      </div>
    </>
  );
}

export default OpportunityPage;
