let mysql = require('mysql-await');
let config = {
    host    : 'localhost',
    user    : 'root',
    password: '2208',
    database: 'music'
};

let connection = mysql.createConnection(config);

exports.getAllGenres = async function() {
    return await connection.awaitQuery(`SELECT * from theloai`);
};

exports.getAllSongs = async function() {
    return await connection.awaitQuery(`SELECT MaBaiHat, TenBaiHat, ThoiLuong, LoiBaiHat, TenMV, TenCaSi AS TenNgheSi
                                        FROM baihat JOIN trinhbay USING(MaBaiHat) JOIN canhan ON MaNgheSi = MaCaSi
                                        UNION
                                        SELECT MaBaiHat, TenBaiHat, ThoiLuong, LoiBaiHat, TenMV, TenNhom AS TenNgheSi 
                                        FROM baihat JOIN trinhbay USING(MaBaiHat) JOIN nhom ON MaNgheSi = MaNhom`);
}

exports.getSongByGenre = async function(genre) {
    return await connection.awaitQuery(`SELECT MaBaiHat, TenBaiHat, ThoiLuong, LoiBaiHat, TenMV, TenTheLoai, TenCaSi AS TenNgheSi
                                        FROM baihat JOIN thuoctheloai USING(MaBaiHat) JOIN trinhbay USING(MaBaiHat) JOIN canhan ON MaNgheSi = MaCaSi
                                        WHERE TenTheLoai = "${genre}"
                                        UNION
                                        SELECT MaBaiHat, TenBaiHat, ThoiLuong, LoiBaiHat, TenMV, TenTheLoai, TenNhom AS TenNgheSi 
                                        FROM baihat JOIN thuoctheloai USING(MaBaiHat) JOIN trinhbay USING(MaBaiHat) JOIN nhom ON MaNgheSi = MaNhom
                                        WHERE TenTheLoai = "${genre}"`);
}