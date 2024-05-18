const mongoose = require('mongoose');

const godsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    god_type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    god_group_id: {
        type: String,
        required: true
    },
    characteristic_skill: {
        type: String,
        required: true
    },
});

const gods = mongoose.model('gods', godsSchema);

module.exports = gods;