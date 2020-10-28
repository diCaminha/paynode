function PaymentDao(connection) {
    this._connection = connection;
}

PaymentDao.prototype.save = function (payment, callback) {
    this._connection.query('INSERT INTO payments SET ?', payment, callback);
}

PaymentDao.prototype.list = function (callback) {
    this._connection.query('select * from payments', callback);
}

PaymentDao.prototype.getById = function (id, callback) {
    this._connection.query('select * from payments where id = ' + [id], callback);
}

module.exports = function() {
    return PaymentDao;
}