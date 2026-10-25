# INSTRUCOES.md

Arquivo de instrucoes do projeto. Escreva aqui o que deve ser feito e eu sigo este documento.

Stack ja pronta:
- Next.js 16 (App Router, TypeScript, Tailwind, ESLint) em `src/app`
- Prisma 7 com SQLite local (`prisma/schema.prisma`, banco em `prisma/dev.db`)
- Client Prisma em `src/lib/prisma.ts` (importe `prisma` de `@/lib/prisma`)

Comandos:
- `npm run dev` inicia o servidor em http://localhost:3000
- `npm run db:migrate` cria e aplica uma migracao apos mudar o schema
- `npm run db:studio` abre o Prisma Studio para ver os dados

---

## 1. Objetivo

(Descreva em poucas linhas o que o sistema deve fazer.)

## 2. Funcionalidades

- [ ] 
- [ ] 
- [ ] 

## 3. Modelos de dados

(Liste as entidades e campos. Exemplo: Produto: nome, preco, url, loja, vendidos.)

## 4. Paginas e rotas

(Exemplo: `/` lista produtos, `/produtos/[id]` detalhe, `/api/produtos` API.)

## 5. Integracoes externas

(Exemplo: Mercado Livre, planilha, API de terceiros, credenciais em `.env`.)

## 6. Regras de negocio

(O que deve ser validado, calculado ou bloqueado.)

## 7. Visual

(Referencias de layout, cores, componentes.)

## 8. Observacoes

(Qualquer outra coisa que eu precise saber.)
