const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    address: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    contactNo: {type: String, required: true}
})

const Enquiries = mongoose.model('Enquiries', schema);

module.exports = Enquiries;                                                              