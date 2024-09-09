const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Define the Herb Schema
const favDBSchema = new mongoose.Schema({
    herb_id: { type: String, default: uuidv4 }, // Default to a new UUID
    botanicalName: String,
    commonNames: [String],
    habitat: String,
    medicinalUses: String,
    cultivationMethods: String,
    image: String,
    vidio: String, // Added video field for each herb
    fav: { type: Boolean, default: true } // Add the fav field
});

const FavHerbs = mongoose.model('FavHerbs', favDBSchema);
module.exports = FavHerbs;
