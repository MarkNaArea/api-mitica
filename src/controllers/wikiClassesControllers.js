const WikiClasses = require("../models/wikiClassesModel");
const { errorResponse, successResponse } = require("../utils/apiResponse");

const getAllWikiClasses = async (req, res) => {
    try {
        const wikiClasses = await WikiClasses.find();
        return successResponse(res, 200, wikiClasses);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao buscar Classes: ${error.message}`
        );
    }
};

const getWikiClassById = async (req, res) => {
    try {
        const wikiClass = await WikiClasses.findById(req.params.id);
        if (!wikiClass) {
            return errorResponse(res, 404, "Classe não encontrada");
        }
        return successResponse(res, 200, wikiClass);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao buscar Classe: ${error.message}`
        );
    }
};

const createWikiClass = async (req, res) => {
    try {
        const newWikiClass = new WikiClasses(req.body);
        await newWikiClass.save();
        return successResponse(res, 201, newWikiClass);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao criar Classe: ${error.message}`
        );
    }
};

const updateWikiClass = async (req, res) => {
    try {
        const wikiClass = await WikiClasses.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!wikiClass) {
            return errorResponse(res, 404, "Classe não encontrada");
        }
        return successResponse(res, 200, wikiClass);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao atualizar Classe: ${error.message}`
        );
    }
};

const deleteWikiClass = async (req, res) => {
    try {
        const wikiClass = await WikiClasses.findByIdAndDelete(req.params.id);
        if (!wikiClass) {
            return errorResponse(res, 404, "Classe não encontrada");
        }
        return successResponse(res, 200, "Classe deletada com sucesso");
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao deletar Classe: ${error.message}`
        );
    }
};

module.exports = {
    getAllWikiClasses,
    getWikiClassById,
    createWikiClass,
    updateWikiClass,
    deleteWikiClass
};
