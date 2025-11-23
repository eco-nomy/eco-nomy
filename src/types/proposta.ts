export interface Proposta {
  id: number;
  empresaid: number;
  empregadoid: number | null;
  descricao: string;
  valor: number;
  dataCriacao: string;
  status: string;
  longoPrazo: boolean;
};
