import logo from '../assets/logo_linkeCIn.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const mostrarOpcoes = location.pathname === '/profile' || location.pathname === '/publish' || location.pathname === '/opportunity/:id' || location.pathname === '/data' || location.pathname === 'favorites' || location.pathname === '/feed';

  return (
    <header className="w-full bg-white shadow-md px-8 py-0 sticky top-0 z-30">
      <div className=" w-full flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-18 w-auto" />

    {mostrarOpcoes && (
      <div className="flex gap-4 font-bold text-[darkred] ">
        <button className="transition-transform duration-200 hover:scale-105 rounded-md p-2 hover:bg-darkred hover:text-white">Saber Mais</button>
        <button onClick={() => navigate('/profile')} className="transition-transform duration-200 hover:scale-105 rounded-md p-2 hover:bg-darkred hover:text-white">Perfil</button>
      </div>
    )}
  </div>
</header>
  );
}