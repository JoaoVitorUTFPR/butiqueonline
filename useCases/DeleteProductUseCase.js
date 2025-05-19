class DeleteProductUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }

  async execute(productId) {
    if (!productId) throw new Error("Necessário informar o ID do produto");

    const produtoExistente = await this.repository.deletar(productId);
    if (!produtoExistente) throw new Error("Produto não encontrado");

    return produtoExistente;
  }
}

module.exports = { DeleteProductUseCase };
