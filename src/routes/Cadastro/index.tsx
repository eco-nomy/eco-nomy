import { useForm } from "react-hook-form";
import { useState } from "react";
import type { CadastroEmpresa, CadastroEmpregado } from "../../types/cadastro";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const navigate = useNavigate();
    const [tipoSelecionado, setTipoSelecionado] = useState<"empresa" | "empregado">("empresa");
    const [erroCadastro, setErroCadastro] = useState<string | null>(null);

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const formEmpresa = useForm<CadastroEmpresa>();
    const formEmpregado = useForm<Omit<CadastroEmpregado, "saldo" | "dataCriacao">>();



    const aoEnviarEmpresa = async (data: CadastroEmpresa) => {
        try {
            const resposta = await fetch("https://eco-nomy-sis-stable-524v.onrender.com/empresa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "chave-primaria",
                },
                body: JSON.stringify(data),
            });

            if (!resposta.ok) {
                setErroCadastro("Erro ao cadastrar empresa.");
                return;
            }

            alert("Empresa cadastrada com sucesso!");
            formEmpresa.reset();
            navigate("/login");
        } catch {
            setErroCadastro("Erro de conexão com o servidor.");
        }
    };

    const aoEnviarEmpregado = async (data: Omit<CadastroEmpregado, "saldo" | "dataCriacao">) => {
        try {
            const payload: CadastroEmpregado = {
                ...data,
                saldo: 0,
                dataCriacao: new Date().toISOString(),
            };

            const resposta = await fetch("https://eco-nomy-sis-stable-524v.onrender.com/empregado", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "chave-primaria",
                },
                body: JSON.stringify(payload),
            });

            if (!resposta.ok) {
                setErroCadastro("Erro ao cadastrar empregado.");
                return;
            }

            alert("Empregado cadastrado com sucesso!");
            formEmpregado.reset();
            navigate("/login");
        } catch {
            setErroCadastro("Erro de conexão com o servidor.");
        }
    };
    return (
        <main className="bg-[var(--c-bg)] text-[var(--c-text)] min-h-screen flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md bg-[var(--c-bg6)] p-6 rounded-lg shadow-md">

                <h1 className="text-2xl font-bold mb-6 text-center text-[var(--c-text)]">
                    Cadastro
                </h1>

                <div className="flex justify-center gap-4 mb-6">
                    <button
                        type="button"
                        onClick={() => setTipoSelecionado("empresa")}
                        className={`px-4 py-2 rounded-md ${tipoSelecionado === "empresa"
                            ? "bg-[var(--c-bg1)] text-[var(--c-text2)]"
                            : "bg-gray-200 text-gray-700"
                            }`}
                    >
                        Empresa
                    </button>

                    <button
                        type="button"
                        onClick={() => setTipoSelecionado("empregado")}
                        className={`px-4 py-2 rounded-md ${tipoSelecionado === "empregado"
                            ? "bg-[var(--c-bg1)] text-[var(--c-text2)]"
                            : "bg-gray-200 text-gray-700"
                            }`}
                    >
                        Empregado
                    </button>
                </div>

                {tipoSelecionado === "empresa" && (
                    <form
                        onSubmit={formEmpresa.handleSubmit(aoEnviarEmpresa)}
                        className="space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Nome da empresa
                            </label>
                            <input
                                type="text"
                                {...formEmpresa.register("nome", {
                                    required: "Nome é obrigatório.",
                                })}
                                onChange={(e) => {
                                    formEmpresa.setValue("nome", e.target.value);
                                    formEmpresa.trigger("nome");
                                }}
                                className="w-full px-4 py-2 rounded-md border"
                            />
                            {formEmpresa.formState.errors.nome && (
                                <p className="text-red-500 text-sm">
                                    {formEmpresa.formState.errors.nome.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">CNPJ</label>
                            <input
                                type="text"
                                {...formEmpresa.register("cnpj", {
                                    required: "CNPJ é obrigatório.",
                                    validate: (value) => {
                                        const onlyNumbers = value.replace(/\D/g, "");
                                        return (
                                            onlyNumbers.length === 14 ||
                                            "CNPJ deve ter 14 números."
                                        );
                                    },
                                })}
                                onChange={(e) => {
                                    let onlyNumbers = e.target.value.replace(/\D/g, "");
                                    if (onlyNumbers.length > 14) {
                                        onlyNumbers = onlyNumbers.slice(0, 14);
                                    }
                                    formEmpresa.setValue("cnpj", onlyNumbers);
                                    formEmpresa.trigger("cnpj");
                                }}
                                className="w-full px-4 py-2 rounded-md border"
                            />
                            {formEmpresa.formState.errors.cnpj && (
                                <p className="text-red-500 text-sm">
                                    {formEmpresa.formState.errors.cnpj.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Senha</label>

                            <div className="relative">
                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    {...formEmpresa.register("senha", {
                                        required: "Senha é obrigatória.",
                                        validate: (value) =>
                                            value.length >= 6 ||
                                            "Senha deve ter pelo menos 6 caracteres.",
                                    })}
                                    onChange={(e) => {
                                        formEmpresa.setValue("senha", e.target.value);
                                        formEmpresa.trigger("senha");
                                    }}
                                    className="w-full px-4 py-2 rounded-md border pr-12"
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

                            {formEmpresa.formState.errors.senha && (
                                <p className="text-red-500 text-sm">
                                    {formEmpresa.formState.errors.senha.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[var(--c-bg1)] text-[var(--c-text2)] py-2 rounded-md"
                        >
                            Cadastrar Empresa
                        </button>
                    </form>
                )}

                {tipoSelecionado === "empregado" && (
                    <form
                        onSubmit={formEmpregado.handleSubmit(aoEnviarEmpregado)}
                        className="space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Nome completo
                            </label>
                            <input
                                type="text"
                                {...formEmpregado.register("nome", {
                                    required: "Nome é obrigatório.",
                                })}
                                onChange={(e) => {
                                    formEmpregado.setValue("nome", e.target.value);
                                    formEmpregado.trigger("nome");
                                }}
                                className="w-full px-4 py-2 rounded-md border"
                            />
                            {formEmpregado.formState.errors.nome && (
                                <p className="text-red-500 text-sm">
                                    {formEmpregado.formState.errors.nome.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">CPF</label>
                            <input
                                type="text"
                                {...formEmpregado.register("cpf", {
                                    required: "CPF é obrigatório.",
                                    validate: (value) => {
                                        const onlyNumbers = value.replace(/\D/g, "");
                                        return (
                                            onlyNumbers.length === 11 ||
                                            "CPF deve ter 11 números."
                                        );
                                    },
                                })}
                                onChange={(e) => {
                                    let onlyNumbers = e.target.value.replace(/\D/g, "");
                                    if (onlyNumbers.length > 11) {
                                        onlyNumbers = onlyNumbers.slice(0, 11);
                                    }
                                    formEmpregado.setValue("cpf", onlyNumbers);
                                    formEmpregado.trigger("cpf");
                                }}
                                className="w-full px-4 py-2 rounded-md border"
                            />
                            {formEmpregado.formState.errors.cpf && (
                                <p className="text-red-500 text-sm">
                                    {formEmpregado.formState.errors.cpf.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                {...formEmpregado.register("email", {
                                    required: "Email é obrigatório.",
                                    validate: (value) =>
                                        /\S+@\S+\.\S+/.test(value) || "Email inválido.",
                                })}
                                onChange={(e) => {
                                    formEmpregado.setValue("email", e.target.value);
                                    formEmpregado.trigger("email");
                                }}
                                className="w-full px-4 py-2 rounded-md border"
                            />
                            {formEmpregado.formState.errors.email && (
                                <p className="text-red-500 text-sm">
                                    {formEmpregado.formState.errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Senha</label>

                            <div className="relative">
                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    {...formEmpregado.register("senha", {
                                        required: "Senha é obrigatória.",
                                        validate: (value) =>
                                            value.length >= 6 ||
                                            "Senha deve ter pelo menos 6 caracteres.",
                                    })}
                                    onChange={(e) => {
                                        formEmpregado.setValue("senha", e.target.value);
                                        formEmpregado.trigger("senha");
                                    }}
                                    className="w-full px-4 py-2 rounded-md border pr-12"
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

                            {formEmpregado.formState.errors.senha && (
                                <p className="text-red-500 text-sm">
                                    {formEmpregado.formState.errors.senha.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[var(--c-bg1)] text-[var(--c-text2)] py-2 rounded-md"
                        >
                            Cadastrar Empregado
                        </button>
                    </form>
                )}

                <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="w-full mt-3 text-[var(--c-text)] py-2 rounded-md hover:underline transition-colors"
                >
                    Já tem cadastro? Faça login
                </button>

                {erroCadastro && (
                    <p className="text-red-500 text-sm mt-4 text-center">
                        {erroCadastro}
                    </p>
                )}
            </div>
        </main>
    );

}
