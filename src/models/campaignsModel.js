const mongoose = require('mongoose');

const campaignsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    game_master_id: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Campanhas = mongoose.model('campaigns', campaignsSchema);

module.exports = Campanhas;