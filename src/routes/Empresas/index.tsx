import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { Proposta } from "../../types/proposta";

export default function Empresas() {
  const navigate = useNavigate();
  const [propostas, setPropostas] = useState<Proposta[]>([]);
  const [editando, setEditando] = useState<Proposta | null>(null);

  const empresaId = Number(localStorage.getItem("userId"));

  const { register, handleSubmit, reset } = useForm<Proposta>();

  useEffect(() => {
    document.title = "Empresas";
    carregarPropostas();
  }, []);

  // Carregar propostas da empresa logada
  const carregarPropostas = async () => {
    try {
      const resp = await fetch("https://eco-nomy-sis-stable.onrender.com/proposta", {
        headers: { "x-api-key": "chave-primaria" },
      });
      const data: Proposta[] = await resp.json();
      setPropostas(data.filter((p) => p.empresa_id === empresaId));
    } catch (err) {
      console.error(err);
    }
  };

  // Criar ou atualizar proposta
  const onSubmit = async (data: any) => {
    try {
      const payload = {
        ...data,
        empresa_id: empresaId,
        longoPrazo: data.longoPrazo === true || data.longoPrazo === "true",
      };

      if (editando) {
        // Atualizar proposta existente
        await fetch(`https://eco-nomy-sis-stable.onrender.com/proposta/${editando.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "chave-primaria",
          },
          body: JSON.stringify(payload),
        });
        alert("Proposta atualizada com sucesso!");
      } else {
        // Criar nova proposta
        await fetch("https://eco-nomy-sis-stable.onrender.com/proposta", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "chave-primaria",
          },
          body: JSON.stringify(payload),
        });
        alert("Proposta criada com sucesso!");
      }

      reset();
      setEditando(null);
      carregarPropostas();
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar proposta!");
    }
  };

  // Excluir proposta
  const excluirProposta = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir esta proposta?")) return;
    try {
      await fetch(`https://eco-nomy-sis-stable.onrender.com/proposta/${id}`, {
        method: "DELETE",
        headers: {
          "x-api-key": "chave-primaria",
        },
      });
      alert("Proposta excluída com sucesso!");
      carregarPropostas();
    } catch (err) {
      console.error(err);
      alert("Erro ao excluir proposta!");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <main className="bg-white min-h-screen flex flex-col items-center p-6">
      <section className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-[#194737] mb-4">Área da Empresa</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("descricao", { required: true })}
            placeholder="Descrição da proposta"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="number"
            step="0.01"
            {...register("valor", { required: true })}
            placeholder="Valor"
            className="w-full border px-3 py-2 rounded"
          />
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("longoPrazo")} />
            É longo prazo?
          </label>

          <button
            type="submit"
            className="w-full bg-[#29966a] text-white py-2 rounded hover:bg-[#194737]"
          >
            {editando ? "Salvar Alterações" : "Criar Proposta"}
          </button>
        </form>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Minhas Propostas</h3>
          {propostas.length === 0 ? (
            <p>Nenhuma proposta cadastrada.</p>
          ) : (
            <ul className="space-y-3">
              {propostas.map((p) => (
                <li
                  key={p.id}
                  className="border rounded p-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{p.descricao}</p>
                    <p className="text-sm">R$ {p.valor.toFixed(2)}</p>
                    <p className="text-xs text-gray-500">
                      Criado em {new Date(p.dataCriacao).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditando(p);
                        reset(p);
                      }}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => excluirProposta(p.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
                    >
                      Excluir
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          className="cursor-pointer w-full bg-[#CC2004] text-white py-2 px-4 mt-6 rounded hover:bg-[#941600] transition"
          onClick={handleLogout}
        >
          Deslogar
        </button>
      </section>
    </main>
  );
}
