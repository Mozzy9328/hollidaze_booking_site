let ContactMessages = require('../models/contactsMessages');

const contactMessagesManager = {
    create: async data => { 
        let user = new ContactMessages({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        });
    
        user = await user.save();
        return user;
    },

    get: async () => {
        let students = await ContactMessages.find({});
        return students;
    },

    getById: async (id) => {
        let user = await ContactMessages.findById(id);
        return user;
    },

    update: async (id, data) => {
        let user = await ContactMessages.findByIdAndUpdate(id, {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        }, { new: true });
        return user;
    },

    delete: async (id) => {
        let user = await ContactMessages.findByIdAndDelete(id);
        return user;
    }
}

module.exports = contactMessagesManager;   