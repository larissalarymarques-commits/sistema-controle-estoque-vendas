export class Estoque {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(nome, quantidade, preco) {
    if (!nome || quantidade < 0 || preco <= 0) {
      throw new Error('Dados inválidos');
    }

    this.produtos.push({ nome, quantidade, preco });
    return true;
  }

  consultarProduto(nome) {
    return this.produtos.find(p => p.nome === nome);
  }

  venderProduto(nome, quantidade) {
    const produto = this.consultarProduto(nome);

    if (!produto || quantidade <= 0 || produto.quantidade < quantidade) {
      throw new Error('Estoque insuficiente ou produto inválido');
    }

    produto.quantidade -= quantidade;
    return true;
  }
}