const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Define the Herb Schema
const HerbSchema = new mongoose.Schema({
    herb_id: { type: String, default: uuidv4 }, // Default to a new UUID
    botanicalName: String,
    commonNames: [String],
    habitat: String,
    medicinalUses: String,
    cultivationMethods: String,
    image: String,
    vidio: String, // Added video field for each herb
    fav: { type: Boolean, default: false } // Add the fav field
});

// Define the Theme Schema
const ThemeSchema = new mongoose.Schema({
    theme_id: { type: String, default: uuidv4, unique: true }, // Default to a new UUID and ensure it's unique
    title: String,
    description: String,
    image: String,
    herbs: [HerbSchema]
});

const Theme = mongoose.model('Theme', ThemeSchema);

module.exports = Theme;
