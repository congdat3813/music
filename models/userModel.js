let mysql = require('mysql-await');
let config = {
    host    : 'localhost',
    user    : 'root',
    password: '2208',
    database: 'music'
};

let connection = mysql.createConnection(config);

exports.getAllUsers = async function () {
    return await connection.awaitQuery(`
        SELECT * FROM nguoidung;
    `);
}

exports.getAllPlaylist = async function(name) {
    return await connection.awaitQuery(`
        SELECT TenNguoiDung, nguoidung.MaNguoiDung, TenDanhSachPhat
        FROM nguoidung JOIN danhsachphat ON nguoidung.MaNguoiDung = danhsachphat.MaNguoiDung
        WHERE TenNguoiDung = '${name}';
    `)
}

