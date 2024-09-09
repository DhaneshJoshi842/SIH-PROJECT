// express
const express = require("express");
const app = express();
const path = require("path");

// mongoose
const mongoose = require("mongoose");

// uuid
const { v4: uuidv4 } = require('uuid');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let Theme = require("./DATABASE/schema");
const FavHerbs = require("./DATABASE/favDBschema");



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/SIHDB');
    // here the above url is used to connect with perticualar data base here we connect with the test data base 
}

main().then((res) => {
    console.log("sucsess!!");
})
    .catch(err => console.log(err));




app.get('/', async (req, res) => {
    try {
        const themes = await Theme.find(); // Fetching all themes from the database
        res.render('home.ejs', { themes });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/home/:id', async (req, res) => {
    const themeId = req.params.id;

    try {
        // Find the theme with the matching ID
        const theme = await Theme.findOne({ theme_id: themeId });

        if (theme) {
            // Render the theme details page
            res.render('themeDetails.ejs', { theme });
        } else {
            res.status(404).send('Theme not found');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the theme.');
    }
});

app.get('/3Dmodel/:id', async (req, res) => {
    let id = req.params.id;

    const theme = await Theme.findOne({ 'herbs.herb_id': id }).lean();

    if (theme) {
        for (let ele of theme.herbs) {
            if (ele.herb_id === id) {
                return res.render("3Dsimulation.ejs", { ele });
            }
        }
    }

    // If no matching herb is found, you can handle it like this:
    res.status(404).send("Herb not found");
});


app.get("/searchData", async (req, res) => {
    let { herb_name } = req.query;


    if (!herb_name) {
        return res.redirect("/"); // Redirect to the home page
    }

    try {
        // Convert the herb_name to lowercase for the search
        const lowerHerbName = herb_name.toLowerCase();

        // Find the theme that contains the herb with the given common name
        const theme = await Theme.findOne({
            herbs: {
                $elemMatch: {
                    commonNames: { $elemMatch: { $regex: new RegExp(`^${lowerHerbName}$`, 'i') } }
                }
            }
        });

        if (theme) {
            // Find the specific herb and return it
            const herb = theme.herbs.find(h =>
                h.commonNames.some(name => name.toLowerCase() === lowerHerbName)
            );

            if (herb) {
                return res.render("perticularHerb.ejs", { herb }); // Send the full herb object as JSON response
            } else {
                return res.send("Herb not found"); // Ensure single response
            }
        } else {
            return res.redirect("/"); // Ensure single response
        }
    } catch (error) {
        return res.status(500).send("An error occurred"); // Ensure single response
    }
});


app.post("/fav/:themeId/:herbId", async (req, res) => {
    const themeId = req.params.themeId;
    const herbId = req.params.herbId;

    try {
        const theme = await Theme.findOne({ theme_id: themeId });
        if (!theme) return res.status(404).send('Theme not found');

        const herb = theme.herbs.find(h => h.herb_id === herbId);
        if (!herb) return res.status(404).send('Herb not found');

        // Mark the herb as a favorite
        herb.fav = true;
        await theme.save();

        // Also add it to the favorites collection if needed
        const favHerb = new FavHerbs({
            herb_id: herb.herb_id,
            botanicalName: herb.botanicalName,
            commonNames: herb.commonNames,
            habitat: herb.habitat,
            medicinalUses: herb.medicinalUses,
            cultivationMethods: herb.cultivationMethods,
            image: herb.image,
            video: herb.video,
            fav: true // Set fav to true because it's being added as a favorite
        });
        await favHerb.save();

        res.send('Herb added to favorites');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.delete("/fav/:themeId/:herbId", async (req, res) => {
    const themeId = req.params.themeId;
    const herbId = req.params.herbId;
    try {
        const theme = await Theme.findOne({ theme_id: themeId });
        if (!theme) return res.status(404).send('Theme not found');
        const herb = theme.herbs.find(h => h.herb_id === herbId);
        if (!herb) return res.status(404).send('Herb not found');

        // Remove the herb from favorites and update `fav` flag
        herb.fav = false;
        await theme.save();

        await FavHerbs.deleteOne({ herb_id: herbId });
        res.send('Herb removed from favorites');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.delete("/fav/:herbId", async (req, res) => {
    let herbId = req.params.herbId;
    await FavHerbs.deleteOne({ herb_id: herbId });
    return res.redirect("/seeFav"); // Ensure 'seeFav' is the correct EJS view
});

app.get("/seeFav", async (req, res) => {
    try {
        let favherbs = await FavHerbs.find(); // Ensure async-await for database query
        if (favherbs.length === 0) {
            return res.render("noFavherbs.ejs");
        }
        else {
            return res.render("favherbs.ejs", { favherbs });
        }
    } catch (error) {
        console.error("Error fetching favorite herbs:", error);
        res.status(500).send("Internal Server Error");
    }
});
app.listen(8080, () => {
    console.log("server is listning");
})









