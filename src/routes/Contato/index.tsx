import { useEffect } from "react";
import facebook from '../../img/icone/facebook.png'
import instagram from '../../img/icone/instagram.png'
import x_twitter from '../../img/icone/x.png'
import tiktok from '../../img/icone/tiktok.png'
import telegram from '../../img/icone/telegram.png'
import linkedin from '../../img/icone/linkedin.png'
import email from '../../img/icone/mail.png'
import tel from '../../img/icone/telefone.png'
import whats from '../../img/icone/whats.png'

export default function Contato() {
  useEffect(() => {
    document.title = "Contato";
  }, []);

  return (
    <main className="bg-white text-[#0b521f]">
      <section id="contato" className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Entre em Contato</h1>
        <p className="text-center text-lg max-w-2xl mx-auto mb-12">
          Ficou com alguma dúvida, sugestão ou precisa de suporte?  
          Estamos prontos para ajudar você em todos os canais abaixo.
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Redes Sociais</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
            <p className="flex flex-col items-center hover:scale-110 transition cursor-default">
              <img src={facebook} alt="Ícone do Facebook" className="w-14 h-14" />
              <span className="mt-2 text-lg">Facebook</span>
            </p>
            <p className="flex flex-col items-center hover:scale-110 transition">
              <img src={instagram} alt="Ícone do Instagram" className="w-14 h-14" />
              <span className="mt-2 text-lg">Instagram</span>
            </p>
            <p className="flex flex-col items-center hover:scale-110 transition">
              <img src={linkedin} alt="Ícone do LinkedIn" className="w-14 h-14" />
              <span className="mt-2 text-lg">LinkedIn</span>
            </p>
            <p className="flex flex-col items-center hover:scale-110 transitio">
              <img src={telegram} alt="Ícone do Telegram" className="w-14 h-14" />
              <span className="mt-2 text-lg">Telegram</span>
            </p>
            <p className="flex flex-col items-center hover:scale-110 transition">
              <img src={tiktok} alt="Ícone do TikTok" className="w-14 h-14" />
              <span className="mt-2 text-lg">TikTok</span>
            </p>
            <p className="flex flex-col items-center hover:scale-110 transition">
              <img src={x_twitter} alt="Ícone do X / Twitter" className="w-14 h-14" />
              <span className="mt-2 text-lg">X</span>
            </p>
          </div>
        </div>

        <div className="rounded-xl shadow-md py-10 px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Fale Conosco</h2>
          <ul className="space-y-6 text-center">
            <li>
              <p className="inline-flex items-center gap-3 justify-center text-[#0b521f] px-6 py-3 rounded-lg transition cursor-default">
                <img src={email} alt="Ícone de E-mail" className="w-6 h-6" />
                saudeamiga@email.com
              </p>
            </li>
            <li>
              <p className="inline-flex items-center gap-3 justify-center text-[#0b521f] px-6 py-3 rounded-lg transition cursor-default">
                <img src={tel} alt="Ícone de Telefone" className="w-6 h-6" />
                (11) 4444-4444
              </p>
            </li>
            <li>
              <p className="inline-flex items-center gap-3 justify-center text-[#0b521f] px-6 py-3 rounded-lg transition cursor-default">
                <img src={whats} alt="Ícone de WhatsApp" className="w-6 h-6" />
                (11) 99999-9999
              </p>
            </li>
          </ul>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Estamos aguardando seu contato!</h3>
          <p className="mb-6">Fale conosco pelo canal que for mais confortável para você.</p>
        </div>
      </section>
    </main>
  )
}