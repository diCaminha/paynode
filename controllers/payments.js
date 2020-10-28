module.exports = function (app) {
    
    app.get('/payments', function (req, res) {
        res.send("processing payments..")
    });

    app.post('/payments/payment', (req, res) => {
        var payment = req.body;
        payment.title = "pay";

        var conn = app.persistence.connectionFactory();
        var paymentDao = new app.persistence.paymentDao(conn);

        paymentDao.save(payment, (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.json(result);
            }
        });
    });
}