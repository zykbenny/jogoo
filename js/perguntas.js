export const perguntas = [
  {
    caminho: "inicio",
    enunciado:
      "Você percebe que a cidade enfrenta problemas como poluição, desperdício, falta de água e mobilidade precária. O que você faz para construir uma cidade mais sustentável?",
    alternativas: [
      {
        texto: "Me importo com o planeta e quero agir para transformar a cidade em um lugar mais sustentável.",
        afirmacao: ["Decidiu agir para reduzir impactos ambientais e construir uma cidade mais sustentável."],
        tipo: "entrada",
        proxima: 1,
      },
      {
        texto: "Não dou a mínima para o planeta e sigo como se nada estivesse acontecendo.",
        afirmacao: ["Decidiu ignorar os problemas ambientais e continuar sem cuidar da cidade."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Você escolheu ignorar a realidade da cidade e a falta de ação agravou os problemas ambientais. Sem preocupação com o planeta, a missão terminou em fracasso. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "Você decide focar nas soluções práticas. Para criar uma cidade sustentável, o primeiro passo é entender o que precisa melhorar. Como começar?",
    alternativas: [
      {
        texto: "Mapear os principais problemas do bairro e comparar dados de poluição, água e resíduos.",
        afirmacao: ["Mapeou os problemas do bairro e usou dados para orientar as soluções."],
        tipo: "avancar",
        proxima: 3,
      },
      {
        texto: "Organizar uma campanha para conscientizar a comunidade sobre sustentabilidade.",
        afirmacao: ["Definiu uma campanha para mobilizar a comunidade e reforçar a consciência ambiental."],
        tipo: "salto",
        proxima: 4,
      },
      {
        texto: "Pedir uma solução rápida sem avaliar os impactos reais da cidade.",
        afirmacao: ["Decidiu seguir por um caminho sem planejamento e sem dados da realidade urbana."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A solução improvisada ignorou os impactos reais da cidade e deixou o problema sem resposta sustentável. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "Antes de escolher uma solução, você percebe que a cidade precisa de participação popular. Em uma reunião comunitária, alguém aponta um problema urgente. O que você faz?",
    alternativas: [
      {
        texto: "Investigar a origem do problema antes de propor mudanças no bairro.",
        afirmacao: ["Investiga a origem do problema antes de propor mudanças na comunidade."],
        tipo: "avancar",
        proxima: 7,
      },
      {
        texto: "Conversar com a comunidade e criar uma ação coletiva por uma cidade mais sustentável.",
        afirmacao: ["Consultou a comunidade e planejou uma ação coletiva para a sustentabilidade."],
        tipo: "salto",
        proxima: 8,
      },
      {
        texto: "Levar a conversa para o projeto sem ouvir as pessoas da rua.",
        afirmacao: ["Levou a discussão para o projeto sem ouvir a comunidade e sem considerar o problema real."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Você ignorou a comunidade e deu as costas ao problema real da cidade. Sem participação e ação, a missão foi perdida. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado: "Você observa que a cidade produz muito lixo, desperdiça água e ainda depende de energia pouco eficiente. Qual atitude toma?",
    alternativas: [
      {
        texto: "Conferir dados sobre consumo e propor medidas de economia de água, energia e resíduos.",
        afirmacao: ["Conferiu os dados e propôs medidas para economizar recursos e reduzir desperdícios."],
        tipo: "avancar",
        proxima: 4,
      },
      {
        texto: "Repetir a análise inicial com mais atenção antes de agir.",
        afirmacao: ["Retomou a análise para garantir uma decisão mais precisa e sustentável."],
        tipo: "salto",
        proxima: 1,
      },
      {
        texto: "Ignorar os dados e anunciar uma solução sem comprovação.",
        afirmacao: ["Anunciou uma solução sem comprovação e ignorou os dados ambientais."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A solução sem base foi descartada e a cidade perdeu tempo precioso. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado: "Você vai apresentar um plano para reduzir o impacto ambiental da cidade. Como preparar a proposta sustentável?",
    alternativas: [
      {
        texto: "Criar um exemplo com números, metas de reciclagem, energia limpa e uso racional da água.",
        afirmacao: ["Preparou um exemplo com metas claras para reciclagem, energia limpa e economia de água."],
        tipo: "avancar",
        proxima: 5,
      },
      {
        texto: "Usar uma ideia já testada e reforçar a comunicação com a população sobre mobilidade e resíduos.",
        afirmacao: ["Usou uma ideia já testada e reforçou a comunicação sobre mobilidade e resíduos."],
        tipo: "salto",
        proxima: 6,
      },
      {
        texto: "Transferir a responsabilidade para a comunidade sem mostrar como agir.",
        afirmacao: ["Transferiu a responsabilidade para a comunidade sem um plano real para a cidade."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Você passou o problema para os outros sem oferecer uma solução real. A cidade ficou sem rumo e a missão foi perdida. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado: "Seu grupo percebe que a proposta ainda não responde ao problema principal: excesso de poluição, desperdício e uso ruim dos recursos da cidade. O que fazer?",
    alternativas: [
      {
        texto: "Ajustar a proposta com soluções sustentáveis, metas claras e foco em recursos naturais.",
        afirmacao: ["Ajustou a proposta com soluções sustentáveis e objetivos claros para a cidade."],
        tipo: "avancar",
        proxima: 6,
      },
      {
        texto: "Voltar à coleta de dados para revisar o diagnóstico ambiental.",
        afirmacao: ["Retornou à coleta de dados para revisar o diagnóstico da cidade."],
        tipo: "salto",
        proxima: 3,
      },
      {
        texto: "Promover um discurso bonito sem nenhuma ação concreta.",
        afirmacao: ["Promoveu um discurso bonito, mas sem ação concreta para resolver os problemas urbanos."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A promessa vazia não resolveu a crise ambiental e a cidade ficou mais distante de uma solução real. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado: "Antes da apresentação, você decide como organizar o plano para uma cidade sustentável. Qual será sua escolha?",
    alternativas: [
      {
        texto: "Organizar os dados, as medidas e os cuidados necessários para reduzir desperdícios e preservar recursos.",
        afirmacao: ["Organizou os dados, as medidas e os cuidados necessários para uma cidade mais sustentável."],
        tipo: "avancar",
        proxima: 11,
      },
      {
        texto: "Voltar à revisão para melhorar a clareza da proposta sustentável.",
        afirmacao: ["Retomou a revisão para melhorar a clareza da proposta."],
        tipo: "salto",
        proxima: 5,
      },
      {
        texto: "Levar a proposta à comunidade sem preparar a mensagem para o público.",
        afirmacao: ["Levaram a proposta à comunidade sem preparar a mensagem para a população."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A proposta foi entregue sem preparo e sem clareza para a comunidade. A cidade não foi ajudada e a missão foi perdida. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado: "O problema não foi resolvido apenas com a conversa: falta informação, mobilidade, saneamento e ações concretas para a cidade. Como continuar?",
    alternativas: [
      {
        texto: "Consultar os órgãos públicos e dados oficiais sobre recursos hídricos, resíduos e transporte.",
        afirmacao: ["Consultou órgãos públicos e dados oficiais sobre recursos hídricos, resíduos e mobilidade urbana."],
        tipo: "avancar",
        proxima: 8,
      },
      {
        texto: "Retomar a busca inicial e reunir mais informações da comunidade sobre infraestrutura e cuidado ambiental.",
        afirmacao: ["Retomou a busca por mais informações sobre infraestrutura e cuidado ambiental da comunidade."],
        tipo: "salto",
        proxima: 2,
      },
      {
        texto: "Acusar a gestão pública sem provas e sem propor soluções reais.",
        afirmacao: ["Acusou a gestão pública sem provas e sem propor soluções sustentáveis."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A acusação sem base gerou conflito e paralisou a ação. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado: "Você descobre que a cidade precisa de ações de mobilização, educação ambiental, coleta seletiva e mobilidade sustentável. Como agir?",
    alternativas: [
      {
        texto: "Preparar uma campanha com orientação clara sobre reciclagem, água, energia limpa e transporte sustentável.",
        afirmacao: ["Preparou uma campanha com orientação clara sobre reciclagem, água, energia limpa e transporte sustentável."],
        tipo: "avancar",
        proxima: 9,
      },
      {
        texto: "Usar o material já revisado e organizar um encontro comunitário sobre soluções sustentáveis.",
        afirmacao: ["Usou o material revisado e organizou um encontro comunitário sobre soluções sustentáveis."],
        tipo: "salto",
        proxima: 10,
      },
      {
        texto: "Transformar o problema em um debate sem ação concreta para a cidade.",
        afirmacao: ["Transformou o problema em debate, sem ação concreta para a cidade."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "O debate foi mais forte do que a ação e a cidade continuou sem solução. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado: "Na revisão da campanha, surge uma dúvida sobre como explicar melhor a mensagem para a comunidade. Como você responde?",
    alternativas: [
      {
        texto: "Explicar os problemas, os impactos e os cuidados essenciais para preservar água, reduzir lixo e melhorar a cidade.",
        afirmacao: ["Explicou os problemas, os impactos e os cuidados essenciais para a cidade sustentável."],
        tipo: "avancar",
        proxima: 10,
      },
      {
        texto: "Voltar à pesquisa para reforçar os dados antes de falar sobre sustentabilidade urbana.",
        afirmacao: ["Retornou à pesquisa para reforçar os dados antes de falar sobre soluções sustentáveis."],
        tipo: "salto",
        proxima: 7,
      },
      {
        texto: "Criar uma narrativa alarmista e espalhar medo sem soluções.",
        afirmacao: ["Criou uma narrativa alarmista e espalhou medo sem apresentar soluções práticas."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A mensagem sem solução gerou pânico e enfraqueceu a mobilização. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado: "Você organiza o encontro com os moradores. O que precisa fazer antes de apresentar a proposta para a cidade?",
    alternativas: [
      {
        texto: "Organizar as orientações sobre reciclagem, conservação de água, energia limpa e mobilidade sustentável.",
        afirmacao: ["Organizou as orientações sobre reciclagem, conservação de água, energia limpa e mobilidade sustentável."],
        tipo: "avancar",
        proxima: 12,
      },
      {
        texto: "Voltar à revisão para melhorar a comunicação da campanha ambiental.",
        afirmacao: ["Retornou à revisão para melhorar a comunicação da campanha ambiental."],
        tipo: "salto",
        proxima: 9,
      },
      {
        texto: "Divulgar informações privadas dos moradores em vez de soluções públicas e sustentáveis.",
        afirmacao: ["Divulgou informações privadas dos moradores em vez de soluções públicas e sustentáveis."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A divulgação indevida de dados rompeu a confiança da comunidade. Você falhou na missão e precisa recomeçar.",
      },
    ],
  },
  {
    caminho: "A",
    final: "vitoria",
    enunciado:
      "Você apresentou a proposta à escola e mostrou como a cidade pode reduzir desperdícios, proteger os recursos naturais, melhorar a água, a energia e a qualidade de vida. A missão foi concluída com sucesso. Você venceu!",
    alternativas: [],
  },
  {
    caminho: "B",
    final: "vitoria",
    enunciado:
      "Você apresentou o plano de ação aos moradores e ensinou formas de preservar água, reduzir resíduos, fortalecer a mobilidade e construir uma cidade sustentável. A missão foi concluída com sucesso. Você venceu!",
    alternativas: [],
  },
];