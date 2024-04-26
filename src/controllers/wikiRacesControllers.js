const WikiRace = require('../models/wikiRacesModel');
const { errorResponse, successResponse } = require('../utils/apiResponse');

const getAllWikiRaces = async (req, res) => {
    try {
        const wikiRaces = await WikiRace.find();
        return successResponse(res, 200, wikiRaces);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao buscar Raças: ${error.message}`);
    }
}

const getWikiRaceById = async (req, res) => {
    try {
        const wikiRace = await WikiRace.findById(req.params.id);
        if (!wikiRace) {
            return errorResponse(res, 404, "Raça não encontrada");
        }
        return successResponse(res, 200, wikiRace);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao buscar Raça: ${error.message}`);
    }
}

const createWikiRace = async (req, res) => {
    try {
        const newWikiRace = new WikiRace(req.body);
        await newWikiRace.save();
        return successResponse(res, 201, newWikiRace);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao criar Raça: ${error.message}`);
    }
}

const updateWikiRace = async (req, res) => {
    try {
        const wikiRace = await WikiRace.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!wikiRace) {
            return errorResponse(res, 404, "Raça não encontrada");
        }
        return successResponse(res, 200, wikiRace);
    }
    catch (error) {
        return errorResponse(res, 500, `Erro ao atualizar Raça: ${error.message}`);
    }
}

const deleteWikiRace = async (req, res) => {
    try {
        const wikiRace = await WikiRace.findByIdAndDelete(req.params.id);
        if (!wikiRace) {
            return errorResponse(res, 404, "Raça não encontrada");
        }
        return successResponse(res, 200, "Raça deletada com sucesso");
    } catch (error) {
        return errorResponse(res, 500, `Erro ao deletar Raça: ${error.message}`);
    }
}

module.exports = {
    getAllWikiRaces,
    getWikiRaceById,
    createWikiRace,
    updateWikiRace,
    deleteWikiRace,
};