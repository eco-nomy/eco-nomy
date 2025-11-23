// src/types/proposta.ts
export interface Proposta {
  id: number;                // id da proposta
  empresaId: number;         // id da empresa
  empregadoId: number | null;// id do empregado (pode ser null)
  descricao: string;         // descrição da proposta
  valor: number;             // valor da proposta
  dataCriacao: string;       // data de criação (ISO string)
  status: string;            // status atual ("Aberta", "Ocupado", etc.)
  longoPrazo: boolean;       // campo que vem no GET da API
  isLongoPrazo?: boolean;    // campo que precisa ser enviado no PUT/POST
}
