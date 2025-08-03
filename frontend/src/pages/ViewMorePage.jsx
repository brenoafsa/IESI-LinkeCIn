import api from '../services/api'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const MoreInfo = () => {
    const navigate = useNavigate();
    const [cursoAtivo, setCursoAtivo] = useState(null);
    const cursos = {
        "Sistema de informações": `<p><strong class="text-primaryred">Título conferido:</strong> Bacharel em Sistemas de Informação <br>
            <strong class="text-primaryred">Modalidade:</strong> Presencial <br>
            <strong class="text-primaryred">Vagas:</strong> 70 <br>
            <strong class="text-primaryred">Entradas:</strong> 35 na 1ª Entrada e 35 na 2ª Entrada <br>
            <strong class="text-primaryred">Turno(s):</strong> tarde / noite <br>
            <strong class="text-primaryred">Carga horária Total:</strong> 3.000h <br>
            <strong class="text-primaryred">CH Obrigatórias:</strong> 1.770h <br>
            <strong class="text-primaryred">Estágio:</strong> 75h <br>
            <strong class="text-primaryred">CH Eletivas Perfil:</strong> 600h <br>
            <strong class="text-primaryred">CH Eletivas Livres:</strong> 180h <br>
            <strong class="text-primaryred">Atividades complementares:</strong> 150h <br>
            <strong class="text-primaryred">CH Extensão:</strong> 300h <br>
            <strong class="text-primaryred">Prazo para Conclusão (em semestres):</strong> Mínimo: 8 / Médio: 10 / Máximo: 14</p>`,

        "Ciência da Computação": `<p><strong class="text-primaryred">Título conferido:</strong> Bacharel em Ciência da Computação <br>
            <strong class="text-primaryred">Modalidade:</strong> Presencial <br>
            <strong class="text-primaryred">Vagas:</strong> 100 <br>
            <strong class="text-primaryred">Entradas:</strong> 50 na 1ª Entrada e 50 na 2ª Entrada <br>
            <strong class="text-primaryred">Turno(s):</strong> manhã / tarde <br>
            <strong class="text-primaryred">Carga horária Total:</strong> 3.200h <br>
            <strong class="text-primaryred">CH Obrigatórias:</strong> 1.530h <br>
            <strong class="text-primaryred">Estágio:</strong> Apenas não obrigatório <br>
            <strong class="text-primaryred">CH Eletivas Perfil:</strong> 780h <br>
            <strong class="text-primaryred">CH Eletivas Livres:</strong> 300h <br>
            <strong class="text-primaryred">Atividades complementares:</strong> 270h <br>
            <strong class="text-primaryred">CH Extensão:</strong> 320h <br>
            <strong class="text-primaryred">Duração:</strong> 9 semestres</p>`,

        "Engenharia da Computação": `<p><strong class="text-primaryred">Título conferido:</strong> Bacharel em Engenharia da Computação <br>
            <strong class="text-primaryred">Modalidade:</strong> Presencial <br>
            <strong class="text-primaryred">Vagas:</strong> 100 <br>
            <strong class="text-primaryred">Entradas:</strong> 50 na 1ª Entrada e 50 na 2ª Entrada <br>
            <strong class="text-primaryred">Turno(s):</strong> manhã / tarde <br>
            <strong class="text-primaryred">Carga horária Total:</strong> 3.600h <br>
            <strong class="text-primaryred">CH Obrigatórias:</strong> 2.550h <br>
            <strong class="text-primaryred">Estágio:</strong> 180h <br>
            <strong class="text-primaryred">CH Eletivas Perfil:</strong> 480h <br>
            <strong class="text-primaryred">CH Eletivas Livres:</strong> 90h <br>
            <strong class="text-primaryred">Atividades complementares:</strong> 120h <br>
            <strong class="text-primaryred">CH Extensão:</strong> 360h <br>
            <strong class="text-primaryred">Duração:</strong> 10 semestres</p>`,

        "Inteligência Artificial": `<p><strong class="text-primaryred">Título conferido:</strong> Bacharel em Inteligência Artificial <br>
            <strong class="text-primaryred">Modalidade:</strong> Presencial <br>
            <strong class="text-primaryred">Vagas:</strong> 50 vagas por ano <br>
            <strong class="text-primaryred">Entradas:</strong> 25 na 1ª Entrada e 25 na 2ª Entrada <br>
            <strong class="text-primaryred">Turno(s):</strong> Matutino e Vespertino <br>
            <strong class="text-primaryred">Carga horária Total:</strong> 3.200h <br>
            <strong class="text-primaryred">CH Obrigatórias:</strong> 1.680h <br>
            <strong class="text-primaryred">Estágio:</strong> Apenas não obrigatório <br>
            <strong class="text-primaryred">CH Eletivas Perfil:</strong> 660h <br>
            <strong class="text-primaryred">CH Eletivas Livres:</strong> 300h <br>
            <strong class="text-primaryred">Atividades complementares:</strong> 240h <br>
            <strong class="text-primaryred">CH Extensão:</strong> 320h <br>
            <strong class="text-primaryred">Duração:</strong> 9 semestres</p>`,
    };

    return (
        <div className="min-h-screen bg-mainbg">
            {/* botao voltar */}
            <div className="w-full flex">
                <button onClick={() => navigate('/feed')} className="px-10 ml-10 bg-white rounded-xl py-2 font-bold text-darkred mt-5 shadow-md hover:bg-primaryred hover:text-white transition hover:shadow-primaryred/40">
                    Voltar
                </button>

                <p className="text-darkred font-bold pt-7 pl-6">Escolha seu curso e saiba mais informações sobre as cargas horárias obrigatórias.</p>
            </div>

            {/* Cursos */}
            <div className="flex items-center justify-center mt-5 space-x-4">
                {Object.keys(cursos).map((nomeCurso) => (
                    <button
                        key={nomeCurso}
                        onClick={() => setCursoAtivo(nomeCurso)}
                        className={`font-semibold px-6 py-2 rounded-lg mt-5 transition-colors shadow-md hover:shadow-black/40
              ${cursoAtivo === nomeCurso
                                ? "bg-white text-darkred"
                                : "bg-darkred text-white hover:bg-primaryred"
                            }`}
                    >
                        {nomeCurso}
                    </button>
                ))}
            </div>

            {/* Informações adicionais */}
            {cursoAtivo && (
                <div className="mt-10 bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-darkred mb-4">Informações Adicionais</h2>
                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: cursos[cursoAtivo] }}></p>
                </div>
            )}

        </div>
    )
}

export default MoreInfo;