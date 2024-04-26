const Campaigns = require('../models/campaignsModel');
const { errorResponse, successResponse } = require('../utils/apiResponse');

const getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaigns.find();
        return successResponse(res, 200, campaigns);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao buscar Campanhas: ${error.message}`);
    }
}

const getCampaignById = async (req, res) => {
    try {
        const campaign = await Campaigns.findById(req.params.id);
        if (!campaign) {
            return errorResponse(res, 404, "Campanha não encontrada");
        }
        return successResponse(res, 200, campaign);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao buscar Campanha: ${error.message}`);
    }
}

const createCampaign = async (req, res) => {
    try {
        const newCampaign = new Campaigns(req.body);
        await newCampaign.save();
        return successResponse(res, 201, newCampaign);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao criar Campanha: ${error.message}`);
    }
}

const updateCampaign = async (req, res) => {
    try {
        const campaign = await Campaigns.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!campaign) {
            return errorResponse(res, 404, "Campanha não encontrada");
        }
        return successResponse(res, 200, campaign);
    }
    catch (error) {
        return errorResponse(res, 500, `Erro ao atualizar Campanha: ${error.message}`);
    }
}

const deleteCampaign = async (req, res) => {
    try {
        const campaign = await Campaigns.findByIdAndDelete(req.params.id);
        if (!campaign) {
            return errorResponse(res, 404, "Campanha não encontrada");
        }
        return successResponse(res, 200, "Campanha deletada com sucesso");
    } catch (error) {
        return errorResponse(res, 500, `Erro ao deletar Campanha: ${error.message}`);
    }
}

module.exports = {
    getAllCampaigns,
    getCampaignById,
    createCampaign,
    updateCampaign,
    deleteCampaign,
};