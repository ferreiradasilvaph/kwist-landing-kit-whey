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

/** Link do anúncio. Se tiver link de afiliado, substitua aqui. */
export const linkAnuncio =
  "https://produto.mercadolivre.com.br/MLB-3417706739-kit-whey-protein-isolado-creatina-pre-treino-shaker-_JM";

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
  freteGratis: true,
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
    pergunta: "Onde a compra é feita?",
    resposta:
      "O botão desta página abre o anúncio no Mercado Livre. Todo o pagamento, a entrega e a garantia acontecem por lá, com a proteção da plataforma.",
  },
  {
    pergunta: "Como funciona a entrega?",
    resposta:
      "O frete é grátis pelo Mercado Livre. O prazo aparece no anúncio depois que você informa o CEP, e o rastreio fica disponível na sua conta.",
  },
  {
    pergunta: "Quais formas de pagamento aceitam?",
    resposta:
      "As do Mercado Livre: cartão de crédito em até 12 parcelas, Pix, boleto e saldo em conta. As condições de parcelamento são as exibidas no anúncio.",
  },
  {
    pergunta: "Posso trocar ou devolver?",
    resposta:
      "Sim. A troca e a devolução seguem as regras do Mercado Livre e podem ser pedidas direto pela sua compra, dentro do prazo informado lá.",
  },
  {
    pergunta: "O preço desta página é o final?",
    resposta:
      "O preço muda com frequência. O valor aqui é uma referência; o preço válido é sempre o que aparece no anúncio na hora da compra.",
  },
];
