let Enquiries = require('../models/enquiries');

const enquiriesManager = {
    create: async data => { 
        let user = new Enquiries({
            address: data.address,
            price: data.price,
            description: data.description,
            contactNo: data.contactNo,
        });
    
        user = await user.save();
        return user;
    },

    get: async () => {
        let students = await Enquiries.find({});
        return students;
    },

    getById: async (id) => {
        let user = await Enquiries.findById(id);
        return user;
    },

    update: async (id, data) => {
        let user = await Enquiries.findByIdAndUpdate(id, {
            address: data.address,
            price: data.price,
            description: data.description,
            contactNo: data.contactNo,
        }, { new: true });
        return user;
    },

    delete: async (id) => {
        let user = await Enquiries.findByIdAndDelete(id);
        return user;
    }
}

module.exports = enquiriesManager;   