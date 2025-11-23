import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Proposta } from "../../types/proposta";
import type { Usuario } from "../../types/loginFormData";

export default function PropostaDetalhes() {
  const { id } = useParams<{ id: string }>();
  const [proposta, setProposta] = useState<Proposta | null>(null);
  const [loading, setLoading] = useState(true);
  const [usuarioLogado, setUsuarioLogado] = useState<Usuario | null>(null);

  useEffect(() => {
    const usuarioStr = localStorage.getItem("usuarioLogado");
    if (usuarioStr) {
      setUsuarioLogado(JSON.parse(usuarioStr));
    }

    async function fetchProposta() {
      try {
        const response = await fetch(
          `https://eco-nomy-sis-stable-524v.onrender.com/proposta/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "chave-primaria",
            },
          }
        );

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

  const handleInscrever = async () => {
    if (!proposta || !usuarioLogado || !("empregadoId" in usuarioLogado)) return;

    const propostaAtualizada: Proposta = {
      ...proposta,
      empregadoId: usuarioLogado.empregadoId, // pega empregadoId do usuário logado
      status: "Ocupado", // altera status
    };

    try {
      const response = await fetch(
        `https://eco-nomy-sis-stable-524v.onrender.com/proposta/${id}`,
        {
          method: "PUT", // ou POST se sua API exigir
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "chave-primaria",
          },
          body: JSON.stringify(propostaAtualizada),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar proposta");
      }

      const data: Proposta = await response.json();
      setProposta(data); // atualiza estado local
      alert("Inscrição realizada com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao se inscrever na proposta.");
    }
  };

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

      {usuarioLogado && "empregadoId" in usuarioLogado && (
        <button
          onClick={handleInscrever}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Inscreva-se
        </button>
      )}
    </main>
  );
}
