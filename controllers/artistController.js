const artistModel = require("../models/artistModel");

exports.indexView =  async function(req, res) {
    let artists = await artistModel.getAll();
    res.render("artist", {artists: artists});
};

exports.showSpecifiedArtist = async function(req, res) {
    let name = req.params.name;
    let artist = await artistModel.getSpecifiedArtist(name);
    res.render("artist", {artist: artist});
};