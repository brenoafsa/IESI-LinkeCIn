import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    return (
        <form className="pt-4 w-full space-y-4">
            <input type="text" id="nome-completo" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs border-darkred focus:outline-none" placeholder="Nome Completo" />
            <input type="email" id="email-registro" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs border-darkred focus:outline-none" placeholder="Email" />
            <input type="password" id="password-registro" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs border-darkred focus:outline-none" placeholder="Senha" />
            <h1 className="text-xl text-center">Selecione abaixo o seu cargo:</h1>
            <div className="flex items-center mt-2">
                <button type="button" className="bg-darkred text-white rounded-xl w-full h-9 mr-2">Professor</button>
                <button type="button" className="bg-darkred text-white rounded-xl w-full h-9 mr-2">Aluno</button>
            </div>
            <button type="submit" className="bg-white text-darkred rounded-xl font-black w-100 h-9 mt-4">Continuar</button>
        </form>
    );
}