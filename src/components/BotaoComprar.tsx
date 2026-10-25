import { linkCheckout } from "@/lib/produto";

export default function BotaoComprar({
  compacto = false,
}: {
  compacto?: boolean;
}) {
  return (
    <a
      href={linkCheckout}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-blue inline-flex w-full items-center justify-center rounded-full font-bold transition-[filter] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow focus-visible:ring-offset-2 focus-visible:ring-offset-carbon ${
        compacto ? "h-12 whitespace-nowrap px-4 text-[15px]" : "h-14 px-6 text-lg"
      }`}
    >
      Comprar agora
    </a>
  );
}
