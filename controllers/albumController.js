const albumModel = require("../models/albumModel");

exports.indexView =  async function(req, res) {
    let album = await albumModel.getAllAlbum();
    console.log(album);
    res.render("album", {album: album});
};

exports.showSongByalbum = async function(req, res) {
    let name = req.params.name;
    let songs = await albumModel.getSongByAlbum(name);
    console.log(songs);
    res.render("albumSong", {songs: songs});
}
