import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import api from "../services/api";
import { userAuth } from "../services/userAuth";
import imagem from "/src/assets/img_CInProfile.png"
import { Link } from "react-router-dom"

const ProfilePage = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState()
    const token = userAuth.getAccessToken();
    const [historico, setHistorico] = useState([]);

    const getHoursData = () => {
        if (!usuario?.studentRecord) {
            return { 
                complementary: { current: 0, required: 150 },
                extension: { current: 0, required: 300 }
            };
        }
        
        const course = usuario.studentRecord.course;
        let requiredComplementary = 150;
        let requiredExtension = 300;
        
       
        switch (course) {
            case "Ciência da Computação":
                requiredComplementary = 240;
                requiredExtension = 320;
                break;
            case "Engenharia da Computação":
                requiredComplementary = 120;
                requiredExtension = 360;
                break;
            case "Inteligência Artificial":
                requiredComplementary = 270;
                requiredExtension = 320;
                break;
            case "Sistemas de Informação":
                requiredComplementary = 150;
                requiredExtension = 300;
                break;
        }
        
        return {
            complementary: {
                current: usuario.studentRecord.complementaryHours || 0,
                required: requiredComplementary
            },
            extension: {
                current: usuario.studentRecord.extensionHours || 0,
                required: requiredExtension
            }
        };
    };

    // Calcular dados e porcentagens
    const hoursData = getHoursData();
    const complementaryPercentage = Math.min((hoursData.complementary.current / hoursData.complementary.required) * 100, 100);
    const extensionPercentage = Math.min((hoursData.extension.current / hoursData.extension.required) * 100, 100);



    useEffect(() => {
           if (token) {
            // Buscar dados do usuário
            const fetchUserData = () => {
                api.post('/student/specific', { accessToken: token })
                    .then((res) => setUsuario(res.data))
                    .catch((err) => console.error("Erro ao buscar informações do usuário", err));
            };

            fetchUserData();
            
            api.post('/student/posts', { accessToken: token })
                .then((res) => setHistorico(res.data))
                .catch((err) => console.error("Erro ao buscar histórico de oportunidades do usuário", err));

            // Atualizar a cada 30 segundos para mostrar progresso em tempo real
            const interval = setInterval(fetchUserData, 30000);
            
            return () => clearInterval(interval);

        }
    }, [token])

    const LogOut = () => {
        userAuth.removeAccessToken;
        navigate('/')
    }

    if (!usuario) {
        return (
            <div className="min-h-screen bg-mainbg flex items-center justify-center">
                <p>Carregando...</p>
            </div>
        );
    }

    const handleEditProfile = async (e) => {
        e.preventDefault();
        try {
            
            const updatedData = {
                fullName: editData.fullName || usuario.fullName,
                email: editData.email || usuario.email,
                course: editData.course || usuario.studentRecord?.course,
                entrance: editData.entrance || usuario.studentRecord?.entrance,
                accessToken: token,
            };

            const response = await api.put('/user/edit', updatedData);
            console.log("Resposta da API:", response.data);
            
            if (response.status === 200) {
                
                setUsuario(response.data.student); // ou o campo que sua API retorna
                setIsEditing(false);
                setEditData({});
            }
        } catch (error) {
            console.error("Erro ao editar perfil:", error);
        }
    };

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
                        {usuario.fullName.charAt(0)}
                    </div>
                    {isEditing ? (
                        <form onSubmit={handleEditProfile} className="flex flex-col gap-2 mt-4">
                            <input
                                type="text"
                                placeholder="Nome"
                                value={editData.fullName || usuario.fullName}
                                onChange={(e) => setEditData({ ...editData, fullName: e.target.value })}
                                className="border rounded p-2"
                            />

                            {usuario.studentRecord && (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Curso"
                                        value={editData.course || usuario.studentRecord.course}
                                        onChange={(e) =>
                                            setEditData({ ...editData, course: e.target.value })
                                        }
                                        className="border rounded p-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Entrada"
                                        value={editData.entrance || usuario.studentRecord.entrance}
                                        onChange={(e) =>
                                            setEditData({ ...editData, entrance: e.target.value })
                                        }
                                        className="border rounded p-2"
                                    />
                                </>
                            )}

                            <input
                                type="email"
                                placeholder="Email"
                                value={editData.email || usuario.email}
                                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                className="border rounded p-2"
                            />

                            <div className="flex gap-4 mt-2">
                                <button
                                    type="submit"
                                    className="bg-darkred text-white px-4 py-2 rounded-full"
                                >
                                    Salvar Alterações
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsEditing(false);
                                        setEditData({});
                                    }}
                                    className="bg-gray-300 text-darkred px-4 py-2 rounded-full"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <h1 className="text-2xl font-bold text-darkred">{usuario.fullName}</h1>
                            {usuario?.studentRecord
                                ? `${usuario.studentRecord.course} | ${usuario.studentRecord.entrance}`
                                : usuario?.role
                                    ? `Perfil de professor`
                                    : ""}
                            <p className="text-gray-600 text-xs">{usuario.email}</p>
                        </>
                    )}


                    <div className="flex mt-5 gap-10 mb-10">

                        <button
                            type="button"
                            onClick={() => setIsEditing(true)}
                            className="bg-[darkred] text-white w-50 rounded-full font-bold"
                        >
                            Editar Perfil
                        </button>

                        <button onClick={LogOut} className="bg-[white] text-[darkred] border-3 border-indigo- border-t-indigo  w-50  rounded-full font-bold ">sair da conta</button>
                    </div>
                    <button type="button" onClick={() => navigate('/history')}class=" text-[darkred] hover:text-white border border-[darkred]-700 hover:bg-[darkred] focus:ring-4 focus:outline-none focus:ring-[darkred]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[darkred]-500 dark:text-[darkred]-500 dark:hover:text-white dark:hover:bg-[darkred]-600 dark:focus:ring-red-900">Histórico de Participação Completo</button>
                    <button type="button" onClick={() => navigate('/favorites')} class=" text-[darkred] hover:text-white border border-[darkred]-700 hover:bg-[darkred] focus:ring-4 focus:outline-none focus:ring-[darkred]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[darkred]-500 dark:text-[darkred]-500 dark:hover:text-white dark:hover:bg-[darkred]-600 dark:focus:ring-red-900">oportunidades favoritadas</button>
                    {usuario?.studentRecord
                    ?   <Link
                            to={'/student/data'}
                            className="text-[darkred] hover:text-white border border-[darkred]-700 hover:bg-[darkred] focus:ring-4 focus:outline-none focus:ring-[darkred]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[darkred]-500 dark:text-[darkred]-500 dark:hover:text-white dark:hover:bg-[darkred]-600 dark:focus:ring-red-900"
                        >
                            Relatório de Horas Complementares
                        </Link>
                    :   <Link
                            to={'/teacher/data'}
                            className="text-[darkred] hover:text-white border border-[darkred]-700 hover:bg-[darkred] focus:ring-4 focus:outline-none focus:ring-[darkred]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[darkred]-500 dark:text-[darkred]-500 dark:hover:text-white dark:hover:bg-[darkred]-600 dark:focus:ring-red-900"
                        >
                            Relatório das Oportunidades
                        </Link>}
                    
                    
                    
                </div>
            </section>
           <section className="lg:w-1/4 w-full flex h-full flex-col gap-1 bg-white p-2 m-10 self-stretch rounded-xl">
                <div className="p-4">
                    <h2 className="text-xl font-bold text-darkred mt-5">Relatório de Horas - SIGAA</h2>
                    <hr className="h-px mt-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>

                    {/* Dashboard Atividades Complementares */}
                    <h2 className="font-bold mt-10">Atividades Complementares</h2>
                    <p className="text-sm">
                        <span className="text-darkred font-semibold">{hoursData.complementary.current}h</span> de {hoursData.complementary.required}h
                    </p>
                    <div className="flex justify-between items-center mb-1">
                        <div className="w-full bg-gray-300 rounded-full h-3 mt-2 relative">
                            <div
                                className="bg-darkred h-3 rounded-full transition-all duration-500"
                                style={{ width: `${complementaryPercentage}%` }}
                            />
                            {/* Percentual na barra */}
                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                                {complementaryPercentage.toFixed(0)}%
                            </span>
                        </div>
                    </div>
                    
                    {/* Status complementares */}
                    <div className="mt-2">
                        {complementaryPercentage >= 100 ? (
                            <p className="text-xs text-green-600 font-bold">✅ Requisito cumprido!</p>
                        ) : (
                            <p className="text-xs text-gray-600">
                                Faltam {hoursData.complementary.required - hoursData.complementary.current}h para completar
                            </p>
                        )}
                    </div>

                    {/* Dashboard Atividades de Extensão */}
                    <h2 className="font-bold mt-8">Atividades de Extensão</h2>
                    <p className="text-sm">
                        <span className="text-darkred font-semibold">{hoursData.extension.current}h</span> de {hoursData.extension.required}h
                    </p>
                    <div className="flex justify-between items-center mb-1">
                        <div className="w-full bg-gray-300 rounded-full h-3 mt-2 relative">
                            <div
                                className="bg-darkred h-3 rounded-full transition-all duration-500"
                                style={{ width: `${extensionPercentage}%` }}
                            />
                            {/* Percentual na barra */}
                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                                {extensionPercentage.toFixed(0)}%
                            </span>
                        </div>
                    </div>
                    
                    {/* Status extensão */}
                    <div className="mt-2">
                        {extensionPercentage >= 100 ? (
                            <p className="text-xs text-green-600 font-bold">✅ Requisito cumprido!</p>
                        ) : (
                            <p className="text-xs text-gray-600">
                                Faltam {hoursData.extension.required - hoursData.extension.current}h para completar
                            </p>
                        )}
                    </div>

                    {/* Resumo Geral */}
                    <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                        <h3 className="font-bold text-darkred text-sm mb-2">Resumo do Curso</h3>
                        <p className="text-xs text-gray-600">
                            <strong>Curso:</strong> {usuario?.studentRecord?.course || "N/A"}
                        </p>
                        <p className="text-xs text-gray-600">
                            <strong>Progresso Geral:</strong> {((complementaryPercentage + extensionPercentage) / 2).toFixed(0)}%
                        </p>
                        
                        {complementaryPercentage >= 100 && extensionPercentage >= 100 && (
                            <div className="mt-2 p-2 bg-green-100 rounded">
                                <p className="text-xs text-green-700 font-bold text-center">
                                    🎉 Todos os requisitos cumpridos!
                                </p>
                            </div>
                        )}
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