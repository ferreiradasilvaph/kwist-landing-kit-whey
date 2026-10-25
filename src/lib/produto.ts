/**
 * Dados do produto e da marca em um único lugar.
 * Para atualizar preço, link ou fotos, edite apenas este arquivo.
 */

export const marca = {
  /** Ano exibido no rodapé. */
  ano: 2026,
  nome: "Kwist",
  slogan: "Suplementos escolhidos a dedo",
};

/**
 * Link do checkout na Dotfy (https://app.dotfy.com.br).
 * Crie o produto no painel da Dotfy, copie o link de checkout e cole aqui.
 * Enquanto for o valor provisório abaixo, o botão abre o checkout de exemplo.
 */
export const linkCheckout = "https://app.dotfy.com.br/checkout/SEU-PRODUTO";

/** Preços consultados em 24/10/2026. Mudam com frequência. */
export const preco = {
  anterior: 229.9,
  atual: 134.9,
  parcelas: 12,
  valorParcela: 13.33,
};

export const descontoPercentual = Math.round(
  (1 - preco.atual / preco.anterior) * 100,
);

export const produto = {
  nome: "Kit Whey Protein + Creatina + Pré-Treino + Shaker",
  fabricante: "Bulk Nutrition",
  novo: true,
  /** true mostra "Frete grátis"; false mostra "Frete calculado no checkout". */
  freteGratis: false,
};

export const sabores = ["Baunilha", "Chocolate", "Morango"] as const;
export type Sabor = (typeof sabores)[number];

/**
 * Fotos da galeria (arquivos em public/images/). A primeira é a principal.
 * "ajuste": "recorte" é o produto sem fundo (ganha um brilho azul atrás);
 * "foto" é foto de ambiente: aparece inteira, com fundo desfocado dela mesma.
 */
export type Imagem = { src: string; alt: string; ajuste: "recorte" | "foto" };

export const imagens: Imagem[] = [
  {
    src: "/images/kit-recorte.webp",
    alt: "Kit completo: whey 900 g, creatina 300 g, pré-treino 300 g e shaker",
    ajuste: "recorte",
  },
  {
    src: "/images/way-9.webp",
    alt: "Whey Blend sabor baunilha sendo preparado no shaker",
    ajuste: "foto",
  },
  {
    src: "/images/way-3.webp",
    alt: "Pacote de Whey Blend com destaques da fórmula",
    ajuste: "foto",
  },
  {
    src: "/images/way-5.webp",
    alt: "Pote de pré-treino Stoutness e seus benefícios",
    ajuste: "foto",
  },
  {
    src: "/images/way-6.webp",
    alt: "Pote de creatina pura com dosador",
    ajuste: "foto",
  },
  {
    src: "/images/way-4.webp",
    alt: "Modo de preparo e ingredientes do whey",
    ajuste: "foto",
  },
  {
    src: "/images/way-2.webp",
    alt: "Tabela de informação nutricional do whey",
    ajuste: "foto",
  },
  {
    src: "/images/way-8.webp",
    alt: "Shaker de 600 ml em uso",
    ajuste: "foto",
  },
];

/** Vídeo do carrossel (public/images/). "posicao" é o índice dele entre as fotos. */
export const video = {
  src: "/images/way-video.mp4",
  alt: "Vídeo de apresentação do kit",
  posicao: 1,
};

export const itensKit = [
  {
    nome: "Whey Protein Blend",
    medida: "900 g",
    resumo: "Proteína para o pós-treino, em dose de 40 g.",
    beneficios: [
      "22 g de proteína por dose",
      "4 g de BCAA e 4 g de glutamina",
      "Mistura fácil no shaker, sem grumos",
    ],
  },
  {
    nome: "Creatina Monohidratada",
    medida: "300 g",
    resumo: "Dose diária de 3 g, com ou sem treino.",
    beneficios: [
      "Ajuda na força e na explosão muscular",
      "Rende cerca de 100 doses",
      "Sabor neutro, combina com qualquer bebida",
    ],
  },
  {
    nome: "Pré-Treino Stoutness",
    medida: "300 g",
    resumo: "Energia e foco de 20 a 30 minutos antes do treino.",
    beneficios: [
      "Beta-alanina, taurina e cafeína",
      "Arginina e tirosina na fórmula",
      "Dose de 10 g, cerca de 30 doses",
    ],
  },
  {
    nome: "Shaker",
    medida: "600 ml",
    resumo: "Para preparar e levar as bebidas.",
    beneficios: [
      "Capacidade de 600 ml",
      "Tampa com vedação para carregar na mochila",
      "Serve para as três bebidas do kit",
    ],
  },
];

export const modoDeUso = [
  {
    momento: "Antes do treino",
    item: "Pré-treino",
    como: "10 g em 200 ml de água, de 20 a 30 minutos antes de começar.",
  },
  {
    momento: "Depois do treino",
    item: "Whey",
    como: "40 g em 200 ml de água ou leite, logo após terminar.",
  },
  {
    momento: "Todo dia",
    item: "Creatina",
    como: "3 g em 200 ml de líquido, uma vez ao dia, em qualquer horário.",
  },
];

export const ingredientes = [
  "Whey: proteína concentrada e isolada do soro do leite, BCAA, glutamina, aromas e edulcorantes. Contém lactose.",
  "Creatina: creatina monohidratada pura.",
  "Pré-treino: beta-alanina, taurina, cafeína, arginina, tirosina, aromas e edulcorantes.",
];

export const precaucoes = [
  "Não indicado para gestantes, lactantes e crianças.",
  "Não indicado para pessoas sensíveis à cafeína.",
  "Consulte médico ou nutricionista antes de usar.",
  "Contém lactose. Não é livre de glúten.",
  "Idade mínima recomendada: 19 anos.",
];

export const faq = [
  {
    pergunta: "Como funciona a compra?",
    resposta:
      "O botão desta página abre o checkout seguro da Kwist, processado pela Dotfy. Você informa seus dados, escolhe o sabor e a forma de pagamento e recebe a confirmação por e-mail.",
  },
  {
    pergunta: "Quais formas de pagamento aceitam?",
    resposta:
      "Pix, cartão de crédito em até 12 parcelas e boleto. As condições de parcelamento aparecem no checkout antes de você confirmar.",
  },
  {
    pergunta: "Como funciona a entrega?",
    resposta:
      "O prazo e o valor do frete aparecem no checkout depois que você informa o CEP. Assim que o pedido é postado, você recebe o código de rastreio por e-mail.",
  },
  {
    pergunta: "Posso trocar ou devolver?",
    resposta:
      "Sim. Você pode desistir da compra em até 7 dias após o recebimento, como garante o Código de Defesa do Consumidor, desde que o produto esteja lacrado. Produto com defeito ou avaria é trocado sem custo. Fale com a gente pelo e-mail informado na confirmação do pedido.",
  },
  {
    pergunta: "O pagamento é seguro?",
    resposta:
      "Sim. O pagamento é processado pela Dotfy em ambiente criptografado. Esta página não armazena dados de cartão nem dados pessoais.",
  },
  {
    pergunta: "O preço desta página é o final?",
    resposta:
      "O preço muda com frequência. O valor aqui é uma referência; o preço válido é sempre o que aparece no checkout na hora da compra.",
  },
];
