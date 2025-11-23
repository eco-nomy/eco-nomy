export type Proposta = {
  id: number;
  empresa_id: number;
  empregado_id: number | null;
  descricao: string;
  valor: number;
  dataCriacao: string;
  status: string;
  longoPrazo: boolean;
};
