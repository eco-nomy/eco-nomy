import { useEffect } from "react";
import ListaPropostas from "../../components/ListaPropostas/ListaPropostas";

export default function Contratacao() {
  useEffect(() => {
    document.title = "Contratação";
  }, []);

  return (
    <section className="w-full max-w-screen px-4 py-6 text-[#194737] text-center overflow-hidden">
      <ListaPropostas />
    </section>
  );
}
