let mysql = require('mysql-await');
let config = {
    host    : 'localhost',
    user    : 'root',
    password: '2208',
    database: 'music'
};

let connection = mysql.createConnection(config);

exports.getAllCountry = async function() {
    return await connection.awaitQuery(`
        SELECT * FROM bangxephang
        ORDER BY TenQuocGia DESC;
    `)
}

exports.getSongByCountry = async function(country) {
    return await connection.awaitQuery(`
        SELECT MaBaiHat, TenBaiHat, TenCaSi, ThoiLuong, Hang
        from baihat join bxh_gom using (MaBaiHat) join trinhbay USING(MaBaiHat) JOIN canhan ON MaNgheSi = MaCaSi
        where TenQuocGia = '${country}'
        order by Hang;
    `);
}

exports.addSong = async function (maBaiHat, tenDSPhat, maUser, thoigian) {
    await connection.awaitQuery(`
        INSERT INTO them(MaBaiHat, TenDanhSachPhat, MaNguoiDung, ThoiGian) VALUES ('${maBaiHat}', '${tenDSPhat}', '${maUser}', '${thoigian}');
    `);
}