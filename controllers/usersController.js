const express = require('express')
const controller = express.Router()
const { default: mongoose } = require('mongoose')

const userSchema = require('../schemas/userSchema')


controller.param("id", async (req, res, next, id) => {
    req.user = await userSchema.findById(id)
    req.user = ({
        id: req.user._id.toString(),
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
    }) 
    next()
})

// http://localhost:5000/api/users
controller.post('/', (req, res) => {
    let user = {
        _id: (userSchema[userSchema.length - 1])?.id > 0 ? (userSchema[userSchema.length - 1])?.id + 1 : 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password 
    }

    userSchema.create(user)
    console.log("user created")
    res.status(201).json(user)
})

controller.get('/', async (req, res) => {
    let users = await userSchema.find()
    res.status(200).json(users)
})

controller.route('/:id').get((req, res) => {
    if(req.user != undefined)
        res.status(200).json(req.user)
    else
        res.status(404).json() 
})

controller.route('/:id').delete( async (req, res) => {
    if(req.user != undefined){
        await userSchema.deleteOne({ _id: req.user.id}) 
        res.status(204).json() 
    }
    else {
        res.status(404).json()
    }
})


module.exports = controller