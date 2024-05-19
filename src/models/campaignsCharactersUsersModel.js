const mongoose = require('mongoose');

const campaignsCharactersUsersSchema = new mongoose.Schema({
    campaign_id: {
        type: String,
        required: true,
    },
    character_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    }
});

const CampaignsCharactersUsers = mongoose.model('campaigns_characters_users', campaignsCharactersUsersSchema);

module.exports = CampaignsCharactersUsers;