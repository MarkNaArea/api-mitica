const mongoose = require('mongoose');

const wikiRaceSchema = new mongoose.Schema({
    race: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    racialTrait: {
        type: String,
        required: true
    },
    racialTraitDetails: {
        type: String,
        required: true
    },
    lifeExpectancy: {
        type: Number,
        required: true
    }
});

const WikiRace = mongoose.model('wiki_races', wikiRaceSchema);

module.exports = WikiRace;