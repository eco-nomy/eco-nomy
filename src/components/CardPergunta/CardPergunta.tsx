import { useState } from "react";
import type { TipoFaq } from "../../types/tipoFaq";

export default function CardPergunta({ faq }: { faq: TipoFaq }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div
      onClick={() => setAberto(!aberto)}
      className="bg-[var(--c-bg2)] text-white cursor-pointer w-full max-w-[95vw] sm:max-w-md mx-auto text-left 
                 font-semibold px-4 py-3 rounded 
                 hover:bg-[var(--c-bg1)] transition shadow-sm"
    >
      <p>{faq.titulo}</p>

      {aberto && (
        <div className="mt-2 text-sm text-white font-normal space-y-1">
          <p><strong>Pergunta:</strong> {faq.corpo}</p>
          <p><strong>Autor da pergunta:</strong> {faq.autorDaPergunta}</p>
          <p><strong>Autor da resposta:</strong> {faq.autorDaResposta}</p>
          <p><strong>Data da resposta:</strong> {new Date(faq.data_resposta).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
}
