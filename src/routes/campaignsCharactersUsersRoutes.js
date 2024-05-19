const express = require('express');

const campaignsCharactersUsersControllers = require('../controllers/campaignsCharactersUsersControllers');

const router = express.Router();

router
    .route('/')
    .get(campaignsCharactersUsersControllers.getAllCampaignsCharactersUsers)
    .post(campaignsCharactersUsersControllers.createCampaignsCharactersUsers)
    .patch(campaignsCharactersUsersControllers.updateCampaignsCharactersUsers)
    .delete(campaignsCharactersUsersControllers.deleteCampaignsCharactersUsers)

router
    .route('/search')
    .get(campaignsCharactersUsersControllers.getCampaignsCharactersUsersById)

router
    .route('/searchcampaign')
    .get(campaignsCharactersUsersControllers.getCampaignsCharactersUsersByCampaignId)

router
    .route('/searchcharacter')
    .get(campaignsCharactersUsersControllers.getCampaignsCharactersUsersByCharacterId)

router
    .route('/searchuser')
    .get(campaignsCharactersUsersControllers.getCampaignsCharactersUsersByUserId)

module.exports = router;