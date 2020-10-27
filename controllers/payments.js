module.exports = function(app) {
    app.get('/payments', function(req, res) {
        res.send("processing payments..")
    });

    app.post('/payments/payment', (req, res) => {
        var payment = req.body;
        console.log(payment);
        res.send('OK');
    });
}