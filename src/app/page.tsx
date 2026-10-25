import Image from "next/image";
import BotaoComprar from "@/components/BotaoComprar";
import Faq from "@/components/Faq";
import Galeria from "@/components/Galeria";
import SeletorSabor from "@/components/SeletorSabor";
import {
  descontoPercentual,
  imagens,
  ingredientes,
  itensKit,
  marca,
  modoDeUso,
  precaucoes,
  preco,
  produto,
} from "@/lib/produto";

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const destaques = [
  { numero: "22 g", texto: "de proteína por dose de whey" },
  { numero: "3 g", texto: "de creatina pura por dia" },
  { numero: "10 g", texto: "de pré-treino com cafeína" },
  { numero: "600 ml", texto: "de shaker para levar" },
];

const garantias = [
  {
    titulo: "Frete grátis",
    texto: "Entrega pelo Mercado Livre, com rastreio na sua conta.",
  },
  {
    titulo: "Compra protegida",
    texto: "Pagamento, troca e devolução garantidos pela plataforma.",
  },
  {
    titulo: `Em até ${preco.parcelas}x`,
    texto: "Cartão, Pix ou boleto, nas condições do anúncio.",
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-2xl font-extrabold tracking-tight ${className}`}
    >
      {marca.nome}
      <span className="text-cyan">.</span>
    </span>
  );
}

function Secao({
  id,
  titulo,
  subtitulo,
  children,
  className = "",
}: {
  id: string;
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className={`py-14 sm:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl sm:mb-12">
          <h2
            id={`${id}-titulo`}
            className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl"
          >
            {titulo}
          </h2>
          {subtitulo && <p className="mt-3 text-lg text-mist">{subtitulo}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Herói */}
      <div className="hero-bg">
        <header className="mx-auto flex w-full max-w-6xl items-center px-4 py-5 sm:px-6">
          <Logo />
        </header>

        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-4 sm:px-6 sm:pt-8 lg:pb-24">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Texto + galeria */}
            <div className="flex min-w-0 flex-col gap-8">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
                  {produto.novo && (
                    <span className="rounded-full bg-cyan px-3 py-1 font-semibold text-carbon">
                      Novo
                    </span>
                  )}
                  <span className="text-mist">por {produto.fabricante}</span>
                </div>
                <p className="font-display text-lg font-medium text-cyan sm:text-2xl">
                  Treino completo em uma caixa só.
                </p>
                <h1 className="mt-2 font-display text-[2.5rem] font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                  Whey, creatina e pré‑treino com shaker de brinde.
                </h1>
                <p className="mt-5 max-w-xl text-base text-mist sm:text-lg">
                  {produto.nome}: energia antes, proteína depois e creatina
                  todo dia. Compra feita e garantida pelo Mercado Livre.
                </p>
              </div>

              <Galeria />
            </div>

            {/* Painel de compra */}
            <div className="relative min-w-0 lg:sticky lg:top-6">
              <span
                aria-hidden="true"
                className="selo absolute -top-5 right-4 z-10 rounded-full bg-neon px-4 py-2 font-display text-lg font-extrabold text-snow shadow-lg shadow-neon/40 sm:-top-6 sm:right-6 sm:text-xl"
              >
                {descontoPercentual}% OFF
              </span>

              <div className="flex flex-col gap-6 rounded-3xl bg-surface p-5 shadow-2xl shadow-black/60 ring-1 ring-white/10 sm:p-8">
                <div>
                  <p className="text-sm text-mist">
                    De{" "}
                    <span className="line-through">
                      {brl.format(preco.anterior)}
                    </span>{" "}
                    por
                  </p>
                  <p className="font-display text-[3.4rem] font-extrabold leading-none tracking-tight sm:text-7xl">
                    {brl.format(preco.atual)}
                  </p>
                  <p className="mt-2 text-lg text-mist">
                    ou {preco.parcelas}x de{" "}
                    <span className="font-semibold text-snow">
                      {brl.format(preco.valorParcela)}
                    </span>
                  </p>
                  {produto.freteGratis && (
                    <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue/15 px-3 py-1 text-sm font-semibold text-cyan">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-cyan"
                      />
                      Frete grátis pelo Mercado Livre
                    </p>
                  )}
                </div>

                <SeletorSabor />

                <div>
                  <BotaoComprar />
                  <p className="mt-3 text-center text-sm text-mist">
                    Abre o anúncio em nova aba. Preço sujeito a alteração,
                    confira o valor atual no Mercado Livre.
                  </p>
                </div>

                <ul className="grid grid-cols-1 gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-sm min-[420px]:grid-cols-2">
                  {itensKit.map((item) => (
                    <li key={item.nome} className="flex items-baseline gap-2">
                      <span className="font-display text-base font-bold text-cyan">
                        {item.medida}
                      </span>
                      <span className="text-mist">{item.nome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa de garantias */}
      <div className="border-y border-white/10 bg-surface">
        <ul className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {garantias.map((g) => (
            <li key={g.titulo} className="border-l-2 border-cyan pl-4">
              <p className="font-display text-xl font-bold">{g.titulo}</p>
              <p className="mt-1 text-sm text-mist">{g.texto}</p>
            </li>
          ))}
        </ul>
      </div>

      <main className="flex-1 pb-24 lg:pb-0">
        {/* O que vem no kit */}
        <Secao
          id="kit"
          titulo="O que vem no kit"
          subtitulo="Quatro itens que se completam: energia para começar, proteína para recuperar, creatina para evoluir e o shaker para levar tudo."
        >
          <ul className="grid gap-4 sm:grid-cols-2">
            {itensKit.map((item, i) => (
              <li
                key={item.nome}
                className={`flex flex-col justify-between gap-6 rounded-3xl p-6 ring-1 sm:p-8 ${
                  i === 0
                    ? "dots bg-blue-deep/40 ring-blue/40"
                    : "bg-surface ring-white/10"
                }`}
              >
                <div>
                  <span className="font-display text-5xl font-extrabold tracking-tight text-cyan sm:text-6xl">
                    {item.medida}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold">
                    {item.nome}
                  </h3>
                  <p className="mt-1 text-mist">{item.resumo}</p>
                </div>
                <ul className="space-y-2">
                  {item.beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Secao>

        {/* Foto de ambiente + números */}
        <div className="relative overflow-hidden border-y border-white/10">
          <Image
            src={imagens[1].src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[50%_30%] opacity-60"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/85 to-carbon/30"
          />
          <ul className="relative mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-4 gap-y-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:py-24">
            {destaques.map((d) => (
              <li key={d.numero}>
                <p className="font-display text-5xl font-extrabold tracking-tight text-cyan sm:text-6xl">
                  {d.numero}
                </p>
                <p className="mt-2 text-mist">{d.texto}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Modo de uso */}
        <Secao
          id="uso"
          titulo="Modo de uso"
          subtitulo="Três momentos, três doses. Use o shaker de 600 ml e prepare na hora de consumir."
        >
          <ol className="relative grid gap-8 sm:grid-cols-3">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 sm:block"
            />
            {modoDeUso.map((passo, i) => (
              <li key={passo.item} className="relative">
                <span className="btn-blue relative z-10 grid h-12 w-12 place-items-center rounded-full font-display text-xl font-extrabold">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  {passo.momento}
                </h3>
                <p className="font-semibold text-cyan">{passo.item}</p>
                <p className="mt-2 text-mist">{passo.como}</p>
              </li>
            ))}
          </ol>
        </Secao>

        {/* Ingredientes e precauções */}
        <Secao
          id="ingredientes"
          titulo="Ingredientes e precauções"
          className="bg-surface"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-carbon p-6 ring-1 ring-white/10 sm:p-8">
              <h3 className="font-display text-2xl font-bold">Ingredientes</h3>
              <ul className="mt-4 space-y-3 text-mist">
                {ingredientes.map((texto) => (
                  <li key={texto}>{texto}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl p-6 ring-2 ring-neon/50 sm:p-8">
              <h3 className="font-display text-2xl font-bold">Precauções</h3>
              <ul className="mt-4 space-y-3 text-mist">
                {precaucoes.map((texto) => (
                  <li key={texto} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon"
                    />
                    {texto}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Secao>

        {/* FAQ */}
        <Secao
          id="faq"
          titulo="Perguntas frequentes"
          subtitulo="Entrega, pagamento e troca acontecem pelo Mercado Livre."
        >
          <div className="max-w-3xl">
            <Faq />
          </div>
        </Secao>

        {/* Chamada final */}
        <section aria-labelledby="final-titulo" className="hero-bg border-t border-white/10">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:py-24">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
              <div className="relative mx-auto aspect-square w-48 shrink-0 sm:mx-0 sm:w-56">
                <Image
                  src={imagens[0].src}
                  alt=""
                  fill
                  sizes="224px"
                  quality={90}
                  className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                />
              </div>
              <div>
                <h2
                  id="final-titulo"
                  className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl"
                >
                  Pronto para o próximo treino?
                </h2>
                <p className="mt-4 max-w-lg text-lg text-mist">
                  Kit completo por {brl.format(preco.atual)}, ou{" "}
                  {preco.parcelas}x de {brl.format(preco.valorParcela)}, com
                  frete grátis.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-80">
              <BotaoComprar />
            </div>
          </div>
        </section>
      </main>

      {/* Barra de compra fixa no celular */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-carbon/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-4">
          <div className="shrink-0 leading-tight">
            <span className="block font-display text-xl font-extrabold">
              {brl.format(preco.atual)}
            </span>
            <span className="text-xs text-mist">
              {preco.parcelas}x de {brl.format(preco.valorParcela)}
            </span>
          </div>
          <BotaoComprar compacto />
        </div>
      </div>

      <footer className="border-t border-white/10 bg-carbon">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-10 pb-32 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:pb-10">
          <div>
            <Logo />
            <p className="mt-2 max-w-md text-sm text-mist">
              {marca.slogan}. Esta página apresenta o produto; a venda é feita
              pelo anúncio no Mercado Livre.
            </p>
          </div>
          <p className="text-xs text-mist/70">
            © {marca.ano} {marca.nome}
          </p>
        </div>
      </footer>
    </>
  );
}
