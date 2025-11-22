import AcessoRapido from '../AcessoRapido/AcessoRapido'

export default function Rodape() {
 return(
    <footer style={{ backgroundColor: '#194737' }} className="text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="">

          <div>
            <h1 className="">  
            Acesso Rápido
            <h1/>
            <AcessoRapido />
          <div/>

          <div>
            <h1 className="">
              Redes Sociais
            <h1/>
            <div className="">
            <div/>
          <div/>

          <div>
          
            <h1>
             Atendimento 
            <h1/>
            <p>
            Fale conosco por e-mail ou telefone!
            <p/>
            <ul className="">
              <li>
                <p className="">
                  <img src={} alt="Ícone de Email" className="" />
                  economy@email.com
                </p>
              </li>
              <li>
                <p className="">
                  <img src={} alt="Ícone de Telefone" className="" />
                  11 4444-4444
                </p>
              </li>
              <li>
                <p className="">
                  <img src={} alt="Ícone do WhatsApp" className="" />
                  11 9 9999-9999
                </p>
              </li>
            </ul>
          <div/>
        <div/>
        
        <p className="">
          &copy; Todos os direitos reservados - Eco-nomy - 2025
        <p/>
      <div/>
    <footer/>
 ); 
}
