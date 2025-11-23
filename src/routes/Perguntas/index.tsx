import { useEffect } from "react";
import FaqLista from "../../components/FaqLista/FaqLista";

export default function FormPergunta() {
  useEffect(() => {
    document.title = "Perguntas";
  }, []);

  return (
    <main className="py-10 px-4 sm:px-6 lg:px-8">
      <section className="mb-10">
        <FaqLista />
      </section>
    </main>
  );
}