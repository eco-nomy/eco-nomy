import type { TipoFaq } from "../types/tipoFaq";

export const ListaFaq: TipoFaq[] = [
{
    id: 1,
    titulo: "O que é a Eco-nomy e qual seu propósito?",
    corpo: `A Eco-nomy é uma GreenTech que oferece um Hub Híbrido: um Marketplace de serviços ambientais sob demanda e um Hub de Colaboração B2B. Nosso propósito é acelerar a transição para a economia verde no Brasil, utilizando Inteligência Artificial para garantir a justiça social e a transparência em cada transação.`
  },
  {
    id: 2,
    titulo: "O que é a Precificação Ética e como ela funciona?",
    corpo: `A Precificação Ética é o nosso diferencial baseado em IA. Utilizamos um Modelo de Regressão que analisa dados de mercado (complexidade, localização, demanda) para sugerir uma faixa de preço justa (Hourly Low/Hourly High) para o serviço. Isso impede a subvalorização do trabalho do prestador e garante que o contratante pague um preço justo de mercado.`
  },
  {
    id: 3,
    titulo: "O que é o Escrow Digital e como ele garante meu pagamento?",
    corpo: `O Escrow Digital é o nosso mecanismo de segurança de pagamento nativo. Ao contratar um serviço, o valor total é retido pela Eco-nomy. O dinheiro só é liberado para o prestador de serviço após a conclusão e validação da entrega pelo contratante, resolvendo o medo da insegurança no pagamento para ambas as partes.`
  },
  {
    id: 4,
    titulo: "Como a Eco-nomy utiliza Inteligência Artificial?",
    corpo: `A IA é o nosso Core Tecnológico, atuando em duas frentes: 1) Precificação Ética (cálculo de preço justo) e 2) Gestão de Risco Preditiva. Esta última utiliza um Modelo de Classificação treinado com dados simulados (PaySim) para avaliar em tempo real a possibilidade de fraude ou desentendimento na transação, ativando salvaguardas antes que o problema ocorra.`
  },
  {
    id: 5,
    titulo: "Quais tipos de serviços ambientais posso contratar/oferecer?",
    corpo: `O Marketplace é focado em serviços de microescala e consultoria B2B, incluindo: gestão e coleta de resíduos, plantio e manutenção de áreas verdes, serviços de recuperação de áreas degradadas (RAD), consultoria em certificação ESG, e monitoramento ambiental local.`
  },
  {
    id: 6,
    titulo: "Como a plataforma garante a qualidade e a entrega do serviço?",
    corpo: `A qualidade e a entrega são garantidas por um sistema duplo: 1) Escrow Digital: o pagamento só é liberado após a validação explícita do contratante e 2) Rastreabilidade: a plataforma exige provas documentais ou fotográficas (validação remota) da conclusão do serviço no local, que fica registrado para a transparência de ambas as partes.`
  }
]
