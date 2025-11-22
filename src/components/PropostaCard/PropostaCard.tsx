import { useNavigate } from "react-router-dom";
import type { Proposta } from "../../types/proposta";

export default function PropostaCard({ proposta }: { proposta: Proposta }) {
  const navigate = useNavigate();

  const irParaDetalhes = (id: number) => {
    navigate(`/proposta/${id}`);
  };

  return (
    <button
      onClick={() => irParaDetalhes(proposta.id)}
      className="cursor-pointer w-full max-w-[95vw] sm:max-w-md mx-auto text-center 
                 bg-[#76b99d] text-[#194737] font-semibold px-4 py-3 rounded 
                 hover:bg-white transition shadow-sm"
    >
      {proposta.titulo}
    </button>
  );
}
