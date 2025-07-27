import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import api from "../services/api"; 
import { userAuth } from "../services/userAuth";
import Opportunity from "../components/opportunity";

const ProfilePage = () => {
    const [historico, setHistorico] = useState()
	const [aluno, setAluno] = useState()
    const token = userAuth.getAccessToken();

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

	if (!aluno) {
        return (
            <div className="min-h-screen bg-mainbg flex items-center justify-center">
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-mainbg lg:flex">
            <section className="lg:w-2/3 w-full lg:flex xl:flex h-full flex-col gap-1 bg-white p-2 m-10 self-stretch rounded-xl">
                <div className="w-full h-40 bg-darkred rounded-lg"></div>
                <div className="pl-10">
                    <div className="w-32 h-32 rounded-full bg-gray-400 -mt-18"></div>
                    <h1 className="text-2xl font-bold text-darkred">{aluno.fullName}</h1>
                    <p className="text-gray-600">Estudante de {aluno.studentRecord.course} | {aluno.studentRecord.entrance} </p>
                    <p className="text-gray-600 text-xs"> {aluno.email} </p>
                    <button className="px-6 py-2 rounded-xl bg-primaryred text-white mt-10 lg:w-1/4 w-full">
                        Tenho interesse
                    </button>
                    <h1 className="text-2xl font-bold text-darkred mt-5">Histórico de Oportunidades</h1>

                    <div className="mt-4 space-y-4">
                        {historico && historico.length > 0 ? (
                            historico.map((opportunity) => (
								<Link key={opportunity.id} to={`/opportunity/${opportunity.id}`}>
                                	<Opportunity key={opportunity.id} opportunity={opportunity} />
								</Link>
                            ))
                        ) : (
                            <p className="text-gray-500">Nenhuma oportunidade encontrada no histórico.</p>
                        )}
                    </div>
                </div>
            </section>
            <section className="lg:w-1/4 w-full flex h-full flex-col gap-1 bg-white p-2 m-10 self-stretch rounded-xl">
                <div className="p-4">
                    <h2 className="text-xl font-bold text-darkred mt-5">Informações Adicionais</h2>
                    <p className="text-gray-600">Aqui você pode adicionar informações adicionais sobre o usuário.</p>
                </div>
            </section>
        </div>
    );
}
export default ProfilePage