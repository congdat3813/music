let mysql = require('mysql-await');
let config = {
    host    : 'localhost',
    user    : 'root',
    password: '2208',
    database: 'music',
    dateStrings: true
};

let connection = mysql.createConnection(config);
console.log("aa");
exports.getAllEvent = async function() {
    return await connection.awaitQuery(`SELECT * 
                                        from sukien`);
};
