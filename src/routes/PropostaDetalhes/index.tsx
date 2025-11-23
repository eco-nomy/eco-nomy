import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Proposta } from "../../types/proposta";

export default function PropostaDetalhes() {
  const { id } = useParams<{ id: string }>();
  const [proposta, setProposta] = useState<Proposta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProposta() {
      try {
        const response = await fetch(`https://eco-nomy-sis-stable-524v.onrender.com/proposta/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "chave-primaria",
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar proposta");
        }

        const data: Proposta = await response.json();
        setProposta(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProposta();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!proposta) {
    return <p>Proposta não encontrada.</p>;
  }

  return (
    <main className="p-6 text-[#194737]">
      <h1 className="text-2xl font-bold mb-4">{proposta.descricao}</h1>
      <p className="mb-2"><strong>Valor:</strong> R$ {proposta.valor.toFixed(2)}</p>
      <p className="mb-2">
        <strong>Status:</strong>{" "}
        {proposta.status && proposta.status.trim() !== "" ? proposta.status : "Vacante"}
      </p>
      <p className="mb-2"><strong>Data de criação:</strong> {new Date(proposta.dataCriacao).toLocaleString()}</p>
    </main>
  );
}