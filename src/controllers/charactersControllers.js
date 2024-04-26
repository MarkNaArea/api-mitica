const Characters = require('../models/charactersModel');
const { errorResponse, successResponse } = require('../utils/apiResponse');

const getAllCharacters = async (req, res) => {
    try {
        const characters = await Characters.find();
        return successResponse(res, 200, characters);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao buscar Personagens: ${error.message}`);
    }
}

const getCharacterById = async (req, res) => {
    try {
        const character = await Characters.findById(req.params.id);
        if (!character) {
            return errorResponse(res, 404, "Personagem não encontrado");
        }
        return successResponse(res, 200, character);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao buscar Personagem: ${error.message}`);
    }
}

const createCharacter = async (req, res) => {
    try {
        const newCharacter = new Characters(req.body);
        await newCharacter.save();
        return successResponse(res, 201, newCharacter);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao criar Personagem: ${error.message}`);
    }
}

const updateCharacter = async (req, res) => {
    try {
        const character = await Characters.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!character) {
            return errorResponse(res, 404, "Personagem não encontrado");
        }
        return successResponse(res, 200, character);
    }
    catch (error) {
        return errorResponse(res, 500, `Erro ao atualizar Personagem: ${error.message}`);
    }
}

const deleteCharacter = async (req, res) => {
    try {
        const character = await Characters.findByIdAndDelete(req.params.id);
        if (!character) {
            return errorResponse(res, 404, "Personagem não encontrado");
        }
        return successResponse(res, 200, "Personagem deletado com sucesso");
    } catch (error) {
        return errorResponse(res, 500, `Erro ao deletar Personagem: ${error.message}`);
    }
}

module.exports = {
    getAllCharacters,
    getCharacterById,
    createCharacter,
    updateCharacter,
    deleteCharacter,
};