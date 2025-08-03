import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import api from "../services/api";
import { userAuth } from "../services/userAuth";
import imagem from "/src/assets/img_CInProfile.png"


const ProfilePage = () => {
    const navigate = useNavigate();
    const [aluno, setAluno] = useState()
    const token = userAuth.getAccessToken();
    const [historico, setHistorico] = useState([]);
    const porcentagem = Math.min((30 / 60) * 100, 100) //aqui os valores 3 e 60 devem ser substituidos pelos valores que o aluno tem e o que o curso solicita

    useEffect(() => {
        if (token) {
            api.post('/student/posts', { accessToken: token })
                .then((res) => setHistorico(res.data))
                .catch((err) => console.error("Erro ao buscar histórico de oportunidades do usuário", err))
			
			api.post('/student/specific', { accessToken: token })
				.then((res) => setAluno(res.data))
				.catch((err) => console.error("Erro ao buscar informações do aluno", err))
        }
    }, [token])

    const LogOut = () => {
        userAuth.removeAccessToken;
        navigate('/')
    }

    if (!aluno) {
        return (
            <div className="min-h-screen bg-mainbg flex items-center justify-center">
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-mainbg lg:flex justify-center items-start">
            {/* botao voltar */}
       
          <button onClick={() => navigate('/feed')} className="px-10 ml-10 bg-white rounded-xl py-2 font-bold text-darkred mt-5 shadow-md hover:bg-primaryred hover:text-white transition hover:shadow-primaryred/40">
            Voltar
          </button>

           
            <section className="lg:w-1/2 w-full lg:flex xl:flex h-full flex-col gap-10 bg-white p-2 mr-1 m-10 self-stretch rounded-xl ">
                <div className="w-full h-40 bg-darkred rounded-lg">
                    <img src={imagem} alt="" className="object-cover w-full h-40 bg-darkred rounded-lg" />

                </div>
                <div className="pl-10">
                    <div className="flex items-center justify-center text-white text-2xl font-bold w-16 h-16 rounded-full bg-[darkred] -mt-18">
                        {aluno.fullName.charAt(0)}
                    </div>
                    <h1 className="text-2xl font-bold text-darkred">{aluno.fullName}</h1>
                    <p className="text-gray-600">Estudante de {aluno.studentRecord.course} | {aluno.studentRecord.entrance} </p>
                    <p className="text-gray-600 text-xs"> {aluno.email} </p>

                    <div className="flex mt-5 gap-10 mb-10">

                        <button type="button" className="bg-[darkred] text-white w-50 rounded-full font-bold ">editar perfil</button>

                        <button onClick={LogOut} className="bg-[white] text-[darkred] border-3 border-indigo- border-t-indigo  w-50  rounded-full font-bold ">sair da conta</button>
                    </div>
                    <button type="button" class=" text-[darkred] hover:text-white border border-[darkred]-700 hover:bg-[darkred] focus:ring-4 focus:outline-none focus:ring-[darkred]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[darkred]-500 dark:text-[darkred]-500 dark:hover:text-white dark:hover:bg-[darkred]-600 dark:focus:ring-red-900">Histórico de Participação Completo</button>
                    <button type="button" onClick={() => navigate('/favorites')} class=" text-[darkred] hover:text-white border border-[darkred]-700 hover:bg-[darkred] focus:ring-4 focus:outline-none focus:ring-[darkred]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[darkred]-500 dark:text-[darkred]-500 dark:hover:text-white dark:hover:bg-[darkred]-600 dark:focus:ring-red-900">oportunidades favoritadas</button>
                    <button type="button" class=" text-[darkred] hover:text-white border border-[darkred]-700 hover:bg-[darkred] focus:ring-4 focus:outline-none focus:ring-[darkred]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[darkred]-500 dark:text-[darkred]-500 dark:hover:text-white dark:hover:bg-[darkred]-600 dark:focus:ring-red-900">Relatório de Horas Complementares</button>
                </div>
            </section>
            <section className="lg:w-1/4 w-full flex h-full flex-col gap-1 bg-white p-2 m-10 self-stretch rounded-xl">
                <div className="p-4">
                    <h2 className="text-xl font-bold text-darkred mt-5">Simulador de Horas - SIGAA</h2>
                    <hr class="h-px mt-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>


                    <h2 className="font-bold mt-10">Atividades Complementares</h2>
                    <p className="text-sm">
                        <span className="text-darkred font-semibold">30h</span> de 60h
                    </p>
                    <div className="flex justify-between items-center mb-1">

                        <button className="text-xl font-bold text-darkred mt-2 mr-2 hover:">+</button>
                        <div className="w-full bg-gray-300 rounded-full h-2 mt-2 relative">
                            <div
                                className="bg-darkred h-2 rounded-full"
                                style={{ width: `${porcentagem}%` }}
                            />
                        </div>
                    </div>

                    <h2 className="font-bold mt-10">Atividades de Extensão</h2>
                    <p className="text-sm">
                        <span className="text-darkred font-semibold">30h</span> de 60h
                    </p>
                    <div className="flex justify-between items-center mb-1">

                        <button className="text-xl font-bold text-darkred mt-2 mr-3">+</button>
                        <div className="w-full bg-gray-300 rounded-full h-2 mt-2 relative">
                            <div
                                className="bg-darkred h-2 rounded-full"
                                style={{ width: `${porcentagem}%` }}
                            />
                        </div>
                    </div>

                    <figure class="max-w-screen-md mx-auto">
                        <svg class="w-10 mt-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                        <blockquote>
                            <p class="text-1xl italic font-medium text-gray-900 dark:text-black ">"Tudo acontece na hora certa. Tudo acontece, exatamente quando deve acontecer."</p>
                        </blockquote>
                        <figcaption class="flex mt-6 space-x-3 rtl:space-x-reverse">

                            <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                <cite class="pe-3 font-bold text-gray-900 dark:text-[darkred]">Albert Einstein</cite>
                            </div>
                        </figcaption>
                    </figure>
                </div>

            </section>

            
        </div>
        

    );
}
export default ProfilePage