// Intersection Types para compor usuários

type Credenciais = {
  email: string;
  senha: string;
};

export type Trabalhador = Credenciais & {
  userId: number;
  token: string;
  funcionario: true;
};

export type EmpresaUsuario = Credenciais & {
  id: number;
  nome: string;
  cnpj: string;
  saldo: number;
  data_criacao: string;
  token: string;
  funcionario: false;
};

export type Usuario = Trabalhador | EmpresaUsuario;
