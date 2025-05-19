const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const mongoUri =
  "mongodb+srv://alunobutique:nj8moajqFiBcA4bF@butique.2gdikli.mongodb.net/butique";

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado ao MongoDB local"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB local:", err));
