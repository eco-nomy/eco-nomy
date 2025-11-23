import { useEffect } from "react";
import ListaTrabalhos from "../../components/ListaTrabalhos/ListaTrabalhos";

export default function Trabalhos() {
  useEffect(() => {
    document.title = "Trabalhos";
  }, []);

  return (
    <main className="w-full max-w-screen px-4 py-6 text-[#194737] text-center overflow-hidden">
      <section className="mb-10">
        <ListaTrabalhos />
      </section>
    </main>
  );
}
