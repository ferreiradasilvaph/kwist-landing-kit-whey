/**
 * Converte a posição do cursor dentro de uma imagem em uma origem de
 * transformação (em %), limitada a 0..100. Usada pelo zoom da galeria.
 */
export function origemZoom(
  x: number,
  y: number,
  largura: number,
  altura: number,
): { x: number; y: number } {
  const limitar = (v: number) => Math.min(100, Math.max(0, v));
  return {
    x: largura > 0 ? limitar((x / largura) * 100) : 50,
    y: altura > 0 ? limitar((y / altura) * 100) : 50,
  };
}
