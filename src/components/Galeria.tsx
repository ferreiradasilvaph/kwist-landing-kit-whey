"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";
import { imagens, video, type Imagem } from "@/lib/produto";
import { origemZoom } from "@/lib/zoom";

/** Fator de ampliação ao passar o mouse, como na vitrine do Mercado Livre. */
const FATOR_ZOOM = 2.2;

type Slide =
  | ({ tipo: "imagem" } & Imagem)
  | { tipo: "video"; src: string; alt: string };

const slides: Slide[] = imagens.map((img) => ({ tipo: "imagem", ...img }));
slides.splice(video.posicao, 0, { tipo: "video", src: video.src, alt: video.alt });

function IconePlay({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="11" fill="rgba(14,16,19,0.75)" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8.2v7.6l6-3.8z" fill="currentColor" />
    </svg>
  );
}

export default function Galeria() {
  const [ativo, setAtivo] = useState(0);
  const [origem, setOrigem] = useState<{ x: number; y: number } | null>(null);
  const quadro = useRef<HTMLElement>(null);
  const atual = slides[ativo];
  const ehVideo = atual.tipo === "video";
  const recorte = atual.tipo === "imagem" && atual.ajuste === "recorte";

  function aoMover(e: MouseEvent<HTMLElement>) {
    // Só em dispositivos com mouse; no toque a foto fica parada. Vídeo não amplia.
    if (ehVideo || !window.matchMedia("(hover: hover)").matches) return;
    const r = quadro.current?.getBoundingClientRect();
    if (!r) return;
    setOrigem(origemZoom(e.clientX - r.left, e.clientY - r.top, r.width, r.height));
  }

  function trocar(i: number) {
    setAtivo(i);
    setOrigem(null);
  }

  const ampliado = origem !== null;

  return (
    <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-4">
      <figure
        ref={quadro}
        onMouseMove={aoMover}
        onMouseLeave={() => setOrigem(null)}
        className={`relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-surface ring-1 ring-white/10 ${
          ampliado ? "cursor-zoom-in" : ""
        }`}
      >
        {/* Fundo do quadro: brilho azul para o recorte, a própria foto desfocada para as demais */}
        {recorte && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_55%,rgba(26,143,240,0.45),transparent_75%)]"
          />
        )}
        {atual.tipo === "imagem" && !recorte && (
          <>
            <Image
              key={`fundo-${atual.src}`}
              src={atual.src}
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="scale-110 object-cover opacity-60 blur-2xl"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-carbon/30"
            />
          </>
        )}

        {atual.tipo === "video" ? (
          <video
            key={atual.src}
            src={atual.src}
            controls
            playsInline
            preload="metadata"
            aria-label={atual.alt}
            className="absolute inset-0 h-full w-full bg-carbon object-contain"
          >
            Seu navegador não reproduz este vídeo.
          </video>
        ) : (
          <>
            {/* Foto inteira, sem corte; amplia e acompanha o cursor no hover */}
            <Image
              key={atual.src}
              src={atual.src}
              alt={atual.alt}
              fill
              loading={ativo === 0 ? "eager" : "lazy"}
              fetchPriority={ativo === 0 ? "high" : "auto"}
              sizes="(min-width: 1024px) 48vw, 100vw"
              style={{
                transform: ampliado ? `scale(${FATOR_ZOOM})` : "scale(1)",
                transformOrigin: origem ? `${origem.x}% ${origem.y}%` : "50% 50%",
                transition: ampliado ? "none" : "transform 200ms ease-out",
              }}
              className={`object-contain will-change-transform ${
                recorte
                  ? "p-4 drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] sm:p-8"
                  : "p-2 drop-shadow-[0_16px_30px_rgba(0,0,0,0.5)] sm:p-3"
              }`}
            />
            <figcaption
              className={`pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-carbon/70 px-3 py-1 text-xs text-snow backdrop-blur transition-opacity [@media(hover:hover)]:block ${
                ampliado ? "opacity-0" : "opacity-100"
              }`}
            >
              Passe o mouse para ampliar
            </figcaption>
          </>
        )}
      </figure>

      <ul
        className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin] sm:order-first sm:h-0 sm:min-h-full sm:flex-col sm:overflow-x-hidden sm:overflow-y-auto sm:pb-0 sm:pr-1"
        aria-label="Miniaturas do produto"
      >
        {slides.map((slide, i) => {
          const selecionado = i === ativo;
          return (
            <li key={slide.src} className="shrink-0">
              <button
                type="button"
                onClick={() => trocar(i)}
                onMouseEnter={() => trocar(i)}
                aria-label={`Ver ${slide.tipo === "video" ? "vídeo" : "imagem"}: ${slide.alt}`}
                aria-current={selecionado ? "true" : undefined}
                className={`relative block aspect-square w-16 overflow-hidden rounded-xl bg-surface outline-none transition-[box-shadow,opacity] focus-visible:ring-2 focus-visible:ring-cyan sm:w-[4.5rem] ${
                  selecionado
                    ? "ring-2 ring-cyan"
                    : "opacity-70 ring-1 ring-white/15 hover:opacity-100 hover:ring-white/40"
                }`}
              >
                {slide.tipo === "video" ? (
                  <>
                    <video
                      src={`${slide.src}#t=0.5`}
                      muted
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                      tabIndex={-1}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <IconePlay className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-cyan" />
                  </>
                ) : (
                  <Image
                    src={slide.src}
                    alt=""
                    fill
                    sizes="72px"
                    loading="eager"
                    className={
                      slide.ajuste === "recorte"
                        ? "object-contain p-1"
                        : "object-cover object-[50%_25%]"
                    }
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
