import { useEffect } from 'react';
import sustentabilidade from '../../img/sustentabilidade.jpg'

export default function Home() {
  useEffect(() => {
    document.title = "Eco-nomy | Home";
  }, []);
  
  return (
    <main className="bg-[var(--c-bg)] text-[var(--c-text)] min-h-screen flex flex-col items-center justify-center">

      <section className="bg-[var(--c-bg)] text-[var(--c-text)] text-center p-8 max-w-3xl">
        <h1 className="bg-[var(--c-bg)] text-[var(--c-text)] text-4xl font-bold mb-4 text-[#0b521f]">
          Eco-nomy — A Plataforma da Economia Verde
        </h1>

        <p className="bg-[var(--c-bg)] text-[var(--c-text)] text-lg max-w-2xl mx-auto text-[#414141]">
          A Eco-nomy é a GreenTech pioneira que está inovando o futuro do trabalho sustentável. Somos um Marketplace Inteligente que utiliza Inteligência Artificial para conectar empresas, profissionais e cidadãos em uma rede baseada em justiça econômica, segurança transacional e transparência.
        </p>
      </section>

      <section className="bg-[var(--c-bg)] text-[var(--c-text)] flex flex-col md:flex-row items-center gap-8 p-8 max-w-5xl">
        <div className="flex-1">
          <h2 className="bg-[var(--c-bg)] text-[var(--c-text)] text-2xl font-bold mb-4 text-[#0b521f]">
            Sobre o Negócio
          </h2>
          <p className="bg-[var(--c-bg)] text-[var(--c-text)] text-lg">
            Enfrentamos crises ambientais severas e uma demanda reprimida por
            serviços ligados à sustentabilidade. A Eco-nomy atua como catalisadora,
            combatendo a precarização da Gig Economy e impulsionando a Economia
            Circular. Nosso marketplace conecta trabalhadores verdes, empresas com
            responsabilidades ESG e cidadãos que precisam de serviços ambientais.
          </p>
        </div>

        <div className="flex-1">
          <img src={sustentabilidade} alt="Paisagem com estruturas industriais feitas de vegetação verde emitindo vapor branco, cercadas por folhagens densas, com uma cidade desfocada ao fundo, representando o conceito de sustentabilidade e indústria ecológica." className="rounded"/>
        </div>
      </section>

      <section className="bg-[var(--c-bg3)] text-[var(--c-text)] w-full text-white text-center py-8">
        <h2 className="text-2xl font-bold mb-2">
          Tecnologia a serviço da sustentabilidade
        </h2>
        <p className="text-lg">Justiça, transparência e impacto ambiental real.</p>
      </section>

      <section className="bg-[var(--c-bg)] text-[var(--c-text)] w-full text-center py-10 px-6">
        <h2 className="text-[var(--c-text)] text-2xl font-bold mb-4 ">
          Por que a Eco-nomy é diferente?
        </h2>

        <p className="bg-[var(--c-bg)] text-[var(--c-text)] max-w-3xl mx-auto">
          Não competimos por volume, e sim por valor. Somos a única plataforma que
          combina sustentabilidade, IA e justiça transacional:
        </p>

        <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <li className="p-6 rounded-lg shadow bg-[var(--c-bg3)] text-[var(--c-text2)]">
            Plataforma verde com impacto ambiental real
          </li>

          <li className="p-6 rounded-lg shadow bg-[var(--c-bg3)] text-[var(--c-text2)]">
            IA para justiça e prevenção de fraudes
          </li>

          <li className="p-6 rounded-lg shadow bg-[var(--c-bg3)] text-[var(--c-text2)]">
            Pagamento protegido com Escrow Digital
          </li>
        </ul>
      </section>

    </main>
  );
}
