/**
 * Arquivo principal da aplicação.
 * Configura o servidor Express e define as rotas.
 * @module app
 */
const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const { json, urlencoded } = require("body-parser");

app.use(morgan('dev'));
app.use(cors());
// Forma de ler JSON / middlewares
app.use(urlencoded({ limit: '200mb', extended: true }))
app.use(json({ limit: '200mb' }))

app.use('/',routes);

module.exports = app;