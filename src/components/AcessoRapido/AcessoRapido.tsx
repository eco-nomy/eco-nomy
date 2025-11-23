import { Link } from "react-router-dom";

export default function AcessoRapido() {
    return (
        <nav className="grid grid-cols-2 gap-2 text-lg text-gray-200 place-items-center acesso-items">
            <Link to="/" className="hover:text-[#2e7c10] transition">Home</Link>
            <Link to="/integrantes" className="hover:text-[#2e7c10] transition">Integrantes</Link>
            <Link to="/sobre" className="hover:text-[#2e7c10] transition">Sobre</Link>
            <Link to="/perguntas" className="hover:text-[#2e7c10] transition">FAQ</Link>
            <Link to="/hub" className="hover:text-[#2e7c10] transition">Hub de Colaboração</Link>
            <Link to="/trabalhos" className="hover:text-[#2e7c10] transition">Trabalhos</Link>
            <Link to="/contratacao" className="hover:text-[#2e7c10] transition">Vagas</Link>
            <Link to="/contato" className="hover:text-[#2e7c10] transition">Contato</Link>
        </nav>
    );
}