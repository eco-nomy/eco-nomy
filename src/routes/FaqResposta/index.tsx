import { useParams, useNavigate } from "react-router-dom";
import { ListaFaq } from "../../data/listaFaq";

export default function FaqResposta() {
  const { id:routeId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const faq = ListaFaq.find((f) => f.id === Number(routeId));

if (!faq) {
  return (
    <section className="bg-[#ffffff] p-6 max-w-xl mx-auto mt-16 rounded-lg shadow-md text-center text-[#194737]">
      <h2 className="text-2xl font-bold mb-4 text-[#194737]">Pergunta não encontrada</h2>
      <p className="mb-6">
        A pergunta que você está procurando não foi localizada. Talvez ela tenha sido removida ou esteja em outro lugar.
      </p>
      <button
        onClick={() => navigate("/perguntas-frequentes")}
        className="inline-block bg-[#76b99d] text-[#194737] font-semibold px-4 py-2 rounded hover:bg-white transition">
        Voltar para perguntas
      </button>
    </section>
  );
}


  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-[#194737] mb-4">{faq.titulo}</h2>

      <p className="text-sm text-gray-600 mb-2">
        <strong className="font-medium text-gray-700">Autor(a) da Pergunta:</strong>{" "}
        {faq.autorDaPergunta}
      </p>

      <p
        className="text-gray-700 mb-3 leading-relaxed resp-link"
        dangerouslySetInnerHTML={{ __html: faq.corpo || "" }}/>

      <div className="text-sm text-gray-500 space-y-1 mb-6">
        <p>
          <strong className="text-gray-600">Autor(a) da Resposta:</strong>{" "}
          {faq.autorDaResposta}
        </p>
        <p>
          <strong className="text-gray-600">Data da resposta:</strong>{" "}
          {faq.data_resposta.toLocaleDateString()}
        </p>
      </div>

      <button
        onClick={() => navigate("/perguntas-frequentes")}
        className="px-4 py-2 bg-[#194737] text-white rounded hover:bg-[#76b99d] transition">
        Voltar para perguntas
      </button>
    </div>
  );
}
