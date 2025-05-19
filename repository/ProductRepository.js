const Product = require("../models/Product");

class ProductRepository {
  async inserir(produto) {
    return await Product.create(produto);
  }

  async buscarTodos() {
    return await Product.find();
  }

  async buscarPorNomeECategoria(nome, categoria) {
    const filtro = {};
    if (nome) filtro.nome = new RegExp(nome, "i");
    if (categoria) filtro.categoria = new RegExp(categoria, "i");
    return await Product.find(filtro);
  }

  async deletar(id) {
    return await Product.findByIdAndDelete(id);
  }

  findOne(id) {
    return Product.findOne({ _id: id });
  }

  async update(id, data) {
    await Product.updateOne({ _id: id }, data);
    return this.findOne(id);
  }
}

module.exports = { ProductRepository };
