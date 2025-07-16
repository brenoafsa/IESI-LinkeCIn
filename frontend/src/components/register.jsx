import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState(""); // Estado para o role

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
          navigate("/student-register");
        } else {
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
    <form className="pt-4 w-100" onSubmit={handleSignUp}>
      <div className="mb-4 ">
        <input
          type="text"
          id="nome-completo"
          className="rounded-xl w-100 border-3 pl-2 placeholder:text-xs border-darkred focus:outline-none"
          placeholder="Nome Completo"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          id="email-registro"
          className="rounded-xl w-100 border-3 pl-2 placeholder:text-xs border-darkred focus:outline-none"
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          id="password-registro"
          className="rounded-xl w-100 border-3 pl-2 placeholder:text-xs border-darkred focus:outline-none"
          placeholder="Senha"
        />
      </div>
      <h1 className="text-xl text-center">Selecione abaixo o seu cargo:</h1>
      <div className="flex items-center mt-2">
        <button
          type="button"
          className={`rounded-xl w-100 h-9 mr-2 ${
            role === "TEACHER"
              ? "bg-white text-darkred border-2 border-darkred"
              : "bg-darkred text-white"
          }`}
          onClick={() => setRole("TEACHER")}
        >
          Professor
        </button>
        <button
          type="button"
          className={`rounded-xl w-100 h-9 mr-2 ${
            role === "STUDENT"
              ? "bg-white text-darkred border-2 border-darkred"
              : "bg-darkred text-white"
          }`}
          onClick={() => setRole("STUDENT")}
        >
          Aluno
        </button>
      </div>
      <button
        type="submit"
        className="bg-white text-darkred rounded-xl font-black w-100 h-9 mt-4"
      >
        Continuar
      </button>
    </form>
  );
}
