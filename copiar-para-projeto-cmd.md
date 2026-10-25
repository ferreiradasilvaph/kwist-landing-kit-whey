# Instruções para o Claude Code: landing page do Kit Whey + Creatina + Pré-Treino

**Tarefa:** criar, no projeto aberto no Claude Code do **CMD**, uma landing page para o produto abaixo. A página é **original**, com a marca do usuário, e o botão de compra leva ao anúncio no Mercado Livre.

## Antes de começar

1. **Pasta do projeto:** pergunte ao usuário qual é a pasta do projeto aberto no CMD. Não adivinhe.
2. **Como a página é feita:** liste o conteúdo da pasta e descubra se é HTML puro, React, Next.js etc. Siga o padrão que já existe.
3. **Nome da marca:** pergunte ao usuário qual nome de marca e qual logo usar.

## O que a página deve ter

A estrutura segue uma página de produto comum, de cima para baixo:

1. **Galeria de imagens:** uma foto principal e miniaturas. Use as fotos do próprio usuário. Se ele ainda não tiver, use espaços reservados (placeholders) e avise.
2. **Título do produto e selo "Novo".**
3. **Bloco de preço:** preço anterior riscado, preço atual, % de desconto e parcelamento.
4. **Seletor de sabor:** Baunilha, Chocolate e Morango.
5. **Botão principal "Comprar no Mercado Livre":** abre o link do anúncio (abaixo) numa nova aba.
6. **"O que vem no kit":** os 4 itens, cada um com uma lista curta de benefícios.
7. **Modo de uso.**
8. **Ingredientes e precauções.**
9. **Perguntas frequentes (FAQ)** sobre entrega, pagamento e troca, explicando que a compra é feita e garantida pelo Mercado Livre.
10. **Rodapé** com a marca do usuário.

O layout deve funcionar no celular, que é de onde vem a maioria das compras.

## Regras obrigatórias

A página **não pode** se passar pelo Mercado Livre nem pelo vendedor do anúncio:

- **Sem identidade do Mercado Livre:** não usar logo, nome visual, cores (amarelo e azul), cabeçalho ou rodapé copiados do site deles. O nome "Mercado Livre" aparece só no texto do botão e no FAQ, para dizer onde a compra acontece.
- **Sem dados que não são do usuário:** não copiar avaliações, notas (4,8 ★), número de vendas ("+10 mil vendidos"), selos ("Loja oficial", "MercadoLíder Platinum") nem o nome da loja Vandal King.
- **Sem cópia do código:** não copiar HTML, CSS ou scripts do site do Mercado Livre. Escreva o código do zero.
- **Imagens:** não baixar nem embutir as fotos do anúncio (links `mlstatic.com`) sem o usuário confirmar que tem direito de usá-las.
- **Textos:** reescreva a descrição com outras palavras. Não copie o texto do vendedor literalmente.
- **Dados pessoais:** nenhum dado pessoal (nome, e-mail, endereço de comprador) entra no código.
- **Preço:** o preço muda com frequência. Coloque o valor num único lugar fácil de editar e mostre um aviso "preço sujeito a alteração, confira no Mercado Livre".

## Informações do produto (consultadas em 24/10/2026)

- **Produto:** Kit Whey Protein + Creatina + Pré-Treino + Shaker, da marca Bulk Nutrition.
- **Link do anúncio:** https://produto.mercadolivre.com.br/MLB-3417706739-kit-whey-protein-isolado-creatina-pre-treino-shaker-_JM
  - Se o usuário participar do Programa de Afiliados do Mercado Livre, peça o **link de afiliado** dele e use esse no lugar.
- **Preço:** de R$ 229,90 por R$ 134,90 (41% OFF), ou 12x de R$ 13,33.
- **Sabores:** Baunilha, Chocolate e Morango.
- **Frete:** grátis, pelo Mercado Livre.
- **Itens do kit:**
  1. **Whey Protein Blend 900 g:** dose de 40 g com 22 g de proteína, 4 g de BCAA e 4 g de glutamina.
  2. **Creatina Monohidratada 300 g:** dose de 3 g, uma vez ao dia.
  3. **Pré-Treino Stoutness 300 g:** com beta-alanina, taurina, cafeína, arginina e tirosina. Dose de 10 g, de 20 a 30 minutos antes do treino.
  4. **Shaker 600 ml.**
- **Modo de uso:**
  - Whey: 40 g em 200 ml de líquido, após o treino.
  - Creatina: 3 g em 200 ml, uma vez ao dia.
  - Pré-treino: 10 g em 200 ml, de 20 a 30 minutos antes do treino.
- **Precauções:** não indicado para gestantes, lactantes, crianças ou pessoas sensíveis à cafeína. Consultar médico ou nutricionista antes de usar. Contém lactose e não é livre de glúten. Idade mínima recomendada: 19 anos.

## Ao terminar

1. Mostre ao usuário os arquivos criados e como abrir a página no navegador.
2. Não faça commit nem publique nada sem o usuário pedir.
