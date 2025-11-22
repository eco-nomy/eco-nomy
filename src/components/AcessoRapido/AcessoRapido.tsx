import { Link } from "react-router-dom";

export default function AcessoRapido() {
    return (
        <nav className="grid grid-cols-2 gap-2 text-lg text-gray-200 place-items-center acesso-items">
            <Link to="/">Home</Link>
            <Link to="/integrantes">Integrantes</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/oficinas">Oficinas</Link>
            <Link to="/perguntas-frequentes">Perguntas(FAQ)</Link>
            <Link to="/trabalhos">Trabalhos</Link>
            <Link to="/contato">Contato</Link>
        </nav>
    );
}