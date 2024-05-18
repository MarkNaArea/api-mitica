const express = require("express");

const godGroupControllers = require("../controllers/godGroupControllers");

const router = express.Router();

router
    .route("/")
    .get(godGroupControllers.getAllGodGroups)
    .post(godGroupControllers.createGodGroup)
    .patch(godGroupControllers.updateGodGroup)
    .delete(godGroupControllers.deleteGodGroup);

router.route("/search/").get(godGroupControllers.getGodGroupById);

module.exports = router;