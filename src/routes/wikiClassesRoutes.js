const express = require("express");

const wikiClassesControllers = require("../controllers/wikiClassesControllers");

const router = express.Router();

router
    .route("/")
    .get(wikiClassesControllers.getAllWikiClasses)
    .post(wikiClassesControllers.createWikiClass)
    .patch(wikiClassesControllers.updateWikiClass)
    .delete(wikiClassesControllers.deleteWikiClass);

router.route("/search/").get(wikiClassesControllers.getWikiClassById);

module.exports = router;