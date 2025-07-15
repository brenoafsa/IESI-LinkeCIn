export default function Login() {
    return (
        <form className="pt-10 space-y-4">
            <input type="email" id="email" className="p-2 rounded-xl w-full border-3 border-darkred focus:outline-none" placeholder="Email" />
            <input type="password" id="password" className="p-2 rounded-xl w-full border-3 border-darkred focus:outline-none" placeholder="Senha" />
            <button type="submit" className="bg-white text-darkred p-2 rounded-xl font-black w-full h-12">Continuar</button>
        </form>
    );
}