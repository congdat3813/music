let mysql = require('mysql-await');
let config = {
    host    : 'localhost',
    user    : 'root',
    password: '2208',
    database: 'music'
};

let connection = mysql.createConnection(config);

exports.getAllSongs = async function(name) {
    return await connection.awaitQuery(`
        select TenBaiHat, TenCaSi, ThoiLuong, TenDanhSachPhat, TenMV
        from baihat join them using (MaBaiHat) join trinhbay using (MaBaiHat) join canhan on MaCaSi = MaNgheSi
        where TenDanhSachPhat = "${name}";
    `)
}
exports.getSumOfTime = async function (name) {
    return await connection.awaitQuery(`
        select SEC_TO_TIME(SUM(TIME_TO_SEC(ThoiLuong))) as TongThoiGian
        from baihat join them using (MaBaiHat) join trinhbay using (MaBaiHat) join canhan on MaCaSi = MaNgheSi
        where TenDanhSachPhat = "${name}";
    `)
}

