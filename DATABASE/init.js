const mongoose = require('mongoose');
const Theme = require('./schema');
const themes = require("./data.js");

async function insertThemes() {
    await mongoose.connect('mongodb://127.0.0.1:27017/SIHDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await Theme.insertMany(themes);
    console.log("Themes inserted successfully!");

    mongoose.connection.close();
}

insertThemes().catch(err => console.error(err));
