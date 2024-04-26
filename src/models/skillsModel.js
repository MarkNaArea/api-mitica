const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    name: String,
    level: Number,
    id: String,
    active_passive: String,
    range: String,
    range_level: Number,
    area_level: Number,
    turns_level: Number,
    effect_level: Number,
    cost_level: Number,
    cooldown_level: Number,
    bonus_level: Number,
    primary_level: Number,
    secundary_level: Number,
    area: String,
    area_format: String,
    primary_damage: String,
    secondary_damage: String,
    bonus: String,
    turns: Number,
    element: String,
    category: String,
    primary_class: String,
    secondary_class: String,
    effect: String,
    description: String,
    vs_test: String,
    action_cost: Number,
    cooldown: Number
});

const SkillsModel = mongoose.model('skills', skillsSchema);

module.exports = SkillsModel;