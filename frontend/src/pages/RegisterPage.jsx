import { useState } from "react"
import api from '../services/api'
import { userAuth } from "../services/userAuth";
import { Link, useNavigate } from "react-router-dom"
import imagem from '../assets/img_RegisterPage.png';

const RegisterPage = () => {
    const [role, setRole] = useState("") // Estado para o role
    const navigate = useNavigate()

    const handleSignUp = async (event) => {
        event.preventDefault();

        const fullName = document.getElementById("nome-completo").value;
        const email = document.getElementById("email-registro").value;
        const password = document.getElementById("password-registro").value;

        // verifica se os campos estão preenchidos, incluindo o role
        if (!fullName || !email || !password || !role) {
            alert("Por favor, preencha todos os campos e selecione um cargo.");
            return;
        }

        // envia os dados do formulário
        const formData = { fullName, email, password, role };

        try {
            const response = await api.post("/users", formData);

            if (response.status === 200 || response.status === 201) {
                alert("Usuário criado com sucesso!");

                // se selecionar aluno, vai pra página de registro de aluno
                if (role === "STUDENT") {
                    const userId = response.data.id;
                    navigate(`/student-register/${userId}`);
                } else {
                    userAuth.setAccessToken(response.data.accessToken)
                    navigate("/feed");
                }
            }
        } catch (error) {
            console.error("Erro:", error);
            if (error.response) {
                console.error("Dados da resposta:", error.response.data);
                console.error("Status:", error.response.status);
            }
            alert("Erro ao criar usuário. Tente novamente.");
        }
    };

    return (
        <div className="w-full min-h-screen bg-mainbg flex justify-center">
            <section className="w-1/2 max-h-md flex items-center">
                <img src={imagem} alt="" className="h-auto pointer-events-none max-w-2xl self-start" />
            </section>
            <section className="text-extrabold bg-mainbg p-[20px] sm:p-[24px] md:p-[32px] lg:p-[48px] xl:p-[64px]">
                <div>
                    <h1 className="text-2xl max-w-2xl font-black text-darkred text-center">Crie sua conta! </h1>
                    <form className="pt-4 w-full space-y-4" onSubmit={handleSignUp}>
                        <input type="text" id="nome-completo" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Nome Completo" />
                        <input type="email" id="email-registro" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Email" />
                        <input type="password" id="password-registro" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14 " placeholder="Senha" />
                        <h1 className="text-xl text-center">Selecione abaixo o seu cargo:</h1>
                        <div className="flex items-center mt-2">
                            <button
                                type="button"
                                className={`rounded-xl w-full h-9 sm:h-10 md:h-12 lg:h-14 mr-2 ${role === "TEACHER"
                                        ? "bg-white text-darkred border-2 border-darkred"
                                        : "bg-darkred text-white"
                                    }`}
                                onClick={() => setRole("TEACHER")}
                            >
                                Professor
                            </button>
                            <button
                                type="button"
                                className={`rounded-xl w-full h-9 sm:h-10 md:h-12 lg:h-14 mr-2 ${role === "STUDENT"
                                        ? "bg-white text-darkred border-2 border-darkred"
                                        : "bg-darkred text-white"
                                    }`}
                                onClick={() => setRole("STUDENT")}
                            >
                                Aluno
                            </button>
                        </div>
                        <button type="submit" className="bg-white text-darkred rounded-xl font-black w-full h-9 sm:h-10 md:h-12 lg:h-14 mt-4 hover:text-primaryred transition hover:shadow-md hover:shadow-darkred/40">Continuar</button>
                    </form>
                    <p className="pt-3 text-extrabold pl-4 text-center">Já faz parte do LinkeCIn? <Link to="/" className="text-darkred underline font-bold hover:text-primaryred">Entrar</Link></p>
                </div>
            </section>
        </div>
    );
}

export default RegisterPage