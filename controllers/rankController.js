const rankModel = require("../models/rankModel");

exports.indexView = async function (req, res) {
    let countries = await rankModel.getAllCountry();
    let songs = await rankModel.getSongByCountry('Viet Nam');
    res.render("rank", { countries: countries, songs: songs });
};

exports.showRankByCountry = async function (req, res) {
    let name = req.params.name;
    let countries = await rankModel.getAllCountry();
    let songs = await rankModel.getSongByCountry(name);
    res.render("rank", { countries: countries, songs: songs });
};

// exports.addSong = async function(req, res) {
//     try {
//         const thoigian = new Date();
//         await rankModel.addSong(req.body.MaBaiHat, req.body.TenBaiHat, req.body.ThoiLuong, thoigian);
//     } catch (err) {
//         console.log(err);
//     }

//     return res.redirect("/admin/song");
// }