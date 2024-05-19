const CampaignsCharactersUsers = require("../models/campaignsCharactersUsersModel");
const { errorResponse, successResponse } = require("../utils/apiResponse");

const getAllCampaignsCharactersUsers = async (req, res) => {
    try {
        const campaignsCharactersUsers = await CampaignsCharactersUsers.find();
        return successResponse(res, 200, campaignsCharactersUsers);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao buscar Campanhas-Personagens-Usuários: ${error.message}`
        );
    }
};

const getCampaignsCharactersUsersById = async (req, res) => {
    try {
        const campaignsCharactersUsers =
            await CampaignsCharactersUsers.findById(req.query.id);
        if (!campaignsCharactersUsers) {
            return errorResponse(
                res,
                404,
                "Campanha-Personagem-Usuário não encontrado"
            );
        }
        return successResponse(res, 200, campaignsCharactersUsers);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao buscar Campanha-Personagem-Usuário: ${error.message}`
        );
    }
};

const getCampaignsCharactersUsersByCampaignId = async (req, res) => {
    try {
        const campaignsCharactersUsers = await CampaignsCharactersUsers.find({
            campaignId: req.query.campaignId
        });
        if (!campaignsCharactersUsers) {
            return errorResponse(
                res,
                404,
                "Campanha-Personagem-Usuário não encontrado"
            );
        }
        return successResponse(res, 200, campaignsCharactersUsers);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao buscar Campanha-Personagem-Usuário: ${error.message}`
        );
    }
};

const getCampaignsCharactersUsersByCharacterId = async (req, res) => {
    try {
        const campaignsCharactersUsers = await CampaignsCharactersUsers.find({
            characterId: req.query.characterId
        });
        if (!campaignsCharactersUsers) {
            return errorResponse(
                res,
                404,
                "Campanha-Personagem-Usuário não encontrado"
            );
        }
        return successResponse(res, 200, campaignsCharactersUsers);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao buscar Campanha-Personagem-Usuário: ${error.message}`
        );
    }
};

const getCampaignsCharactersUsersByUserId = async (req, res) => {
    try {
        const campaignsCharactersUsers = await CampaignsCharactersUsers.find({
            userId: req.query.userId
        });
        if (!campaignsCharactersUsers) {
            return errorResponse(
                res,
                404,
                "Campanha-Personagem-Usuário não encontrado"
            );
        }
        return successResponse(res, 200, campaignsCharactersUsers);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao buscar Campanha-Personagem-Usuário: ${error.message}`
        );
    }
};

const createCampaignsCharactersUsers = async (req, res) => {
    try {
        const newCampaignsCharactersUsers = new CampaignsCharactersUsers(
            req.body
        );
        await newCampaignsCharactersUsers.save();
        return successResponse(res, 201, newCampaignsCharactersUsers);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao criar Campanha-Personagem-Usuário: ${error.message}`
        );
    }
};

const updateCampaignsCharactersUsers = async (req, res) => {
    try {
        const campaignsCharactersUsers =
            await CampaignsCharactersUsers.findByIdAndUpdate(
                req.query.id,
                req.body,
                { new: true }
            );
        if (!campaignsCharactersUsers) {
            return errorResponse(
                res,
                404,
                "Campanha-Personagem-Usuário não encontrado"
            );
        }
        return successResponse(res, 200, campaignsCharactersUsers);
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao atualizar Campanha-Personagem-Usuário: ${error.message}`
        );
    }
};

const deleteCampaignsCharactersUsers = async (req, res) => {
    try {
        const campaignsCharactersUsers =
            await CampaignsCharactersUsers.findByIdAndDelete(req.query.id);
        if (!campaignsCharactersUsers) {
            return errorResponse(
                res,
                404,
                "Campanha-Personagem-Usuário não encontrado"
            );
        }
        return successResponse(
            res,
            200,
            "Campanha-Personagem-Usuário deletado com sucesso"
        );
    } catch (error) {
        return errorResponse(
            res,
            500,
            `Erro ao deletar Campanha-Personagem-Usuário: ${error.message}`
        );
    }
};

module.exports = {
    getAllCampaignsCharactersUsers,
    getCampaignsCharactersUsersById,
    getCampaignsCharactersUsersByCampaignId,
    getCampaignsCharactersUsersByCharacterId,
    getCampaignsCharactersUsersByUserId,
    createCampaignsCharactersUsers,
    updateCampaignsCharactersUsers,
    deleteCampaignsCharactersUsers
};