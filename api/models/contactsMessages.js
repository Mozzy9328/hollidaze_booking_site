const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true}
})

const ContactMessages = mongoose.model('ContactMessages', schema);

module.exports = ContactMessages;                                                              