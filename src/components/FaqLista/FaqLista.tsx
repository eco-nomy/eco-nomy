import { ListaFaq } from "../../data/listaFaq";
import { useEffect, useState } from "react";
import type { TipoFaq } from "../../types/tipoFaq";
import CardFaq from "../CardPergunta/CardPergunta";

export default function FaqLista() {
  const [perguntas, setPerguntas] = useState<TipoFaq[]>([]);

  useEffect(() => {
    setPerguntas(ListaFaq);
  }, []);

  return (
    <section className="w-full max-w-screen px-4 py-6 text-[#194737] text-center overflow-hidden">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
        Perguntas Frequentes
      </h2>

      <div className="flex flex-col items-center gap-4 w-full">
        {perguntas.map((faq) => (
          <div key={faq.id} className="w-full max-w-[95vw] sm:max-w-md">
            <CardFaq faq={faq} />
          </div>
        ))}
      </div>
    </section>
  );
}
