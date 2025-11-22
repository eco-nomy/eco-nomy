import { useEffect } from 'react';
import img_sabelli from '../../img/victor-sabelli.jpg'
import img_kuba from '../../img/rafael-kubagawa-ramos.jpg'
import img_soteras from '../../img/vinicius-soteras-braga.jpg'
import github from '../../img/icone/github.png'
import linkedin from '../../img/icone/linkedin-og.png'

export default function Integrantes() {
  useEffect(() => {
    document.title = "Quem Somos";
  }, []);

  return (
    <main className="bg-white text-[#0b521f] ">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <section id="quem-somos" className="bg-white text-[#0b521f]  px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-12">Quem Somos</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <img src={img_sabelli} alt="Foto de Victor Sabelli Rocha Batista usando máscara segurando celular tirando foto no espelho - Jovem branco com cabelo e olhos castanhos" className="w-60 h-80 object-cover rounded-full shadow-md mb-4" />
              <h2 className="text-xl font-semibold">Victor Sabelli Rocha Batista</h2>
              <p>RM - 566224</p>
              <p>1TDSPO</p>
              <div className="mt-2 space-x-2 flex">
                <a href="https://www.linkedin.com/in/victorsabelli/" target="_blank">
                  <img src={linkedin} alt="Icone do Linkedin" className='hover:scale-110 transition w-20 h-auto ' />
                </a>
                <a href="https://github.com/Sabelli" target="_blank">
                  <img src={github} alt="icone do github" className='hover:scale-110 transition w-20 h-auto' />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={img_soteras} alt="Foto de Vinicius Soteras Braga sorrindo para a câmera - Jovem branco com cabelo e olhos castanhos" className="w-60 h-80 object-cover rounded-full shadow-md mb-4" />
              <h2 className="text-xl font-semibold">Vinicius Soteras Braga</h2>
              <p>RM - 566230</p>
              <p>1TDSPO</p>
              <div className="mt-2 space-x-2 flex">
                <a href="https://www.linkedin.com/in/vinicius-soteras-braga-60335516a/" target="_blank">
                  <img src={linkedin} alt="Icone do Linkedin" className='hover:scale-110 transition w-20 h-auto' />
                </a>
                <a href="https://github.com/BragaSoterasVinicius" target="_blank">
                  <img src={github} alt="icone do github" className='hover:scale-110 transition w-20 h-auto' />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={img_kuba} alt="Foto de Rafael Kubagawa Ramos olhando para a câmera - Jovem branco com cabelo preto e olhos castanhos" className="w-60 h-80 object-cover rounded-full shadow-md mb-4" />
              <h2 className="text-xl font-semibold">Rafael Kubagawa Ramos</h2>
              <p>RM - 565572</p>
              <p>1TDSPO</p>
              <div className="mt-2 space-x-2 flex">
                <a href="https://www.linkedin.com/in/rafael-kubagawa-ramos-243896330" target="_blank">
                  <img src={linkedin} alt="Icone do Linkedin" className='hover:scale-110 transition w-20 h-auto' />
                </a>
                <a href="https://github.com/Rafaelkubagawa" target="_blank">
                  <img src={github} alt="icone do github" className='hover:scale-110 transition w-20 h-auto' />
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}