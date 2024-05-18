const mongoose = require('mongoose');

const wikiCitiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    god_group: {
        type: String,
        required: true
    },
    focus: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    is_capitol: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const WikiCities = mongoose.model('wikiCities', wikiCitiesSchema);

module.exports = WikiCities;