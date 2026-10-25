"use client";

import { useState } from "react";
import { sabores, type Sabor } from "@/lib/produto";

export default function SeletorSabor() {
  const [sabor, setSabor] = useState<Sabor>(sabores[0]);

  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-2 text-sm text-mist">
        Sabor do whey: <span className="font-medium text-snow">{sabor}</span>
      </legend>
      <div className="flex flex-wrap gap-2">
        {sabores.map((opcao) => {
          const ativo = opcao === sabor;
          return (
            <label
              key={opcao}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-focus-visible:ring-2 has-focus-visible:ring-cyan ${
                ativo
                  ? "border-cyan bg-cyan/15 text-cyan"
                  : "border-white/20 bg-transparent text-snow hover:border-white/50"
              }`}
            >
              <input
                type="radio"
                name="sabor"
                value={opcao}
                checked={ativo}
                onChange={() => setSabor(opcao)}
                className="sr-only"
              />
              {opcao}
            </label>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-mist">
        O sabor é confirmado no checkout, na hora da compra.
      </p>
    </fieldset>
  );
}
