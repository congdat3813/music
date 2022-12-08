const playlistModel = require("../models/playlistModel");

exports.indexView = async function (req, res) {
    // let name = req.params.name;
    let songs = await playlistModel.getAllSongs('HOTVN');
    res.render("playlist", { songs: songs });
};

exports.showSongsOfPlaylist = async function (req, res) {
    let name = req.params.name;
    let songs = await playlistModel.getAllSongs(name);
    res.render("playlist", {songs: songs});
}