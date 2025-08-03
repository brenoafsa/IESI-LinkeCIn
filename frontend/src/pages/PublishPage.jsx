import { useEffect, useState, useRef } from "react"
import api from '../services/api'
import { userAuth } from "../services/userAuth"
import { useNavigate } from "react-router-dom"
import imagem from '../assets/img_PublishingPage.png';

const PublishPage = () => {
    const [tokenAcesso, setTokenAcesso] = useState("")
    const [aberto, setAberto] = useState(false);
    const [preRequisitos, setPreRequisitos] = useState([]);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const [temRequisito, setTemRequisito] = useState(""); // 'sim' ou 'nao'
    const [requisitos, setRequisitos] = useState("");

    const disciplinas = ["Concepção dos Artefatos Digitais", "Sistemas Digitais", "Matemática Discreta", "Introdução à Programação", "Cálculo 1", "Estrutura de Dados Orientadas a Objetos", "Desenvolvimento de Software", "Arquitetura de Computadores e Sistemas Operacionais", "Banco de Dados", "Algoritmos", "Álgebra Vetorial e Linear para Computação"];

    useEffect(() => {
        const token = userAuth.getAccessToken();
        setTokenAcesso(token)
    }, [])

    const toggleOpcao = (valor) => {
        setPreRequisitos((atual) =>
            atual.includes(valor)
                ? atual.filter((item) => item !== valor)
                : [...atual, valor]
        );
    };

    const fecharDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setAberto(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", fecharDropdown);
        return () => document.removeEventListener("mousedown", fecharDropdown);
    }, []);

    const handleOpportunityCreation = async (event) => {
        event.preventDefault();

        const titulo = document.getElementById("titulo-oportunidade").value;
        const descricao = document.getElementById("descricao").value;
        const tipo = document.getElementById("tipo-oportunidade").value;
        const prazoInput = document.getElementById("prazo-inscricao").value;
        const prazo = new Date(prazoInput).toISOString();
        const cidade = document.getElementById("cidade-inscricao").value;
        const estado = document.getElementById("estado-inscricao").value;
        const horas = parseInt(document.getElementById("carga-horaria").value, 10)

        if (!titulo || !descricao || !tipo || !prazoInput || !cidade || !estado || !horas) {
            alert("Por favor, preencha todos os campos e selecione um cargo.");
            return;
        }

        const formData = {
            tittle: titulo,
            description: descricao,
            type: tipo,
            deadline: prazo,
            city: cidade,
            state: estado,
            hours: horas,
            requiredSubjects: preRequisitos,
            tokenAcesso: tokenAcesso
        }

        try {
            const response = await api.post("/post", formData)

            if (response.status === 201) {
                alert("Postagem criada!")
                navigate("/feed");
            }
        } catch (err) {
            console.error("Erro:", err);
            alert("Erro ao criar post. Tente novamente.");
        }

    }

    return (
        <div className="w-full min-h-screen flex justify-center bg-mainbg">
            <section className="max-w-xl max-h-md flex items-center pl-10 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-24 mt-25">
                <img src={imagem} alt="" className="h-auto pointer-events-none w-xl self-start" />
            </section>
            <section className="text-extrabold bg-mainbg p-[20px] sm:p-[24px] md:p-[32px] lg:p-[48px] xl:p-[64px] mt-10">
                <div>
                    <h1 className="text-2xl w-full font-black text-darkred text-center">Adicione sua oportunidade! </h1>
                    <form className="pt-4 w-[80vh] space-y-4" onSubmit={handleOpportunityCreation}>

                        {/* Título da Oportunidade */}
                        <div className="relative z-0">
                            <input type="text" id="titulo-oportunidade" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-darkred appearance-none focus:outline-none focus:ring-0 focus:border-darkred peer" />
                            <label htmlFor="titulo-oportunidade" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Título da Oportunidade</label>
                        </div>

                        <div className="flex items-center space-x-2 mt-2">

                            {/* Tipo da Oportunidade */}
                            <div className="relative z-0 w-full">
                                <select id="tipo-oportunidade" defaultValue="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-darkred appearance-none focus:outline-none focus:ring-0 focus:border-darkred peer">
                                    <option disabled value="">Selecione o tipo da Oportunidade</option>
                                    <option value="EXTENSION">Extensão</option>
                                    <option value="COMPLEMENTARY">Complementar</option>
                                </select>
                                <label htmlFor="tipo-oportunidade" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6">Tipo da Oportunidade</label>
                            </div>

                            {/* Pré-requisito */}
                            <div className="w-1/2">
                                <p className="w-80 text-sm text-gray-500 mb-2">Tem pré-requisito?</p>

                                <div className="flex items-center mb-2">
                                    <input
                                        id="requisito-sim"
                                        type="radio"
                                        value="sim"
                                        name="temRequisito"
                                        checked={temRequisito === "sim"}
                                        onChange={(e) => setTemRequisito(e.target.value)}
                                        className="w-4 h-4 text-[darkred] bg-[darkred]-100 border-[darkred] focus:ring-[darkred]"
                                    />
                                    <label htmlFor="requisito-sim" className="ms-2 text-sm font-medium text-gray-900">
                                        Sim
                                    </label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input
                                        id="requisito-nao"
                                        type="radio"
                                        value="nao"
                                        name="temRequisito"
                                        checked={temRequisito === "nao"}
                                        onChange={(e) => setTemRequisito(e.target.value)}
                                        className="w-4 h-4 text-[darkred] bg-[darkred]-100 border-[darkred] focus:ring-[darkred]"
                                    />
                                    <label htmlFor="requisito-nao" className="ms-2 text-sm font-medium text-gray-900">
                                        Não
                                    </label>
                                </div>

                                {temRequisito === "sim" && (
                                    <div className="mb-4">
                                        <label htmlFor="requisitos" className="block mb-1 text-sm font-medium text-[darkred]-900">
                                            Quais são os pré-requisitos?
                                        </label>
                                        <textarea
                                            id="requisitos"
                                            value={requisitos}
                                            onChange={(e) => setRequisitos(e.target.value)}
                                            rows="4"
                                            className="block p-2.5 w-full text-sm text-[darkred] bg-[darkred]-50 rounded-lg border border-[darkred] focus:ring-[darkred] "
                                            placeholder="Descreva os pré-requisitos aqui..."
                                        ></textarea>
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className="flex items-center space-x-2 mt-2">
                            {/* Prazo de Inscrição */}
                            <div className="relative z-0 w-full">
                                <input type="date" id="prazo-inscricao" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-darkred appearance-none focus:outline-none focus:ring-0 focus:border-darkred peer" />
                                <label htmlFor="prazo-inscricao" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prazo de Inscrição</label>
                            </div>

                            {/* Cidade */}
                            <div className="relative z-0 w-full">
                                <input type="text" id="cidade-inscricao" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-darkred appearance-none focus:outline-none focus:ring-0 focus:border-darkred peer" />
                                <label htmlFor="cidade-inscricao" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cidade</label>
                            </div>

                            {/* Estado */}
                            <div className="relative z-0 w-full">
                                <input type="text" id="estado-inscricao" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-darkred appearance-none focus:outline-none focus:ring-0 focus:border-darkred peer" />
                                <label htmlFor="estado-inscricao" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Estado</label>
                            </div>
                        </div>

                        {/* Descrição */}
                        <div className="relative z-0">
                            <input type="text" id="descricao" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-darkred appearance-none focus:outline-none focus:ring-0 focus:border-darkred peer" />
                            <label htmlFor="descricao" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descrição</label>
                        </div>

                        {/* Carga Horária */}
                        <div className="relative z-0">
                            <input type="number" id="carga-horaria" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-darkred appearance-none focus:outline-none focus:ring-0 focus:border-darkred peer" />
                            <label htmlFor="carga-horaria" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Carga horária estimada</label>
                        </div>

                        {/* Botão */}
                        <button type="submit" className="bg-white text-darkred rounded-xl font-black w-full h-9 sm:h-10 md:h-12 lg:h-14 mt-4 shadow-md hover:bg-primaryred hover:text-white transition hover:shadow-primaryred/40">
                            Publicar
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default PublishPage