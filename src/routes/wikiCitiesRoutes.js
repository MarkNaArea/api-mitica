const express = require('express');

const wikiCitiesControllers = require('../controllers/wikiCitiesControllers');

const router = express.Router();

router
    .route('/')
    .get(wikiCitiesControllers.getAllWikiCities)
    .post(wikiCitiesControllers.createWikiCity)
    .patch(wikiCitiesControllers.updateWikiCity)
    .delete(wikiCitiesControllers.deleteWikiCity);

router.route('/search/').get(wikiCitiesControllers.getWikiCityById);

module.exports = router;