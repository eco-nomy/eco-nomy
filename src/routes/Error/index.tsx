import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  useEffect(() => {
    document.title = "Erro";
  }, []);

  const navigate = useNavigate();

  const voltarParaHome = () => {
    navigate("/");
  };

  return (
    <main className="bg-white flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-6 max-w-md">
        Essa Página não existe!
      </p>
      <p className="text-xl mb-6 max-w-md">
        Volte para a página inicial:
      </p>
      <button
        onClick={voltarParaHome}
        className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Voltar para a página inicial
      </button>
    </main>
  );
}