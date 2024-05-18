const Gods = require("../models/godsModel.js.js");
const GodGroup = require("../models/godGroupModel.js");
const { errorResponse, successResponse } = require("../utils/apiResponse.js");

const getAllGods = async (req, res) => {
    try {
        const gods = await Gods.find();
        return successResponse(res, 200, gods);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao buscar Deuses: ${error.message}`
        );
    }
};

const getGodById = async (req, res) => {
    try {
        const god = await Gods.findById(req.params.id);
        if (!god) {
            return errorResponse(res, 404, "Deus não encontrado");
        }
        return successResponse(res, 200, god);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao buscar Deus: ${error.message}`);
    }
};

const getAllGodsByGroupGodId = async (req, res) => {
    try {
        const gods = await Gods.find({ god_group_id: req.params.god_group_id });
        if (!gods) {
            return errorResponse(res, 404, "Deuses não encontrados");
        }
        return successResponse(res, 200, gods);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao buscar Deuses: ${error.message}`
        );
    }
}

const createGod = async (req, res) => {
    try {
        const newGod = new Gods(req.body);
        await newGod.save();
        return successResponse(res, 201, newGod);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao criar Deus: ${error.message}`);
    }
};

const updateGod = async (req, res) => {
    try {
        const god = await Gods.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!god) {
            return errorResponse(res, 404, "Deus não encontrado");
        }
        return successResponse(res, 200, god);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao atualizar Deus: ${error.message}`
        );
    }
};

const deleteGod = async (req, res) => {
    try {
        const god = await Gods.findByIdAndDelete(req.params.id);
        if (!god) {
            return errorResponse(res, 404, "Deus não encontrado");
        }
        return successResponse(res, 200, "Deus deletado com sucesso");
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao deletar Deus: ${error.message}`
        );
    }
};

module.exports = {
    getAllGods,
    getGodById,
    getAllGodsByGroupGodId,
    createGod,
    updateGod,
    deleteGod
};
