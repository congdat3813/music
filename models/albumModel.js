let mysql = require('mysql-await');
let config = {
    host    : 'localhost',
    user    : 'root',
    password: '2208',
    database: 'music'
};

let connection = mysql.createConnection(config);
exports.getAllAlbum = async function() {
    return await connection.awaitQuery(`SELECT TenAlbum, TongThoiGian, TenCaSi AS TenNgheSi 
                                        from album JOIN canhan ON album.MaNgheSi = MaCaSi
                                        UNION
                                        SELECT TenAlbum, TongThoiGian, TenNhom AS TenNgheSi 
                                        from album JOIN nhom ON album.MaNgheSi = MaNhom`);
};


exports.getSongByAlbum = async function(album) {
    return await connection.awaitQuery(`SELECT MaBaiHat, TenBaiHat, ThoiLuong, TenAlbum, TenCaSi AS TenNgheSi
                                        FROM baihat JOIN gombaihat USING(MaBaiHat) JOIN album USING(MaAlbum) JOIN trinhbay USING(MaBaiHat) JOIN canhan ON trinhbay.MaNgheSi = MaCaSi
                                        WHERE TenAlbum = "${album}"
                                        UNION
                                        SELECT MaBaiHat, TenBaiHat, ThoiLuong, TenAlbum, TenNhom AS TenNgheSi 
                                        FROM baihat JOIN gombaihat USING(MaBaiHat) JOIN album USING(MaAlbum) JOIN trinhbay USING(MaBaiHat) JOIN nhom ON trinhbay.MaNgheSi = MaNhom
                                        WHERE TenAlbum = "${album}"`);
}
