const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BarSchema = new Schema({
    name: {type: String, required: true, max: 100},
    websiteUrl: {type: String, required: false}
});

// Export the model
module.exports = mongoose.model('Bar', BarSchema);
