// src/types/loginFormData.ts

export type TipoLogin = "email" | "cnpj";

export type LoginFormData = {
  login: string;   // email ou cnpj
  senha: string;
};

export type Trabalhador = {
  empregadoId: number;
  cpf: string;
  nome: string;
  email: string;
  saldo: number;
  dataCriacao: string; // vindo do backend
  token?: string;
  funcionario: true;
};

export type EmpresaUsuario = {
  id: number;
  nome: string;
  cnpj: string;
  saldo: number;
  dataCriacao: string; // <-- confirmar se backend envia!
  token?: string;
  funcionario: false;
};

export type Usuario = Trabalhador | EmpresaUsuario;
