import { useEffect } from 'react';
import sustentabilidade from '../../img/sustentabilidade.jpg';

export default function Sobre() {
  useEffect(() => {
    document.title = "Eco-nomy | Sobre";
  }, []);

  return (
    <main className="bg-[var(--c-bg)] text-[var(--c-text)] min-h-screen flex flex-col items-center justify-center">

      <section className="text-center p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-[var(--c-text)]">
          Sobre a Eco-nomy
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-[var(--c-text)]">
          A Eco-nomy nasceu com o propósito de acelerar a transição para uma
          economia verde no Brasil. Somos uma GreenTech que une tecnologia,
          sustentabilidade e justiça social para criar um futuro mais justo e
          ambientalmente responsável.
        </p>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-8 p-8 max-w-5xl">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-[var(--c-text)]">Nossa Missão</h2>
          <p className="text-lg">
            Promover conexões sustentáveis entre empresas, profissionais e cidadãos,
            garantindo que cada transação gere impacto positivo para o meio ambiente
            e para a sociedade.
          </p>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-[var(--c-text)]">Nossa Visão</h2>
          <p className="text-lg">
            Ser referência nacional em soluções digitais para a economia verde,
            liderando a transformação rumo a um Brasil mais sustentável e justo.
          </p>
        </div>
      </section>

      <section className="bg-[var(--c-bg3)] w-full text-white text-center py-10 px-6">
        <h2 className="text-2xl font-bold mb-6">Nossos Valores</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <li className="p-6 rounded-lg shadow bg-[var(--c-bg)] text-[var(--c-text)]">
            Sustentabilidade em cada decisão
          </li>
          <li className="p-6 rounded-lg shadow bg-[var(--c-bg)] text-[var(--c-text)]">
            Justiça e transparência nas relações
          </li>
          <li className="p-6 rounded-lg shadow bg-[var(--c-bg)] text-[var(--c-text)]">
          Inovação tecnológica para o planeta
          </li>
          <li className="p-6 rounded-lg shadow bg-[var(--c-bg)] text-[var(--c-text)]">
            Impacto social e ambiental positivo
          </li>
          <li className="p-6 rounded-lg shadow bg-[var(--c-bg)] text-[var(--c-text)]">
            Crescimento sustentável e inclusivo
          </li>
          <li className="p-6 rounded-lg shadow bg-[var(--c-bg)] text-[var(--c-text)]">
            Segurança e proteção nas transações
          </li>
        </ul>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-8 p-8 max-w-5xl">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-[var(--c-text)]">Nosso Impacto</h2>
          <p className="text-lg">
            Já conectamos centenas de profissionais verdes com empresas que
            buscam responsabilidade socioambiental. Cada projeto realizado
            contribui para reduzir emissões e fortalecer a economia circular.
          </p>
        </div>
        <div className="flex-1">
          <img src={sustentabilidade} alt="Impacto ambiental" className="rounded shadow-md"/>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-8 p-8 max-w-5xl">
        <div className="flex-1">
          <img src={sustentabilidade} alt="Inovação tecnológica" className="rounded shadow-md"/>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-[var(--c-text)]">Inovação</h2>
          <p className="text-lg">
            Utilizamos inteligência artificial e blockchain para garantir
            transparência, segurança e eficiência em cada transação. Nossa
            tecnologia está sempre evoluindo para atender às demandas do futuro.
          </p>
        </div>
      </section>

    </main>
  );
}
