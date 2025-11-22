import { useNavigate } from "react-router-dom";
import type { CardFaq } from "../../types/cardFaq";

export default function CardPergunta({ faq }: CardFaq) {
  const navigate = useNavigate();

  const irParaResposta = (id: number) => {
    navigate(`/perguntas-frequentes/${id}`);
  };

  return (
    <button
      onClick={() => irParaResposta(faq.id)}
      className="w-full max-w-[95vw] sm:max-w-md mx-auto text-center bg-[#76b99d] text-[#194737] font-semibold px-4 py-3 rounded hover:bg-white transition shadow-sm"
    >
      {faq.titulo}
    </button>
  );
}
