import { useEffect, useState } from "react";
import PropostaCard from "../PropostaCard/PropostaCard";
import type { Proposta } from "../../types/proposta";

export default function ListaTrabalhos() {
  const [propostas, setPropostas] = useState<Proposta[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // estado da pesquisa

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

        const filtradas = data.filter(
          (p) => p.longoPrazo === false && (p.empregadoId === 0 || p.empregadoId === undefined)
        );

        setPropostas(filtradas);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const propostasFiltradas = propostas.filter((p) =>
    p.descricao.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="w-full max-w-screen px-4 py-6 text-[var(--c-text3)] text-center overflow-hidden">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
        Trabalhos de Curto Prazo
      </h2> 

      <input
        type="text"
        placeholder="Pesquisar trabalhos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--c-bg1)]"
      />

      {loading ? (
        <section className="bg-[var(--c-bg)] text-[var(--c-text)] p-6 max-w-xl mx-auto mt-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-[var(--c-text3)]">
            Carregando ...
          </h2>
        </section>
      ) : propostasFiltradas.length === 0 ? (
        <section className="bg-[var(--c-bg)] text-[var(--c-text)] p-6 max-w-xl mx-auto mt-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-[var(--c-text3)]">
            Nenhuma proposta encontrada
          </h2>
          <p className="mb-6">
            No momento não há propostas disponíveis.
          </p>
        </section>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full">
          {propostasFiltradas.map((proposta) => (
            <PropostaCard key={proposta.id} proposta={proposta} />
          ))}
        </div>
      )}
    </main>
  );
}
