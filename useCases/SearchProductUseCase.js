class SearchProductUseCase {
  repository;
  constructor(repository) {
    this.repository = repository;
  }

  async execute(nome, categoria) {
    if (!nome && !categoria)
      throw new Error("Necessário informar o nome ou a categoria do produto");

    return this.repository.buscarPorNomeECategoria(nome, categoria);
  }
}

module.exports = { SearchProductUseCase };
