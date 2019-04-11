const Bar = require('../models/bar.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.bar_create = function (req, res) {
    console.log(req.body)
    let bar = new Bar(
        {
            name: req.body.name,
            websiteUrl: req.body.websiteUrl
        }
    );

    bar.save(function (err) {
        if (err) {
            console.log(err)
            return
        }
        res.send('Product Created successfully')
    })
};
