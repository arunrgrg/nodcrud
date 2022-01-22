const express = require('express')
const router = express.Router()
const Userdb = require('../models/userdb')

// GET

router.get('/:id', async(req, res) => {
    try {
        const userdb = await Userdb.findById(req.params.id)
        res.json(userdb)
    } catch (err) {
        res.send('error' + err)
    }
})

// POST

router.post('/', async(req, res) => {
    const userdb = new Userdb({
        name: req.body.name,
        age: req.body.age,
        id: req.body.sub
    })
    try {
        const user1 = await userdb.save()
        res.json(user1)

    } catch (err) {
        res.send("error")
    }
})


// UPDATE

router.patch('/:id', async(req, res) => {
    try {
        const userdb = await Userdb.findById(req.params.id)

        userdb.sub = req.body.sub
        const user1 = await userdb.save()
        console.log(user1)
        res.json(user1)
    } catch (err) {
        res.send('error')
    }
})

// DELETE

router.delete('/:id', async(req, res) => {
    try {
        const userdb = await Userdb.findById(req.params.id)
        userdb.sub = req.body.sub
        const user1 = await userdb.remove()
        res.json("deleted")
    } catch (err) {
        res.send('error')
    }
})


module.exports = router