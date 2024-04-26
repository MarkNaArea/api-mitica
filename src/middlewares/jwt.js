/**
 * @fileoverview Middleware para verificação do token JWT.
 * @module middlewares/jwt
 */

const errorResponse = require("../utils/apiResponse");
const jwt = require("jsonwebtoken");

/**
 * Função de middleware para verificar o token JWT.
 * @param {Object} req - O objeto de requisição.
 * @param {Object} res - O objeto de resposta.
 * @param {Function} next - A próxima função de middleware.
 * @returns {void}
 */
const verifyToken = (req, res, next) => {
    // Recebe o token dos Headers
    const token = req.headers.authorization;

    // Verifica se há um token
    if (!token) {
        return res.status(401).json({
            status: "Erro",
            message: "Access denied. No token provided.",
        });
    }

    // Verifica o Token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                status: "Erro",
                message: "Failed to authenticate token.",
            });
        }
        // Se o token for valido, salva a informação decodificada
        req.decoded = decoded;
        next(); // Da continuidade ao codigo
    });
};

const getUserIdFromToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        return decoded.userId
    } catch (error) {
        console.error("Error decoding token:", error.message);
    }
}

module.exports = { verifyToken, getUserIdFromToken };
