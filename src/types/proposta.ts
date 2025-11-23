export type Proposta = {
  id: number;
  empresa_id: number;
  empregado_id: number | null;
  descricao: string;
  valor: number;
  data_criacao: string;
  longoPrazo: boolean;
};
