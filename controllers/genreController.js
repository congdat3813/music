const genreModel = require("../models/genreModel");

exports.indexView =  async function(req, res) {
    let genres = await genreModel.getAllGenres();
    let songs = await genreModel.getAllSongs();
    res.render("genre", {genres: genres, songs: songs});
};

exports.showSongByGenre = async function(req, res) {
    let name = req.params.name;
    let genres = await genreModel.getAllGenres();
    let songs = await genreModel.getSongByGenre(name);
    res.render("genre", {genres: genres, songs: songs});
}