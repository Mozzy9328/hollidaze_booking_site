const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    images: [ {
            src: {type: String, required: true},
        }
    ],
    price_range: {type: String, required: true},
    description: {type: String, required: true},
    area: {type: String, required: true}
})

const Hotels = mongoose.model('Hotels', schema);

module.exports = Hotels;                                                              