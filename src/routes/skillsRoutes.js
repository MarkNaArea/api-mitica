const express = require('express');

const skillsControllers = require('../controllers/skillsControllers');

const router = express.Router();

router
    .route('/')
    .get(skillsControllers.getAllSkills)
    .post(skillsControllers.createSkill)
    .patch(skillsControllers.updateSkill)
    .delete(skillsControllers.deleteSkill);

router.route('/search/').get(skillsControllers.getSkillById);

module.exports = router;