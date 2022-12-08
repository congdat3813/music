const userModel = require("../models/userModel");

exports.indexView = async function (req, res) {
    // let name = req.params.name;
    let users = await userModel.getAllUsers();
    let playlists = await userModel.getAllPlaylist('Phuoc Tai');
    res.render("user", { users: users, playlists: playlists });
};

exports.showSongsOfPlaylist = async function (req, res) {
    let name = req.params.name;
    let songs = await userModel.getAllSongs(name);
    res.render("user", { songs: songs })
}