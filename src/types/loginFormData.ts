export type LoginFormData = {
  email: string;
  senha: string;
};

export type Usuario = {
  userId: number;
  token: string;
  email: string;
  senha: string;
  funcionario: boolean;
};