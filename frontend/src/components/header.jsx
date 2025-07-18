import logo from '../assets/logo_linkeCIn.png';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-8 py-4 sticky top-0 z-50">
      <div className="mx-auto flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>
    </header>
  );
}