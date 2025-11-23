// Union Type para tipo de login
export type TipoLogin = "email" | "cnpj";

// Formulário de login
export type LoginFormData = {
  login: string; // pode ser email ou cnpj
  senha: string;
  tipo: TipoLogin;
};

// Usuário retornado pela API
export type Usuario = {
  userId: number;
  token: string;
  email: string;
  senha: string;
  funcionario: boolean;
};
