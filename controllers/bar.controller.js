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

exports.bar_details = function (req, res) {
    Bar.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.bar_update = function (req, res) {
    Bar.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, bar) {
        if (err) return next(err);
        res.send('Bar updated.');
    })
};

exports.bar_delete = function (req, res) {
    Bar.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
