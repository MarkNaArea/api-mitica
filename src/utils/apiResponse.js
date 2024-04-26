/**
 * @fileoverview Funções para manipulação de respostas de API.
 * @module apiResponse
 */

/**
 * Função que retorna uma resposta de erro para uma requisição HTTP.
 *
 * @param {Object} res - O objeto de resposta HTTP.
 * @param {number} statusCode - O código de status HTTP.
 * @param {string} message - A mensagem de erro.
 * @returns {Object} - O objeto de resposta JSON contendo o status e a mensagem de erro.
 */
const errorResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({
        status: "Erro",
        message: message,
    });
};

/**
 * Função que retorna uma resposta de sucesso para uma requisição HTTP.
 *
 * @param {Object} res - O objeto de resposta HTTP.
 * @param {number} statusCode - O código de status HTTP.
 * @param {JSON} data - Os dados de resposta.
 * @returns {Object} - O objeto de resposta JSON contendo o status e os dados de resposta.
 */
const successResponse = (res, statusCode, data) => {
    return res.status(statusCode).json(data);
};

module.exports = {
    errorResponse,
    successResponse
};




