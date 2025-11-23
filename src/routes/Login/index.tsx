import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { LoginFormData, Usuario } from "../../types/loginFormData";

export default function Login() {
  const navigate = useNavigate();
  const [exibeLoginNaoEncontrado, setExibeLoginNaoEncontrado] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  useEffect(() => {
    document.title = "Login de funcionários";

    const token = localStorage.getItem("authToken");
    const tipo = localStorage.getItem("tipoLogin");

    if (token && tipo) {
      if (tipo === "email") {
        navigate("/trabalhadores");
      } else if (tipo === "cnpj") {
        navigate("/empresas");
      }
    }
  }, [navigate]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch,
  } = useForm<LoginFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      login: "",
      senha: "",
      tipo: "email",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const endpoint =
        data.tipo === "email"
          ? "https://eco-nomy-sis-stable.onrender.com/empregado/login"
          : "https://eco-nomy-sis-stable.onrender.com/empresa/login";

      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "chave-primaria",
        },
        body: JSON.stringify({
          login: data.login,
          senha: data.senha,
        }),
      });

      if (!resp.ok) throw new Error("Erro ao autenticar usuário.");

      const usuario: Usuario = await resp.json();

      if (usuario.token) {
        localStorage.setItem("authToken", usuario.token);
        localStorage.setItem("userId", usuario.userId.toString());
        localStorage.setItem("tipoLogin", data.tipo);

        setExibeLoginNaoEncontrado(false);

        if (data.tipo === "email") {
          navigate("/trabalhadores");
        } else {
          navigate("/empresas");
        }
      } else {
        setExibeLoginNaoEncontrado(true);
      }
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro no processo de login!");
    }
  };

  return (
    <main className="bg-[var(--c-bg)] text-[var(--c-text)] min-h-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[var(--c-bg)] p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-[var(--c-text)]">
          Escolha forma de login
        </h1>

        <div className="justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={() => reset({ login: "", senha: "", tipo: "email" })}
            className="cursor-pointer bg-[var(--c-bg1)] text-[var(--c-text2)] px-4 py-2 rounded hover:bg-[var(--c-bg2)] w-full"
          >
            Login Trabalhador
          </button>
          <button
            type="button"
            onClick={() => reset({ login: "", senha: "", tipo: "cnpj" })}
            className="cursor-pointer bg-[var(--c-bg1)] text-[var(--c-text2)] px-4 py-2 rounded hover:bg-[var(--c-bg2)] w-full mt-4"
          >
            Login Empresa
          </button>
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => navigate("/cadastro")}
              className="cursor-pointer w-full text-[var(--c-text)] py-2 rounded-md hover:underline transition-colors"
            >
              Não tem conta? Cadastre-se aqui
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="login"
              className="block text-sm font-medium mb-1 text-[#194737]"
            >
              {watch("tipo") === "email" ? "Email" : "CNPJ"}
            </label>
            <input
              type="text"
              id="login"
              placeholder={
                watch("tipo") === "email"
                  ? "Digite seu email"
                  : "Digite seu CNPJ (somente números)"
              }
              maxLength={watch("tipo") === "email" ? 60 : 14}
              {...register("login", {
                required: `${watch("tipo") === "email" ? "Email" : "CNPJ"} é obrigatório.`,
                validate: (value) => {
                  if (watch("tipo") === "email") {
                    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return regexEmail.test(value) || "Email inválido.";
                  } else {
                    const regexCNPJ = /^\d{14}$/;
                    return regexCNPJ.test(value) || "CNPJ inválido (14 dígitos).";
                  }
                },
              })}
              onInput={(e) => {
                if (watch("tipo") === "cnpj") {
                  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                }
              }}
              className={`w-full px-4 py-2 rounded-md bg-white border ${
                errors.login ? "border-red-500" : "border-gray-300"
              } text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]`}
            />
            {errors.login && (
              <p className="text-red-500 text-sm mt-1">{errors.login.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-sm font-medium mb-1 text-[#194737]"
            >
              Senha
            </label>
            <div className="relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                id="senha"
                placeholder="Digite sua senha"
                maxLength={100}
                {...register("senha", {
                  required: "Senha é obrigatória.",
                })}
                className={`w-full px-4 py-2 rounded-md bg-white border ${
                  errors.senha ? "border-red-500" : "border-gray-300"
                } text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]`}
              />
              <button
                type="button"
                onClick={() => setMostrarSenha((prev) => !prev)}
                className="cursor-pointer absolute right-3 top-2 p-1"
                aria-label="Mostrar ou ocultar senha"
              >
                👁
              </button>
            </div>
            {errors.senha && (
              <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>
            )}
          </div>

          <button
            type="submit"
            id="botaoLogin"
            className="cursor-pointer w-full bg-[var(--c-bg1)] text-[var(--c-text2)] py-2 rounded-md hover:bg-[var(--c-bg2)] transition-colors"
          >
            Fazer Login
          </button>

          {exibeLoginNaoEncontrado && (
            <p className="text-red-500 text-sm mt-4 text-center">
              {watch("tipo") === "email"
                ? "Email ou senha incorretos!"
                : "CNPJ ou senha incorretos!"}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
