export type Proposta = {
  id: number;
  empresa_id: number;
  empregado_id: number;
  titulo: string;
  descricao: string;
  valor: number;
  data_criacao: string;
  is_longo_prazo: number;
  status: string;
};
