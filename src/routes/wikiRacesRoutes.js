const express = require("express");

const wikiRacesControllers = require("../controllers/wikiRacesControllers");

const router = express.Router();

router
    .route("/")
    .get(wikiRacesControllers.getAllWikiRaces)
    .post(wikiRacesControllers.createWikiRace)
    .patch(wikiRacesControllers.updateWikiRace)
    .delete(wikiRacesControllers.deleteWikiRace);

router.route("/search/").get(wikiRacesControllers.getWikiRaceById);

module.exports = router;