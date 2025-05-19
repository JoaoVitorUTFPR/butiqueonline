const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  { nome: String, preco: Number, categoria: String },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);
