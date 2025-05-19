const express = require("express");
const { ProductRepository } = require("./repository/ProductRepository");
const { CreateProductUseCase } = require("./useCases/CreateProductUseCase");
const { DeleteProductUseCase } = require("./useCases/DeleteProductUseCase");
const { SearchProductUseCase } = require("./useCases/SearchProductUseCase");
const { UpdateProductUseCase } = require("./useCases/UpdateProductUseCase");
const Product = require("./models/Product");

require("./config/db");

const app = express();
app.use(express.json());

app.post("/produtos", async (req, res) => {
  try {
    const createProductUseCase = new CreateProductUseCase(
      new ProductRepository()
    );
    const product = await createProductUseCase.execute(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.get("/produtos", async (_req, res) => {
  const products = await new ProductRepository().buscarTodos();
  res.json(products);
});

app.get("/produtos/buscar", async (req, res) => {
  try {
    const { nome, categoria } = req.query;

    const searchProductUseCase = new SearchProductUseCase(
      new ProductRepository()
    );
    const products = await searchProductUseCase.execute(nome, categoria);

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.get("/produtos/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.put("/produtos/:id", async (req, res) => {
  try {
    const updateProductUseCase = new UpdateProductUseCase(
      new ProductRepository()
    );

    const product = await updateProductUseCase.execute(req.params.id, req.body);
    res.status(204).json(product);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.delete("/produtos/:id", async (req, res) => {
  try {
    const deleteProductUseCase = new DeleteProductUseCase(
      new ProductRepository()
    );

    const product = await deleteProductUseCase.execute(req.params.id);
    res.status(204).json(product);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
