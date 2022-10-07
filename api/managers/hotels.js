let Hotels = require('../models/hotels');

const hotelsManager = {
    create: async data => { 
        let hotel = new Hotels({
            name: data.name,
            images: data.images,
            price_range: data.price_range,
            description: data.description,
            area: data.area
        });
    
        hotel = await hotel.save();
        return hotel;
    },

    get: async () => {
        let hotels = await Hotels.find({});
        return hotels;
    },

    getById: async (id) => {
        let hotel = await Hotels.findById(id);
        return hotel;
    },

    // getNamesList: async () => {
    //     let arr = [];
    //     let hotels = await Hotels.find({});
    //     hotels.forEach(elem => {
    //         arr.push(elem.name);
    //     });
    //     console.log(arr);
    //     return arr;
    // },

    update: async (id, data) => {
        let hotel = await Hotels.findByIdAndUpdate(id, {
            name: data.name,
            images: data.images,
            price_range: data.price_range,
            description: data.description,
            area: data.area
        }, { new: true });
        return hotel;
    },

    delete: async (id) => {
        let hotel = await Hotels.findByIdAndDelete(id);
        return hotel;
    }
}

module.exports = hotelsManager;   