const GodGroup = require('../models/godGroupModel');
const { errorResponse, successResponse } = require('../utils/apiResponse');

const getAllGodGroups = async (req, res) => {
    try {
        const godGroups = await GodGroup.find();
        return successResponse(res, 200, godGroups);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao buscar Grupos de Deuses: ${error.message}`);
    }
}

const getGodGroupById = async (req, res) => {
    try {
        const godGroup = await GodGroup.findById(req.params.id);
        if (!godGroup) {
            return errorResponse(res, 404, 'Grupo de Deuses não encontrado');
        }
        return successResponse(res, 200, godGroup);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao buscar Grupo de Deuses: ${error.message}`);
    }
}

const createGodGroup = async (req, res) => {
    try {
        const newGodGroup = new GodGroup(req.body);
        await newGodGroup.save();
        return successResponse(res, 201, newGodGroup);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao criar Grupo de Deuses: ${error.message}`);
    }
}

const updateGodGroup = async (req, res) => {
    try {
        const godGroup = await GodGroup.findByIdAndUpdate
        (req.params.id, req.body, { new: true });
        if (!godGroup) {
            return errorResponse(res, 404, 'Grupo de Deuses não encontrado');
        }
        return successResponse(res, 200, godGroup);
    }
    catch (error) {
        return errorResponse(res, 500, `Erro ao atualizar Grupo de Deuses: ${error.message}`);
    }
}

const deleteGodGroup = async (req, res) => {
    try {
        const godGroup = await GodGroup.findByIdAndDelete(req.params.id);
        if (!godGroup) {
            return errorResponse(res, 404, 'Grupo de Deuses não encontrado');
        }
        return successResponse(res, 200, 'Grupo de Deuses deletado com sucesso');
    } catch (error) {
        return errorResponse(res, 500, `Erro ao deletar Grupo de Deuses: ${error.message}`);
    }
}

module.exports = {
    getAllGodGroups,
    getGodGroupById,
    createGodGroup,
    updateGodGroup,
    deleteGodGroup
};

