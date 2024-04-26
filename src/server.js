/**
 * Carrega as variáveis de ambiente, conecta ao banco de dados e inicia o servidor.
 * @module conn
 */

require("dotenv").config(); // Carrega as variáveis de ambiente
const mongoose = require("mongoose");
const app = require("./app");

// Conecta ao banco de dados
mongoose
    .connect(process.env.ATLAS_URI)
    .then(() => {
        console.log("\nConectado ao MongoDB");
        app.emit("pronto");
    })
    .catch((e) => console.log(e));

// Inicia o servidor
const startServer = () => {
    app.listen(process.env.PORT, () => {
        console.log(
            `Servidor rodando em http://localhost:${process.env.PORT}/`
        );
    });
};

// Inicia o servidor assim que a conexão com o banco de dados está estabelecida
app.on("pronto", startServer);
