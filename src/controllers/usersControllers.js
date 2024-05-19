const User = require("../models/usersModel");
const { errorResponse, successResponse } = require("../utils/apiResponse");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    try {
        // Pegando os dados do body da requisição
        const { username, password } = req.body;

        // Encontra o usuario por e-mail
        const user = await User.findOne({ username });

        if (!user) {
            return errorResponse(res, 404, "Usuário não encontrado");
        }
        const passwordMatch = user.password === password;

        console.log(user)

        if (!passwordMatch) {
            return errorResponse(res, 403, "Senha incorreta");
        }

        // Gera um token JWT, com validade de 30 dias
        const token = jwt.sign({ userId: user._id, name: user.name, email: user.email }, process.env.SECRET_KEY, {
            expiresIn: "30d",
        });

        return successResponse(res, 200, { token: token, username: user.name, userId: user._id });
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Authentication failed: ${error.message}`
        );
    }
};

const registerUser = async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return errorResponse(res, 409, "Usuário já existe");
        }

        const newUser = new User(req.body);
        await newUser.save();

        return successResponse(res, 204, {user: newUser})
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, `Erro ao criar usuário: ${error.message}`);
    }
}

module.exports = {
    loginUser,
    registerUser,
};