let mysql = require('mysql-await');
let config = {
    host    : 'localhost',
    user    : 'root',
    password: '2208',
    database: 'music'
};

let connection = mysql.createConnection(config);

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM nghesi");
};

exports.getSpecifiedArtist = async function(name) {
    return await connection.awaitQuery(`SELECT TenCaSi AS TenNgheSi, GioiThieu
                                        FROM nghesi INNER JOIN canhan ON MaNgheSi = MaCaSi
                                        WHERE TenCaSi = "${name}"
                                        UNION
                                        SELECT TenNhom AS TenNgheSi, GioiThieu
                                        FROM nghesi INNER JOIN nhom ON MaNgheSi = MaNhom
                                        WHERE TenNhom = "${name}"`);
}