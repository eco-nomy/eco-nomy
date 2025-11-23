import { useEffect, useState } from "react";
import CardEmpresa from "../CardEmpresa/CardEmpresa";
import type { Empresa } from "../../types/empresa";

export default function ListaEmpresas() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://eco-nomy-sis-stable-524v.onrender.com/empresa", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "chave-primaria",
          },
        });

        if (!response.ok) {
          throw new Error("Erro na requisição da API!");
        }

        const data: Empresa[] = await response.json();
        setEmpresas(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const empresasFiltradas = empresas.filter((empresa) =>
    empresa.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full max-w-screen px-4 py-6 text-[var(--c-text3)] text-center overflow-hidden">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
        Empresas Cadastradas
      </h2>

      <input
        type="text"
        placeholder="Pesquisar empresa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--c-text3)]"
      />

      {loading ? (
        <section className="bg-[var(--c-bg)] text-[var(--c-text3)] p-6 max-w-xl mx-auto mt-8 rounded-lg shadow-md text-center ">
          <h2 className="text-2xl font-bold mb-4">Carregando ...</h2>
        </section>
      ) : empresasFiltradas.length === 0 ? (
        <section className="bg-[var(--c-bg)] text-[var(--c-text3)] p-6 max-w-xl mx-auto mt-8 rounded-lg shadow-md text-center ">
          <h2 className="text-2xl font-bold mb-4">Nenhuma empresa encontrada</h2>
          <p>No momento não há empresas cadastradas com esse nome.</p>
        </section>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full">
          {empresasFiltradas.map((empresa) => (
            <CardEmpresa key={empresa.id} empresa={empresa} />
          ))}
        </div>
      )}
    </section>
  );
}
