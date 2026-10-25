import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import "./globals.css";
import { marca, produto } from "@/lib/produto";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  title: `${produto.nome} | ${marca.nome}`,
  description:
    "Whey protein, creatina, pré-treino e shaker em um só kit. Compra feita e garantida pelo Mercado Livre, com frete grátis.",
  openGraph: {
    title: `${produto.nome} | ${marca.nome}`,
    images: ["/images/kit-recorte.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
