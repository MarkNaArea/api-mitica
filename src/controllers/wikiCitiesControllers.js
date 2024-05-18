const WikiCities = require('../models/wikiCitiesModel');
const { errorResponse, successResponse } = require('../utils/apiResponse');

const getAllWikiCities = async (req, res) => {
    try {
        const wikiCities = await WikiCities.find();
        return successResponse(res, 200, wikiCities);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao buscar Cidades: ${error.message}`
        );
    }
}

const getWikiCityById = async (req, res) => {
    try {
        const wikiCity = await WikiCities.findById(req.query.id);
        if (!wikiCity) {
            return errorResponse(res, 404, "Cidade não encontrada");
        }
        return successResponse(res, 200, wikiCity);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao buscar Cidade: ${error.message}`
        );
    }
}

const createWikiCity = async (req, res) => {
    try {
        const newWikiCity = new WikiCities(req.body);
        await newWikiCity.save();
        return successResponse(res, 201, newWikiCity);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao criar Cidade: ${error.message}`
        );
    }
}

const updateWikiCity = async (req, res) => {
    try {
        const wikiCity = await WikiCities.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!wikiCity) {
            return errorResponse(res, 404, "Cidade não encontrada");
        }
        return successResponse(res, 200, wikiCity);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao atualizar Cidade: ${error.message}`
        );
    }
}

const deleteWikiCity = async (req, res) => {
    try {
        const wikiCity = await WikiCities.findByIdAndDelete(req.query.id);
        if (!wikiCity) {
            return errorResponse(res, 404, "Cidade não encontrada");
        }
        return successResponse(res, 200, "Cidade deletada com sucesso");
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao deletar Cidade: ${error.message}`
        );
    }
}

module.exports = {
    getAllWikiCities,
    getWikiCityById,
    createWikiCity,
    updateWikiCity,
    deleteWikiCity
};