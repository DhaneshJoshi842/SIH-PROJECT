// const mongoose = require('mongoose');
// const { v4: uuidv4 } = require('uuid');
// const FavHerbs = require('./favDBschema'); // Import the model

// const herbs = [
//     {
//         herb_id: uuidv4(), // Generate a new UUID
//         botanicalName: 'Emblica officinalis',
//         commonNames: ['Amla', 'Indian Gooseberry'],
//         habitat: 'Native to India, found in subtropical regions',
//         medicinalUses: 'Detoxifies body, boosts immunity, and improves digestion.',
//         cultivationMethods: 'Grows well in well-drained soil, full sun, and regular watering.',
//         image: 'https://www.forestaorganics.com/wp-content/uploads/2020/10/amla-heading-image-1024x805.jpg',
//         vidio: '/vidios/Amla.mp4',
//         fav: true
//     }
// ];

// async function insertThemes() {
//     try {
//         await mongoose.connect('mongodb+srv://dhaneshjoshi842:g8LaZrefvnP0U0Ea@cluster0.lhb2m.mongodb.net/', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         await FavHerbs.insertMany(herbs); // Use insertMany instead of insertOne
//         console.log("Herbs inserted successfully!");

//     } catch (error) {
//         console.error("Error inserting herbs:", error);
//     } finally {
//         mongoose.connection.close();
//     }
// }

// insertThemes();
