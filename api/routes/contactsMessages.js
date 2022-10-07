const router = require('express').Router();
const contactMessagesManager = require('../managers/contactsMessages');

router.post('/', async(req,res) => {
    let msg = await contactMessagesManager.create(req.body);
    res.status(200).send(msg);
})

router.put('/:id', async(req,res) => {
    let msg = await contactMessagesManager.update(req.params.id, req.body);
    res.status(200).send(msg);
})

router.get('/', async(req,res) => {
    let msgs = await contactMessagesManager.get();
    res.status(200).send(msgs);
})

router.get('/:id', async(req,res) => {
    let msg = await contactMessagesManager.getById(req.params.id);
    res.status(200).send(msg);
})

router.delete('/:id', async(req,res) => {
    let msg = await contactMessagesManager.delete(req.params.id);
    res.status(200).send(msg);
})

module.exports = router;