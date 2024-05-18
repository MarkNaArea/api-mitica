const mongoose = require('mongoose');

const wikiClassesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mechanic_1: {
        type: String,
        required: true
    },
    mechanic_2: {
        type: String,
        required: true
    },
    mechanic_3: {
        type: String,
        required: true
    },
    mechanic_4: {
        type: String,
        required: true
    },
});

const WikiClasses = mongoose.model('wiki_classes', wikiClassesSchema);

module.exports = WikiClasses;