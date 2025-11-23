import type { Empresa } from "../../types/empresa";

export default function CardEmpresa({ empresa }: { empresa: Empresa }) {

  return (
<main className="bg-[var(--c-bg2)] text-[var(--c-text2)] rounded py-2">
      <h2 className="text-lg font-bold">{empresa.nome}</h2>
      <p className="text-sm">CNPJ: {empresa.cnpj}</p>
</main>
  );
}
