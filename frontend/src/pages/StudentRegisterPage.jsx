import { useEffect, useState, useRef } from "react"
import api from '../services/api'
import { useParams, Link, useNavigate } from "react-router-dom"

const StudentRegisterPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [curso, setCurso] = useState('');
    const [entrada, setEntrada] = useState('');
    const [aberto, setAberto] = useState(false);
    const [selecionadas, setSelecionadas] = useState([]);
    const [horas, setHoras] = useState(0)
    const disciplinas = ["Concepção dos Artefatos Digitais", "Sistemas Digitais", "Matemática Discreta", "Introdução à Programação", "Cálculo 1", "Estrutura de Dados Orientadas a Objetos", "Desenvolvimento de Software", "Arquitetura de Computadores e Sistemas Operacionais", "Banco de Dados", "Algoritmos", "Álgebra Vetorial e Linear para Computação"];

    const dropdownRef = useRef(null);

    const toggleOpcao = (valor) => {
        setSelecionadas((atual) =>
            atual.includes(valor)
                ? atual.filter((item) => item !== valor)
                : [...atual, valor]
        );
    };

    const fecharDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setAberto(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", fecharDropdown);
        return () => document.removeEventListener("mousedown", fecharDropdown);
    }, []);

    const handleStudentSignUp = async (event) => {
        event.preventDefault();

        const formData = { userId: id, horas: horas, curso: curso, entrada: entrada, disciplinas: selecionadas }

        try {
            const response = await api.post("/student", formData);

            if (response.status === 201) {
                alert("Parabéns! Você está logado como um estudante!");
                navigate("/feed");
            }
        } catch (err) {
            console.error("Erro:", err);
            alert("Erro ao cadastrar seu histórico escolar. Tente novamente.");
        }
    }

	return (
		<div className="w-full min-h-screen bg-mainbg">
			<section className="text-extrabold bg-mainbg p-20 pl-170">
				<div className="w-100">
					<h1 className="text-2xl max-w-md font-black text-darkred text-center">Continue seu cadastro! </h1>
						<form className="pt-4 w-100" onSubmit={handleStudentSignUp}>
						<div className="mb-4">
							<select
								className="rounded-xl w-100 border-3 pl-2 placeholder:text-xs border-darkred h-8 focus:outline-none text-gray-500"
								value={curso}
								onChange={(e) => setCurso(e.target.value)}
								id="curso-select"
							>
								<option value="">Selecione seu Curso</option>
								<option value="cc">Ciência da Computação</option>
								<option value="ec">Engenharia da Computação</option>
								<option value="si">Sistemas de Informação</option>
								<option value="ia">Inteligência Artificial</option>
							</select>
						</div>
						<div className="mb-4">
							<select
								className="rounded-xl w-100 border-3 pl-2 placeholder:text-xs border-darkred h-8 focus:outline-none text-gray-500"
								value={entrada}
								onChange={(e) => setEntrada(e.target.value)}
								id="entrada-select"
							>
								<option value="">Selecione sua Entrada</option>
								<option value="2025.1">2025.1</option>
								<option value="2024.2">2024.2</option>
								<option value="2024.1">2024.1</option>
								<option value="2023.2">2023.2</option>
								<option value="2023.1">2023.1</option>
								<option value="2022.2">2022.2</option>
								<option value="2022.1">2022.1</option>
								<option value="2021.2">2021.2</option>
								<option value="2021.1">2021.1</option>
								<option value="2020.2">2020.2</option>
								<option value="2020.1">2020.1</option>
							</select>
						</div>
						<div className="w-100" ref={dropdownRef}>
							<div
								className="rounded-xl w-100 border-3 pl-2 placeholder:text-xs border-darkred h-8 focus:outline-none"
								onClick={() => setAberto(!aberto)}
							>
								<span className="text-gray-500">Selecione suas disciplinas já cursadas</span>
							</div>


							{aberto && (
								<div className="mt-1 w-100 bg-white border border-gray-300 rounded shadow max-h-60 overflow-y-auto">
									{disciplinas.map((opcao) => (
										<label
											key={opcao}
											className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
										>
											<input
												type="checkbox"
												className="mr-2"
												checked={selecionadas.includes(opcao)}
												onChange={() => toggleOpcao(opcao)}
											/>
											{opcao}
										</label>
									))}
								</div>
							)}
						</div>
					<p className="text-bold text-center mt-3">Quantas horas de carga horária complementar obrigatória você já cumpriu?</p>
					<div className="flex items-center mt-2">
						<input
							type="number"
							id="horas"
							className="rounded-2xl w-100 h-10 border-3 pl-2 placeholder:text-xs focus:outline-none bg-darkred text-white"
							placeholder="Adicione aqui suas horas. Ex: 60"
							value={horas}
							onChange={(e) => setHoras(Number(e.target.value))}
						/>
					</div>
				<button type="submit" className="bg-white text-darkred rounded-xl font-black w-100 h-9 mt-4">Continuar</button>
			</form >
					<p className="pt-3 text-extrabold pl-4 text-center">Já faz parte do LinkeCIn? <Link to="/" className="text-darkred underline font-bold">Entrar</Link></p>
				</div>
			</section>
		</div>
	);
}

export default StudentRegisterPage