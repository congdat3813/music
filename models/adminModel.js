let mysql = require('mysql-await');
let config = {
    host    : 'localhost',
    user    : 'root',
    password: '2208',
    database: 'music',
    dateStrings: true
};

let connection = mysql.createConnection(config);

exports.getAllSong = async function() {
    return await connection.awaitQuery("SELECT * FROM baihat");
}

exports.addSong = async function(MaBaiHat, TenBaiHat, ThoiLuong, LoiBaiHat, TenMV) {
    let str1 = await connection.awaitQuery(
        `INSERT INTO MV(TenMV) VALUES("${TenMV}")`
    )
    let str2 = await connection.awaitQuery(
        `INSERT INTO baihat(MaBaiHat, TenBaiHat, ThoiLuong, LoiBaiHat, TenMV) VALUES ("${MaBaiHat}", "${TenBaiHat}", "${ThoiLuong}", "${LoiBaiHat}", "${TenMV}")`
    );
    return str1 + str2;
}

exports.editSong = async function(MaBaiHat, TenBaiHat, ThoiLuong, LoiBaiHat, TenMV) {
    await connection.awaitQuery(
        `UPDATE baihat SET TenBaiHat = "${TenBaiHat}", ThoiLuong = "${ThoiLuong}", LoiBaiHat = "${LoiBaiHat}" WHERE MaBaiHat = "${MaBaiHat}"`
    );
}

exports.deleteSong = async function(MaBaiHat) {
    await connection.awaitQuery(`DELETE FROM baihat WHERE MaBaiHat = "${MaBaiHat}"`);
}

exports.getAllSolo = async function() {
    return await connection.awaitQuery("SELECT MaCaSi, TenCaSi, GioiThieu FROM canhan JOIN nghesi ON MaCaSi = MaNgheSi");
}

exports.addSolo = async function(MaCaSi, TenCaSi, GioiThieu) {
    let str1 = await connection.awaitQuery(
        `INSERT INTO nghesi(MaNgheSi, GioiThieu) VALUES ("${MaCaSi}", "${GioiThieu}")`
    );
    let str2 = await connection.awaitQuery(
        `INSERT INTO canhan(MaCaSi, TenCaSi) VALUES ("${MaCaSi}", "${TenCaSi}")`
    );
    return str1 + str2;
}

exports.editSolo = async function(MaCaSi, TenCaSi, GioiThieu) {
    let str1 = await connection.awaitQuery(
        `UPDATE nghesi SET GioiThieu = "${GioiThieu}" WHERE MaNgheSi = "${MaCaSi}"`
    );
    let str2 = await connection.awaitQuery(
        `UPDATE canhan SET TenCaSi = "${TenCaSi}" WHERE MaCaSi = "${MaCaSi}"`
    );
    return str1 + str2;
}

exports.deleteSolo = async function(MaCaSi) {
    await connection.awaitQuery(`DELETE FROM nghesi WHERE MaNgheSi = "${MaCaSi}"`);
}

//========================Album================
exports.getAllAlbum = async function() {
    return await connection.awaitQuery("SELECT * FROM Album");
}
exports.addAlbum = async function(MaAlbum, TenAlbum, NgayTao, TongThoiGian, MaNgheSi) {
    await connection.awaitQuery(
        `INSERT INTO album(MaAlbum, TenAlbum, NgayTao, TongThoiGian, MaNgheSi) VALUES ("${MaAlbum}", "${TenAlbum}", "${NgayTao}", "${TongThoiGian}", "${MaNgheSi}")`
    );
}

exports.editAlbum = async function(MaAlbum, TenAlbum, NgayTao, TongThoiGian, MaNgheSi) {
    await connection.awaitQuery(
        `UPDATE album SET TenAlbum = "${TenAlbum}", NgayTao = "${NgayTao}", TongThoiGian = "${TongThoiGian}", MaNgheSi = "${MaNgheSi}" WHERE MaAlbum = "${MaAlbum}"`
    );
}

exports.deleteAlbum = async function(MaAlbum) {
    await connection.awaitQuery(`DELETE FROM album WHERE MaAlbum = "${MaAlbum}"`);
}
//===================Gombaihat===================
exports.getSongByAlbum = async function(album) {
    return await connection.awaitQuery(`SELECT MaAlbum, MaBaiHat, TenBaiHat
                                        FROM baihat JOIN gombaihat USING(MaBaiHat) JOIN album USING(MaAlbum)
                                        WHERE MaAlbum = "${album}"`);
}
exports.addSongAlbum = async function(MaAlbum, MaBaiHat) {
    await connection.awaitQuery(
        `INSERT INTO gombaihat(MaAlbum, MaBaiHat) VALUES ("${MaAlbum}", "${MaBaiHat}")`
    );
}
exports.deleteSongAlbum = async function(MaAlbum,MaBaiHat) {
    await connection.awaitQuery(`DELETE FROM gombaihat WHERE MaBaiHat = "${MaBaiHat}" AND MaAlbum="${MaAlbum}"`);
}
//=========================Sự Kiện========================
exports.getAllEvent = async function() {
    return await connection.awaitQuery("SELECT * FROM sukien");
}

exports.addEvent = async function(MaSuKien, TenSuKien, MoTa, ThoiGian, DiaDiem) {
    await connection.awaitQuery(
        `INSERT INTO sukien(MaSuKien, TenSuKien, MoTa, ThoiGian, DiaDiem) VALUES ("${MaSuKien}", "${TenSuKien}", "${MoTa}", "${ThoiGian}", "${DiaDiem}")`
    );
}

exports.editEvent = async function(MaSuKien, TenSuKien, MoTa, ThoiGian, DiaDiem) {
    await connection.awaitQuery(
        `UPDATE sukien SET TenSuKien = "${TenSuKien}", MoTa = "${MoTa}", ThoiGian = "${ThoiGian}", DiaDiem = "${DiaDiem}" WHERE MaSuKien = "${MaSuKien}"`
    );
}

exports.deleteEvent = async function(MaSuKien) {
    await connection.awaitQuery(`DELETE FROM sukien WHERE MaSuKien = "${MaSuKien}"`);
}
//=========================Liên quan sự kiện==============
exports.getArtByEvent = async function(event) {
    return await connection.awaitQuery(`SELECT MaSuKien, MaNgheSi, TenCaSi AS TenNgheSi
                                        FROM nghesi JOIN lienquansk USING(MaNgheSi) JOIN sukien USING(MaSuKien) JOIN canhan ON nghesi.MaNgheSi = MaCaSi
                                        WHERE MaSuKien = "${event}"
                                        UNION
                                        SELECT MaSuKien, MaNgheSi, TenNhom AS TenNgheSi
                                        FROM nghesi JOIN lienquansk USING(MaNgheSi) JOIN sukien USING(MaSuKien) JOIN nhom ON nghesi.MaNgheSi = MaNhom
                                        WHERE MaSuKien = "${event}"`);
}
exports.addEventArtist = async function(MaSuKien, MaNgheSi) {
    await connection.awaitQuery(
        `INSERT INTO lienquansk(MaSuKien, MaNgheSi) VALUES ("${MaSuKien}", "${MaNgheSi}")`
    );
}
exports.deleteEventArtist = async function(MaSuKien, MaNgheSi) {
    await connection.awaitQuery(`DELETE FROM lienquansk WHERE MaSuKien = "${MaSuKien}" AND MaNgheSi="${MaNgheSi}"`);
}

exports.addSongAlbum = async function(MaAlbum, MaBaiHat) {
    await connection.awaitQuery(
        `INSERT INTO gombaihat(MaAlbum, MaBaiHat) VALUES ("${MaAlbum}", "${MaBaiHat}")`
    );
    await connection.awaitQuery(
        `UPDATE album
        INNER JOIN baihat ON baihat.MaBaiHat = "${MaBaiHat}"
        SET TongThoiGian = addtime(TongThoiGian, ThoiLuong)
        WHERE album.MaAlbum = "${MaAlbum}";`
    )
}

exports.deleteSongAlbum = async function(MaAlbum,MaBaiHat) {
    await connection.awaitQuery(`DELETE FROM gombaihat WHERE MaBaiHat = "${MaBaiHat}" AND MaAlbum="${MaAlbum}"`);
    await connection.awaitQuery(
        `UPDATE album
        INNER JOIN baihat ON baihat.MaBaiHat = "${MaBaiHat}"
        SET TongThoiGian = timediff(TongThoiGian, ThoiLuong)
        Where album.MaAlbum= "${MaAlbum}";`
    );
}