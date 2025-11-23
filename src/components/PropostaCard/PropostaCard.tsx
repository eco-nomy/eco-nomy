import { useNavigate } from "react-router-dom";
import type { Proposta } from "../../types/proposta";

export default function PropostaCard({ proposta }: { proposta: Proposta }) {
  const navigate = useNavigate();

  const irParaDetalhes = (id: number) => {
    navigate(`/proposta/${id}`);
  };

  return (
    <div
      onClick={() => irParaDetalhes(proposta.id)}
      className="cursor-pointer w-full max-w-sm mx-auto text-left 
                 bg-[var(--c-bg6)] rounded-lg shadow-md text-[var(--c-text3)]
                 hover:shadow-lg transition transform hover:-translate-y-1"
    >
      <div className="bg-[var(--c-bg5)] px-4 py-2 rounded-t-lg">
        <h3 className="text-lg font-bold text-[var(--c-text1)] truncate">
          {proposta.descricao}
        </h3>
      </div>

      <div className="px-4 py-3 space-y-2">
        <p className="text-xl font-semibold">
      R$ {proposta.valor.toFixed(2)}
        </p>
      </div>

      <div className="text-[var(--c-text3)] px-4 py-2 rounded-b-lg text-right">
        <span className="text-sm font-medium hover:underline">
          Ver detalhes →
        </span>
      </div>
    </div>
  );
}
