import { describe, it, expect } from 'vitest';
import { Estoque } from './estoque.js';

describe('Testes do sistema de estoque', () => {
  it('deve cadastrar um produto', () => {
    const estoque = new Estoque();

    estoque.adicionarProduto('Camiseta', 10, 50);

    expect(estoque.consultarProduto('Camiseta').quantidade).toBe(10);
  });

  it('deve realizar uma venda', () => {
    const estoque = new Estoque();

    estoque.adicionarProduto('Calça', 5, 80);
    estoque.venderProduto('Calça', 2);

    expect(estoque.consultarProduto('Calça').quantidade).toBe(3);
  });

  it('não deve permitir venda sem estoque suficiente', () => {
    const estoque = new Estoque();

    estoque.adicionarProduto('Vestido', 2, 100);

    expect(() => estoque.venderProduto('Vestido', 5)).toThrow(
      'Estoque insuficiente ou produto inválido'
    );
  });
});
