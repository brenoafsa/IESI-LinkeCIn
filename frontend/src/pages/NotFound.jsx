import imagem from '../assets/img_NotFound.png';
import { Link } from "react-router-dom";

function NotFound() {
  return <>
    <div className=" bg-mainbg flex justify-center items-center ">
      <Link to="/" className="text-white font-bold text-xl flex items-center gap-2 shrink-0">
        <img
          src={imagem}
          alt="Logo"
          className="h-200"
        />
      </Link>
    </div></>
}

export default NotFound