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

})

router.post('/:id', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;