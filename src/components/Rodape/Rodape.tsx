import AcessoRapido from '../AcessoRapido/AcessoRapido'
import facebook from '../../img/icone/facebook.png'
import instagram from '../../img/icone/instagram.png'
import x_twitter from '../../img/icone/x.png'
import tiktok from '../../img/icone/tiktok.png'
import telegram from '../../img/icone/telegram.png'
import linkedin from '../../img/icone/linkedin.png'

export default function Rodape() {
  return (
    <footer className="bg-[#0b521f] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <div>
            <h1 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">
              Acesso Rápido
            </h1>
            <AcessoRapido />
          </div>

          <div>
            <h1 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">
              Redes Sociais
            </h1>
            <div className="grid grid-cols-3 gap-4 place-items-center">
              <img src={facebook} alt="Ícone do Facebook" className="w-16 h-16 hover:scale-110 transition" />
              <img src={instagram} alt="Ícone do Instagram" className="w-16 h-16 hover:scale-110 transition" />
              <img src={x_twitter} alt="Ícone do X/Twitter" className="w-16 h-16 hover:scale-110 transition" />
              <img src={tiktok} alt="Ícone do Tik Tok" className="w-16 h-16 hover:scale-110 transition" />
              <img src={telegram} alt="Ícone do Telegram" className="w-16 h-16 hover:scale-110 transition" />
              <img src={linkedin} alt="Ícone do LinkedIn" className="w-16 h-16 hover:scale-110 transition" />
            </div>
          </div>

          <div>
            <h1 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">
              Atendimento
            </h1>
            <p className="mb-2">Fale conosco por e-mail ou telefone!</p>
            <ul className="space-y-2">
              <li>
                <p className="hover:text-[#2e7c10] transition">economy@email.com</p>
              </li>
              <li>
                <p className="hover:text-[#2e7c10] transition">11 4444-4444</p>
              </li>
              <li>
                <p className="hover:text-[#2e7c10] transition">11 9 9999-9999</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white pt-4 text-center">
          <p className="text-sm text-gray-300">
            &copy; Todos os direitos reservados - Eco-nomy - 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
