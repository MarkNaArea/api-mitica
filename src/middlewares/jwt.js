import errorResponse from "../utils/apiResponse";
import { verify } from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    // Recebe o token dos Headers
    const token = req.headers.authorization;

    // Verifica se há um token
    if (!token) {
        return errorResponse(res, 401, "Access denied. No token provided.");
    }

    // Verifica o Token
    verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return errorResponse(res, 403, "Failed to authenticate token.");
        }
        // Se o token for valido, salva a informação decodificada
        req.decoded = decoded;
        next(); // Da continuidade ao codigo
    });
};

export { verifyToken };