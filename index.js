const express = require('express');
const app = express();
const layouts = require("express-ejs-layouts");

const homeRoutes = require("./routes/homeRoutes.js");
const genreRoutes = require("./routes/genreRoutes");
const albumRoutes = require("./routes/albumRoutes");
const rankRoutes = require("./routes/rankRoutes");
const userRoutes = require("./routes/userRoutes");
const artistRoutes = require("./routes/artistRoutes");
const adminRoutes = require("./routes/adminRoutes");

const playlistRoutes = require("./routes/playlistRoutes");

// set to use ejs view
app.set("view engine", "ejs");

// use layouts
app.use(layouts);

// use public folder
app.use(express.static(__dirname + '/public'));

// handling incoming data
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());


// route
app.use("/", homeRoutes);
app.use("/genre", genreRoutes);
app.use("/album", albumRoutes);
app.use("/rank", rankRoutes);
app.use("/user", userRoutes);
app.use("/artist", artistRoutes);
app.use("/admin", adminRoutes);


app.use("/playlist", playlistRoutes);
// listening at port 3000
app.listen(3000, function() {
    console.log("Server is listening on port 3000!");
})