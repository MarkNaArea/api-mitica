const express = require("express");

const godControllers = require("../controllers/godsControllers");

const router = express.Router();

router
    .route("/")
    .get(godControllers.getAllGods)
    .post(godControllers.createGod)
    .patch(godControllers.updateGod)
    .delete(godControllers.deleteGod);

router.route("/search/").get(godControllers.getGodById);

router.route("/search-group/").get(godControllers.getAllGodsByGroupGodId);

module.exports = router;