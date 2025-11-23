import { useEffect, useState } from "react";
import PropostaCard from "../PropostaCard/PropostaCard";
import type { Proposta } from "../../types/proposta";

export default function ListaPropostas() {
  const [propostas, setPropostas] = useState<Proposta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://eco-nomy-sis-stable-524v.onrender.com/proposta", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "chave-primaria",
          },
        });

        if (!response.ok) {
          throw new Error("Erro na requisição da API!");
        }

        const data: Proposta[] = await response.json();

        const filtradas = data.filter((p) => p.longoPrazo === true);
        setPropostas(filtradas);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="w-full max-w-screen px-4 py-6 text-[#194737] text-center overflow-hidden">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
        Propostas de Longo Prazo
      </h2>

      <div className="flex flex-col items-center gap-4 w-full">
        {loading ? (
          <section className="bg-[#ffffff] p-6 max-w-xl mx-auto mt-8 rounded-lg shadow-md text-center text-[#194737]">
            <h2 className="text-2xl font-bold mb-4 text-[#194737]">
              Carregando ...
            </h2>
          </section>
        ) : propostas.length === 0 ? (
          <section className="bg-[#ffffff] p-6 max-w-xl mx-auto mt-8 rounded-lg shadow-md text-center text-[#194737]">
            <h2 className="text-2xl font-bold mb-4 text-[#194737]">
              Nenhuma proposta encontrada
            </h2>
            <p className="mb-6">
              No momento não há propostas disponíveis.
            </p>
          </section>
        ) : (
          propostas.map((proposta) => (
            <div key={proposta.id} className="w-full max-w-[95vw] sm:max-w-md">
              <PropostaCard proposta={proposta} />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
