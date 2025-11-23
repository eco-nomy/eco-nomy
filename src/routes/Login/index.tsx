import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";
import type { LoginFormData, Usuario, TipoLogin } from "../../types/loginFormData";

function getRedirectPath(): string | null {
  const tipo = localStorage.getItem("tipoLogin");
  const usuario = localStorage.getItem("usuarioLogado");

  if (tipo && usuario) {
    if (tipo === "email") {
      return "/trabalhadores";
    } else if (tipo === "cnpj") {
      return "/empresas";
    }
  }
  return null;
}

export default function Login() {
  const navigate = useNavigate();
  const [exibeLoginNaoEncontrado, setExibeLoginNaoEncontrado] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const redirectPath = getRedirectPath();
  if (redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  useEffect(() => {
    document.title = "Login de funcionários";

    const tipo = localStorage.getItem("tipoLogin");
    const usuario = localStorage.getItem("usuarioLogado");

    if (tipo && usuario) {
      if (tipo === "email") {
        navigate("/trabalhadores", { replace: true });
      } else if (tipo === "cnpj") {
        navigate("/empresas", { replace: true });
      }
    }
  }, [navigate]);

  const { handleSubmit, register, formState: { errors } } =
    useForm<LoginFormData>({
      mode: "onChange",
      defaultValues: { login: "", senha: "" },
    });

  const detectarTipoLogin = (valor: string): TipoLogin => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const soNumeros = valor.replace(/\D/g, "");

    if (regexEmail.test(valor)) return "email";
    if (soNumeros.length === 14) return "cnpj";
    return "email";
  };

  const onSubmit = async (data: LoginFormData) => {
    try {
      const tipoDetectado = detectarTipoLogin(data.login);

      const endpoint =
        tipoDetectado === "email"
          ? "https://eco-nomy-sis-stable-524v.onrender.com/empregado/login"
          : "https://eco-nomy-sis-stable-524v.onrender.com/empresa/login";

      const body =
        tipoDetectado === "email"
          ? JSON.stringify({ email: data.login, senha: data.senha })
          : JSON.stringify({ cnpj: data.login.replace(/\D/g, ""), senha: data.senha });

      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "chave-primaria"
        },
        body,
      });

      if (!resp.ok) {
        setExibeLoginNaoEncontrado(true);
        return;
      }

      const usuario: Usuario = await resp.json();

      if ("empregadoId" in usuario) {
        localStorage.setItem("empregadoId", usuario.empregadoId.toString());
      } else if ("id" in usuario) {
        localStorage.setItem("empresaId", usuario.id.toString());
      }

      localStorage.setItem("tipoLogin", tipoDetectado);
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

      setExibeLoginNaoEncontrado(false);

      navigate(tipoDetectado === "email" ? "/trabalhadores" : "/empresas", { replace: true });
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro no processo de login!");
    }
  };

  return (
    <main className="bg-[var(--c-bg)] text-[var(--c-text)] min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[var(--c-bg6)] p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-[var(--c-text)]">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="login" className="block text-sm font-medium mb-1 text-[var(--c-text)]">
              Email ou CNPJ
            </label>
            <input
              type="text"
              id="login"
              placeholder="Digite seu email ou CNPJ"
              {...register("login", { required: "Login é obrigatório." })}
              className={`w-full px-4 py-2 rounded-md bg-white border ${errors.login ? "border-red-500" : "border-gray-300"
                } text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]`}
            />
            {errors.login && (
              <p className="text-red-500 text-sm mt-1">{errors.login.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium mb-1 text-[var(--c-text)]">
              Senha
            </label>
            <div className="relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                id="senha"
                placeholder="Digite sua senha"
                {...register("senha", { required: "Senha é obrigatória." })}
                className={`w-full px-4 py-2 rounded-md bg-white border ${errors.senha ? "border-red-500" : "border-gray-300"
                  } text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]`}
              />
              <button
                type="button"
                onClick={() => setMostrarSenha((prev) => !prev)}
                className="cursor-pointer absolute right-3 top-2 p-1"
                aria-label="Mostrar ou ocultar senha"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#194737"
                  className="w-5 h-5"
                >
                  {mostrarSenha ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18M9.88 9.88a3.75 3.75 0 004.24 4.24M6.75 6.75C4.5 8.25 2.25 12 2.25 12s3.75 6.75 9.75 6.75c1.5 0 2.91-.33 4.2-.92M17.25 17.25C19.5 15.75 21.75 12 21.75 12s-3.75-6.75-9.75-6.75c-.84 0-1.65.11-2.42.31"
                    />
                  )}
                </svg>
              </button>
            </div>
            {errors.senha && (
              <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-[var(--c-bg1)] text-[var(--c-text2)] py-2 rounded-md hover:bg-[var(--c-bg2)] transition-colors"
          >
            Fazer Login
          </button>

          <button
            type="button"
            onClick={() => navigate("/cadastro")}
            className="cursor-pointer w-full mt-3 text-[var(--c-text)] py-2 rounded-md hover:underline transition-colors"
          >
            Não tem Cadastro?
          </button>

          {exibeLoginNaoEncontrado && (
            <p className="text-red-500 text-sm mt-4 text-center">
              Login ou senha incorretos!
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
