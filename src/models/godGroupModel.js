const mongoose = require('mongoose');

const godGroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const GodGroup = mongoose.model('god_groups', godGroupSchema);

module.exports = GodGroup;