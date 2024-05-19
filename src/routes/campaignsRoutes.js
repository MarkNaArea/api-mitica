const express = require("express");

const campaignsControllers = require("../controllers/campaignsControllers");

const router = express.Router();

router
    .route("/")
    .get(campaignsControllers.getAllCampaigns)
    .post(campaignsControllers.createCampaign)
    .patch(campaignsControllers.updateCampaign)
    .delete(campaignsControllers.deleteCampaign);

router.route("/search/").get(campaignsControllers.getCampaignById);

router.route("/searchuser/").get(campaignsControllers.getCampaignsByUserId);

router.route("/searchmaster/").get(campaignsControllers.getCampaignsByMasterId);

module.exports = router;
