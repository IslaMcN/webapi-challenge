const express = require('express');
const db = require('../data/helpers/projectModel');
const router = express.Router();

router.get('/', (req, res) => {
    db.get()
    .then(data => {
        res.json(data)
    })
})

router.post('/', (req, res) => {
    const project = req.body
    db.insert(project)
    .then(data => {
        res.status(200).json({message: "Post successful"})
    })
    .catch(err => {
        console.log('Nope', err)
    })
})


router.put('/:id', (req, res) => {
    const project = req.params.id
    db.update(project, req.body)
    .then(data => {
        res.send(201).json({message:`Update: ${data} --- Update Successful`})
    })
    .catch(err => {
        console.log('Nope', err)
    })
})

router.delete('/:id', (req, res) => {
    const project = req.params.id
    db.remove(project)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        console.log('Nope', err)
    })
})

module.exports = router;