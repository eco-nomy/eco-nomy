import { useEffect } from "react";
import FaqLista from "../../components/FaqLista/FaqLista";
import { useForm } from "react-hook-form";
import type { FormData } from "../../types/formData";

export default function FormPergunta() {
  useEffect(() => {
    document.title = "Perguntas";
  }, []);

  const { register, handleSubmit, reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      nome: "",
      celular: "",
      email: "",
      assunto: "Aplicativo HC",
      pergunta: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data: FormData) => {
    console.log("Dados válidos:", data);
    alert("Pergunta enviada com sucesso!");
  };

  return (
    <main className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <section className="mb-10">
        <FaqLista />
      </section>

      <section className="max-w-full sm:max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-[#194737] mb-6">
          Envie-nos sua pergunta
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="idNome" className="block text-sm font-medium text-gray-700">
              Nome:
            </label>
            <input
              type="text"
              id="idNome"
              placeholder="Digite o seu nome"
              maxLength={100}
              {...register("nome", { required: "Nome é obrigatório." })}
              className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${errors.nome ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
          </div>

          <div>
            <label htmlFor="idCelular" className="block text-sm font-medium text-gray-700">
              Número do Celular:
            </label>
            <input
              type="tel"
              id="idCelular"
              placeholder="Digite o número do celular"
              maxLength={11}
              {...register("celular", {
                required: "Celular é obrigatório.",
                pattern: {
                  value: /^\d{10,11}$/,
                  message: "Celular deve ter 10 ou 11 dígitos.",
                },
              })}
              className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${errors.celular ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.celular && <p className="text-red-500 text-sm mt-1">{errors.celular.message}</p>}
          </div>

          <div>
            <label htmlFor="idEmail" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="text"
              id="idEmail"
              placeholder="Digite o seu email"
              maxLength={60}
              {...register("email", {
                required: "Email é obrigatório.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido.",
                },
              })}
              className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="idPergunta" className="block text-sm font-medium text-gray-700">
              Pergunta:
            </label>
            <input
              type="text"
              id="idPergunta"
              placeholder="Digite sua pergunta"
              maxLength={1000}
              {...register("pergunta", {
                required: "Pergunta é obrigatória.",
              })}
              className={`mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${errors.pergunta ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.pergunta && <p className="text-red-500 text-sm mt-1">{errors.pergunta.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              id="botaoEnviar"
              className="w-full bg-[#194737] text-white py-2 px-4 rounded hover:bg-[#76b99d] transition"
            >
              Enviar Pergunta
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}