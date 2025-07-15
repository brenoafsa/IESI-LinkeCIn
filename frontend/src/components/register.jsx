import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    return (
        <form className="pt-4 w-full space-y-4">
            <input type="text" id="nome-completo" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Nome Completo" />
            <input type="email" id="email-registro" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14" placeholder="Email" />
            <input type="password" id="password-registro" className="rounded-xl w-full border-3 pl-2 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg border-darkred focus:outline-none h-8 sm:h-10 md:h-12 lg:h-14 " placeholder="Senha" />
            <h1 className="text-xl text-center">Selecione abaixo o seu cargo:</h1>
            <div className="flex items-center mt-2">
                <button type="button" className="bg-darkred text-white rounded-xl w-full h-9 sm:h-10 md:h-12 lg:h-14  mr-2">Professor</button>
                <button type="button" className="bg-darkred text-white rounded-xl w-full h-9 sm:h-10 md:h-12 lg:h-14  mr-2">Aluno</button>
            </div>
            <button type="submit" className="bg-white text-darkred rounded-xl font-black w-full h-9 sm:h-10 md:h-12 lg:h-14  mt-4">Continuar</button>
        </form>
    );
}