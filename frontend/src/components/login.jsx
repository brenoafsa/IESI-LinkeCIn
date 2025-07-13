export default function Login() {
    return (
        <form className="pt-10">
            <div className="mb-4">
                <input type="email" id="email" className="p-2 rounded-xl w-100 border-3 border-darkred" placeholder="Email" />
            </div>
            <div className="mb-4">
                <input type="password" id="password" className="p-2 rounded-xl w-100 border-3 border-darkred" placeholder="Senha" />
            </div>
            <button type="submit" className="bg-white text-darkred p-2 rounded-xl font-black w-100 h-12">Continuar</button>
        </form>
    );
}