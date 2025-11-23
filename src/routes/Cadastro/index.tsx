import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type CadastroFormData = {
    email: string;
    senha: string;
    confirmaSenha: string;
    nome?: string;
    cnpj?: string;
};

export default function Cadastro() {
    const navigate = useNavigate();
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [tipoCadastro, setTipoCadastro] = useState<"email" | "cnpj" | null>(null);

    useEffect(() => {
        document.title = "Cadastro de Usuários";
    }, []);

    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
        watch,
    } = useForm<CadastroFormData>({
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            email: "",
            senha: "",
            confirmaSenha: "",
            nome: "",
            cnpj: "",
        },
    });

    const onSubmit = async (data: CadastroFormData) => {
        try {
            const endpoint =
                tipoCadastro === "email"
                    ? "https://eco-nomy-sis-stable.onrender.com/empregado/cadastro"
                    : "https://eco-nomy-sis-stable.onrender.com/empresa/cadastro";

            const resp = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "chave-primaria",
                },
                body: JSON.stringify(data),
            });

            if (!resp.ok) throw new Error("Erro ao cadastrar usuário.");

            alert("Cadastro realizado com sucesso!");
            navigate("/login");
        } catch (error) {
            console.error("Erro no cadastro:", error);
            alert("Erro no processo de cadastro!");
        }
    };

    return (
        <main className="bg-[var(--c-bg)] text-[var(--c-text)] min-h-200 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md bg-[var(--c-bg)] p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-[var(--c-text)]">
                    Escolha tipo de cadastro
                </h1>

                <div className="justify-center gap-4 mb-6">
                    <button
                        type="button"
                        onClick={() => {
                            setTipoCadastro("email");
                            reset();
                        }}
                        className="cursor-pointer bg-[var(--c-bg1)] text-[var(--c-text2)] px-4 py-2 rounded hover:bg-[var(--c-bg2)] w-full"
                    >
                        Cadastro Trabalhador
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setTipoCadastro("cnpj");
                            reset();
                        }}
                        className="cursor-pointer bg-[var(--c-bg1)] text-[var(--c-text2)] px-4 py-2 rounded hover:bg-[var(--c-bg2)] w-full mt-4"
                    >
                        Cadastro Empresa
                    </button>
                </div>

                {tipoCadastro && (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-[#194737]">
                                Nome
                            </label>
                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                {...register("nome", { required: "Nome é obrigatório." })}
                                className={`w-full px-4 py-2 rounded-md bg-white border ${errors.nome ? "border-red-500" : "border-gray-300"
                                    } text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]`}
                            />
                            {errors.nome && (
                                <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-[#194737]">
                                {tipoCadastro === "email" ? "Email" : "CNPJ"}
                            </label>
                            <input
                                type="text"
                                placeholder={
                                    tipoCadastro === "email"
                                        ? "Digite seu email"
                                        : "Digite seu CNPJ (somente números)"
                                }
                                maxLength={tipoCadastro === "email" ? 60 : 14}
                                {...register("email", {
                                    required: `${tipoCadastro === "email" ? "Email" : "CNPJ"} é obrigatório.`,
                                    validate: (value) => {
                                        if (tipoCadastro === "email") {
                                            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                            return regexEmail.test(value) || "Email inválido.";
                                        } else {
                                            const regexCNPJ = /^\d{14}$/;
                                            return regexCNPJ.test(value) || "CNPJ inválido (14 dígitos).";
                                        }
                                    },
                                })}
                                onInput={(e) => {
                                    if (tipoCadastro === "cnpj") {
                                        e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                                    }
                                }}
                                className={`w-full px-4 py-2 rounded-md bg-white border ${errors.email ? "border-red-500" : "border-gray-300"
                                    } text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-[#194737]">
                                Senha
                            </label>
                            <div className="relative">
                                <input
                                    type={mostrarSenha ? "text" : "password"}
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

                        <div>
                            <label className="block text-sm font-medium mb-1 text-[#194737]">
                                Confirmar Senha
                            </label>
                            <input
                                type="password"
                                placeholder="Confirme sua senha"
                                {...register("confirmaSenha", {
                                    required: "Confirmação de senha é obrigatória.",
                                    validate: (value) =>
                                        value === watch("senha") || "As senhas não coincidem.",
                                })}
                                className={`w-full px-4 py-2 rounded-md bg-white border ${errors.confirmaSenha ? "border-red-500" : "border-gray-300"
                                    } text-[#194737] focus:outline-none focus:ring-2 focus:ring-[#29966a]`}
                            />
                            {errors.confirmaSenha && (
                                <p className="text-red-500 text-sm mt-1">{errors.confirmaSenha.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer w-full bg-[var(--c-bg1)] text-[var(--c-text2)] py-2 rounded-md hover:bg-[var(--c-bg2)] transition-colors"
                        >
                            Cadastrar
                        </button>
                    </form>
                )}
            </div>
        </main>
    );
}
