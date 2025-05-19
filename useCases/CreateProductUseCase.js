class CreateProductUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }

  async execute(produto) {
    if (!produto.nome || !produto.preco || !produto.categoria)
      throw new Error("Nome, categoria e preço são obrigatórios");

    if (produto.preco < 0 || typeof produto.preco !== "number")
      throw new Error("Preço deve ser um número maior que zero");

    return this.repository.inserir(produto);
  }
}

module.exports = { CreateProductUseCase };
