const adminModel = require("../models/adminModel");

exports.indexView =  async function(req, res) {
    res.render("admin/index");
};

exports.albumView = async function(req, res) {
    res.render("admin/editAlbum");
}

exports.eventView = async function(req, res) {
    let events = await adminModel.getAllEvent();
    res.render("admin/editEvent", {events: events});
}

exports.songView = async function(req, res) {
    let songs = await adminModel.getAllSong();
    res.render("admin/editSong", {songs:songs});
}

exports.artistView = async function(req, res) {
    let solos = await adminModel.getAllSolo();
    res.render("admin/editArtist", {solos: solos});
}

exports.accountView = async function(req, res) {
    res.render("admin/editAccount");
}

exports.addSong = async function(req, res) {
    try {
        await adminModel.addSong(req.body.MaBaiHat, req.body.TenBaiHat, req.body.ThoiLuong, req.body.LoiBaiHat, req.body.TenMV);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/song");
}

exports.editSong = async function(req, res) {
    try {
        await adminModel.editSong(req.body.MaBaiHat, req.body.TenBaiHat, req.body.ThoiLuong, req.body.LoiBaiHat, req.body.TenMV);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/song");
}

exports.deleteSong = async function(req, res) {
    try {
        await adminModel.deleteSong(req.body.MaBaiHat);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/song");
}


/////////////////
//solo
/////////////////
exports.addSolo = async function(req, res) {
    try {
        await adminModel.addSolo(req.body.MaCaSi, req.body.TenCaSi, req.body.GioiThieu);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/artist");
}

exports.editSolo = async function(req, res) {
    try {
        await adminModel.editSolo(req.body.MaCaSi, req.body.TenCaSi, req.body.GioiThieu);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/artist");
}

exports.deleteSolo = async function(req, res) {
    try {
        await adminModel.deleteSolo(req.body.MaCaSi);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/artist");
}

//===============Album=================
exports.albumView = async function(req, res) {
    let albums = await adminModel.getAllAlbum();
    res.render("admin/editAlbum", {albums:albums});
}
exports.addAlbum = async function(req, res) {
    try {
        await adminModel.addAlbum(req.body.MaAlbum, req.body.TenAlbum, req.body.NgayTao, req.body.TongThoiGian, req.body.MaNgheSi);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/albums");
}

exports.editAlbum = async function(req, res) {
    try {
        await adminModel.editAlbum(req.body.MaAlbum, req.body.TenAlbum, req.body.NgayTao, req.body.TongThoiGian, req.body.MaNgheSi);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/albums");
}

exports.deleteAlbum = async function(req, res) {
    try {
        await adminModel.deleteAlbum(req.body.MaAlbum);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/albums");
}
//============Gombaihat==========
exports.albumSongView = async function(req, res) {
    let id = req.params.id;
    let songs = await adminModel.getSongByAlbum(id);
    res.render("admin/editAlbumSong", {songs:songs});
}
exports.addSongAlbum = async function(req, res) {
    try {
        await adminModel.addSongAlbum(req.body.MaAlbum, req.body.MaBaiHat);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/albums");
}
exports.deleteSongAlbum = async function(req, res) {
    try {
        await adminModel.deleteSongAlbum(req.body.MaAlbum, req.body.MaBaiHat);
        console.log(req.body.MaBaiHat);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/albums");
}
//==============Sự Kiện===========================
exports.addEvent = async function(req, res) {
    try {
        await adminModel.addEvent(req.body.MaSuKien, req.body.TenSuKien, req.body.MoTa, req.body.ThoiGian, req.body.DiaDiem);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/events");
}

exports.editEvent = async function(req, res) {
    try {
        await adminModel.editEvent(req.body.MaSuKien, req.body.TenSuKien, req.body.MoTa, req.body.ThoiGian, req.body.DiaDiem);
    } catch (err) {
        console.log(err);
    }
    return res.redirect("/admin/events");
}

exports.deleteEvent = async function(req, res) {
    try {
        await adminModel.deleteEvent(req.body.MaSuKien);
        console.log(req.body.MaSuKien);
    } catch (err) {
        console.log(err);
    }
    return res.redirect("/admin/events");
}
//======================Lien quan sự kiện=======================
exports.eventArtistView = async function(req, res) {
    let id = req.params.id;
    let arts = await adminModel.getArtByEvent(id);
    res.render("admin/editEventArtist", {arts:arts});
}
exports.addEventArtist = async function(req, res) {
    try {
        await adminModel.addEventArtist(req.body.MaSuKien, req.body.MaNgheSi);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/events");
}
exports.deleteEventArtist = async function(req, res) {
    try {
        await adminModel.deleteEventArtist(req.body.MaSuKien, req.body.MaNgheSi);
    } catch (err) {
        console.log(err);
    }

    return res.redirect("/admin/events");
}
