const router = require('express').Router();
const hotelsManager = require('../managers/hotels');

router.post('/', async(req,res) => {
    let hotel = await hotelsManager.create(req.body);
    res.status(200).send(hotel);
})

router.put('/:id', async(req,res) => {
    let hotel = await hotelsManager.update(req.params.id, req.body);
    res.status(200).send(hotel);
})

router.get('/', async(req,res) => {
    let hotels = await hotelsManager.get();
    res.status(200).send(hotels);
})

router.get('/getById/:id', async(req,res) => {
    let hotel = await hotelsManager.getById(req.params.id);
    res.status(200).send(hotel);
})

router.get('/namesList', async(req,res) => {
    let arr = [];
    let list = await hotelsManager.get();
    list.forEach(elem => {
        arr.push(elem.name);
    });
    res.status(200).send(arr);
})

router.delete('/:id', async(req,res) => {
    let hotel = await hotelsManager.delete(req.params.id);
    res.status(200).send(hotel);
})

module.exports = router;