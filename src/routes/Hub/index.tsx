import { useEffect } from 'react';
import ListaEmpresas from '../../components/ListaEmpresas/ListaEmpresas';

export default function Hub() {
  useEffect(() => {
    document.title = "Hub de Colaboração";
  }, []);

  return (
    <main className="w-full max-w-screen px-4 py-6 text-[#194737] text-center overflow-hidden">
      <section className="mb-10">
        <ListaEmpresas />
      </section>
    </main>
  )
}