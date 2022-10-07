const router = require('express').Router();
const enquiriesManager = require('../managers/enquiries');

router.post('/', async(req,res) => {
    let hotel = await enquiriesManager.create(req.body);
    res.status(200).send(hotel);
})

router.put('/:id', async(req,res) => {
    let hotel = await enquiriesManager.update(req.params.id, req.body);
    res.status(200).send(hotel);
})

router.get('/', async(req,res) => {
    let hotels = await enquiriesManager.get();
    res.status(200).send(hotels);
})

router.get('/:id', async(req,res) => {
    let hotel = await enquiriesManager.getById(req.params.id);
    res.status(200).send(hotel);
})

router.delete('/:id', async(req,res) => {
    let hotel = await enquiriesManager.delete(req.params.id);
    res.status(200).send(hotel);
})

module.exports = router;