import logo from '../assets/logo_linkeCIn.png';
import { useNavigate, Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";



export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const paginasSemBotoes = ["/", "*", "/register", "/cadastro"];

  const esconderBotoes = paginasSemBotoes.includes(location.pathname);


  return (
    <header className="w-full bg-white shadow-md px-8 py-0 sticky top-0 z-30">
      <div className="w-full flex items-center justify-between">

        {esconderBotoes ? (
          // a logo sem link
          <img src={logo} alt="Logo" className="h-18 w-auto" />
        ) : (
          // a logo com link
          <Link to={"/feed"}>
            <img src={logo} alt="Logo" className="h-18 w-auto" />
          </Link>
        )}

        {!esconderBotoes && (
          <div className="flex gap-4 font-bold text-[darkred]">
            <button
              onClick={() => navigate('/more-info')}
              className="transition-transform duration-200 hover:scale-105 rounded-md p-2 hover:bg-darkred hover:text-white"
            >
              Saber Mais
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="transition-transform duration-200 hover:scale-105 rounded-md p-2 hover:bg-darkred hover:text-white"
            >
              Perfil
            </button>
          </div>
        )}
      </div>
    </header>
  );
}