const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    god: {
        type: String,
        required: true
    },
    attributes: {
        strength: {
            type: Number,
            required: true
        },
        dexterity: {
            type: Number,
            required: true
        },
        constitution: {
            type: Number,
            required: true
        },
        intelligence: {
            type: Number,
            required: true
        },
        wisdom: {
            type: Number,
            required: true
        },
        charisma: {
            type: Number,
            required: true
        },
        braveness: {
            type: Number,
            required: true
        }
    },
    masteries: {
        acrobatics: {
            type: Number,
            required: true
        },
        stealth: {
            type: Number,
            required: true
        },
        perception: {
            type: Number,
            required: true
        },
        investigation: {
            type: Number,
            required: true
        },
        medicine: {
            type: Number,
            required: true
        },
        thievery: {
            type: Number,
            required: true
        },
        intimidation: {
            type: Number,
            required: true
        },
        persuasion: {
            type: Number,
            required: true
        },
        survivalism: {
            type: Number,
            required: true
        },
        arcane_knowledge: {
            type: Number,
            required: true
        },
        war_art: {
            type: Number,
            required: true
        },
        melee_combat: {
            type: Number,
            required: true
        },
        shooting: {
            type: Number,
            required: true
        },
        engineering: {
            type: Number,
            required: true
        }
    },
    inventory: {
        type: [String],
        required: true
    },
    skills: {
        type: [String],
        required: true
    }
});

const Character = mongoose.model('characters', characterSchema);

module.exports = Character;