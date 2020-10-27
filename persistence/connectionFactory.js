var mysql = require('mysql');

function createDBConn() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'paynode'
    });
}

module.exports = function() {
    return createDBConn;
}