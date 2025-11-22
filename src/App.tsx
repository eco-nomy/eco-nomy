import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import './global.css';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho />

      <div className="flex-1">
        <Outlet />
      </div>

      <Rodape />
    </div>
  );
}