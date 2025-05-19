class UpdateProductUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id, product) {
    if (!id) throw new Error("Necessário informar o ID do produto");

    const produtoExistente = await this.repository.update(id, product);
    if (!produtoExistente) throw new Error("Produto não encontrado");

    return produtoExistente;
  }
}

module.exports = { UpdateProductUseCase };
