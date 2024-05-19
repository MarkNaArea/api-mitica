const Campaigns = require("../models/campaignsModel");
const CampaignsCharactersUsers = require("../models/campaignsCharactersUsersModel");
const { errorResponse, successResponse } = require("../utils/apiResponse");

const getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaigns.find();
        return successResponse(res, 200, campaigns);
    } catch (error) {
        console.log(error);
        return errorResponse(
            res,
            500,
            `Erro ao buscar Campanhas: ${error.message}`
        );
    }
};

const getCampaignById = async (req, res) => {
    try {
        const campaign = await Campaigns.findById(req.query.id);
        if (!campaign) {
            return errorResponse(res, 404, "Campanha não encontrada");
        }
        return successResponse(res, 200, campaign);
    } catch (error) {

        return errorResponse(
            res,
            500,
            `Erro ao buscar Campanha: ${error.message}`
        );
    }
};

const getCampaignsByMasterId = async (req, res) => {
    try {
        const campaigns = await Campaigns.find({
            game_master_id: req.query.game_master_id
        });
        return successResponse(res, 200, campaigns);
    } catch (error) {
        console.log("Error: ", error);
        return errorResponse(
            res,
            500,
            `Erro ao buscar Campanhas: ${error.message}`
        );
    }
};

const getCampaignsByUserId = async (req, res) => {
    try {
        const campaignsCharactersUsers = await CampaignsCharactersUsers.find({
            user_id: req.query.user_id
        });

        let campaigns = [];
        for (let i = 0; i < campaignsCharactersUsers.length; i++) {
            let campaign = await Campaigns.findById(
                campaignsCharactersUsers[i].campaign_id
            );
            campaigns.push(campaign);
        }
        return successResponse(res, 200, campaigns);
    } catch (error) {
        console.log("Error: ", error);
        return errorResponse(
            res,
            500,
            `Erro ao buscar Campanhas: ${error.message}`
        );
    }
};

const createCampaign = async (req, res) => {
    try {
        const newCampaign = new Campaigns(req.body);
        await newCampaign.save();
        return successResponse(res, 201, newCampaign);
    } catch (error) {
        console.log("Error: ", error);
        return errorResponse(
            res,
            500,
            `Erro ao criar Campanha: ${error.message}`
        );
    }
};

const updateCampaign = async (req, res) => {
    try {
        const campaign = await Campaigns.findByIdAndUpdate(
            req.query.id,
            req.body,
            { new: true }
        );
        if (!campaign) {
            return errorResponse(res, 404, "Campanha não encontrada");
        }
        return successResponse(res, 200, campaign);
    } catch (error) {
        console.log("Error: ", error);
        return errorResponse(
            res,
            500,
            `Erro ao atualizar Campanha: ${error.message}`
        );
    }
};

const deleteCampaign = async (req, res) => {
    try {
        const campaign = await Campaigns.findByIdAndDelete(req.query.id);
        if (!campaign) {
            return errorResponse(res, 404, "Campanha não encontrada");
        }
        return successResponse(res, 200, "Campanha deletada com sucesso");
    } catch (error) {
        console.log("Error: ", error);
        return errorResponse(
            res,
            500,
            `Erro ao deletar Campanha: ${error.message}`
        );
    }
};

module.exports = {
    getAllCampaigns,
    getCampaignById,
    getCampaignsByMasterId,
    getCampaignsByUserId,
    createCampaign,
    updateCampaign,
    deleteCampaign,
};
