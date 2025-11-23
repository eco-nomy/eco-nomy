export type TipoCadastro = "empresa" | "empregado";

export type CadastroEmpresa = {
    tipo: "empresa";
    nome: string;
    cnpj: string;
    senha: string;
};

export type CadastroEmpregado = {
    tipo: "empregado";
    nome: string;
    cpf: string;
    email: string;
    saldo: number;
    dataCriacao: string;
    senha: string;
};
