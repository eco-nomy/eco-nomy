import AcessoRapido from '../AcessoRapido/AcessoRapido'

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
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#2e7c10] transition">Facebook</a>
              <a href="#" className="hover:text-[#2e7c10] transition">Instagram</a>
              <a href="#" className="hover:text-[#2e7c10] transition">LinkedIn</a>
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
