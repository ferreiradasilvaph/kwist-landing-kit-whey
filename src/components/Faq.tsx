import { faq } from "@/lib/produto";

export default function Faq() {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {faq.map((item) => (
        <details key={item.pergunta} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium outline-none focus-visible:ring-2 focus-visible:ring-cyan [&::-webkit-details-marker]:hidden">
            {item.pergunta}
            <span
              aria-hidden="true"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/25 text-lg leading-none text-cyan transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-prose text-mist">{item.resposta}</p>
        </details>
      ))}
    </div>
  );
}
