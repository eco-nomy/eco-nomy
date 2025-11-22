import { Link } from "react-router-dom";

export default function AcessoRapido() {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/integrantes">Integrantes</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/oficinas">Oficinas</Link>
      <Link to="/perguntas-frequentes">Perguntas</Link>
      <Link to="/trabalhos">Trabalhos</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}
