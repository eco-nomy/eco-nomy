import { useEffect, useState } from "react";

interface Proposta {
  id: number;
  empresa_id: number;
  empregado_id: number;
  titulo: string;
  descricao: string;
  valor: number;
  data_criacao: string;
  is_longo_prazo: number;
  status: string;
}

export default function Trabalhos() {
  const [propostas, setPropostas] = useState<Proposta[]>([]);
  const [selecionada, setSelecionada] = useState<Proposta | null>(null);

  useEffect(() => {
    document.title = "Trabalhos";

    const fetchPropostas = async () => {
      try {
        const resp = await fetch("https://eco-nomy-sis-stable.onrender.com/proposta");
        if (!resp.ok) throw new Error("Erro ao buscar propostas");
        const data: Proposta[] = await resp.json();

        // Filtra apenas as que NÃO são longo prazo
        const filtradas = data.filter((p) => p.is_longo_prazo === 0);
        setPropostas(filtradas);
      } catch (error) {
        console.error("Erro ao carregar propostas:", error);
      }
    };

    fetchPropostas();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trabalhos disponíveis</h1>

      <ul className="space-y-3">
        {propostas.map((p) => (
          <li
            key={p.id}
            className="cursor-pointer p-3 bg-gray-100 rounded hover:bg-gray-200"
            onClick={() => setSelecionada(p)}
          >
            <strong>{p.titulo}</strong>
          </li>
        ))}
      </ul>

      {selecionada && (
        <div className="mt-6 p-4 border rounded bg-white shadow">
          <h2 className="text-xl font-semibold mb-2">{selecionada.titulo}</h2>
          <p className="mb-2"><strong>Descrição:</strong> {selecionada.descricao}</p>
          <p className="mb-2"><strong>Valor:</strong> R$ {selecionada.valor.toFixed(2)}</p>
          <p className="mb-2"><strong>Status:</strong> {selecionada.status}</p>
          <p className="mb-2"><strong>Data de criação:</strong> {new Date(selecionada.data_criacao).toLocaleString()}</p>
          <button
            className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => setSelecionada(null)}
          >
            Fechar
          </button>
        </div>
      )}
    </main>
  );
}
