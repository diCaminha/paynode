var mysql = require('mysql');

function createDBConn() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'paynode'
    });
}

module.exports = function() {
    return createDBConn;
}