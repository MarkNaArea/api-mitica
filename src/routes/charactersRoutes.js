const express = require('express');

const charactersControllers = require('../controllers/charactersControllers');

const router = express.Router();

router
    .route('/')
    .get(charactersControllers.getAllCharacters)
    .post(charactersControllers.createCharacter)
    .patch(charactersControllers.updateCharacter)
    .delete(charactersControllers.deleteCharacter);

router.route('/search/').get(charactersControllers.getCharacterById);

module.exports = router;