const express = require('express')
const controller = express.Router()
let users = require('../data/simulated_database_users') 

controller.param("id", async (req, res, next, id) => {
    req.user = users.find( user => user.id == id )
    next()
})

// http://localhost:5000/api/users
controller.post('/', (req, res) => {
    let user = {
        id: (users[users.length - 1])?.id > 0 ? (users[users.length - 1])?.id + 1 : 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }

    users.push(user)
    console.log("user created")
    res.status(201).json(user)
})

controller.get('/', (req, res) => {
    res.status(200).json(users)
})

// http://localhost:5000/api/users/id

controller.get('/:id', (req, res) => {
    if(req.user != undefined)
        res.status(200).json(req.user)
    else
        res.status(404).json()
})

controller.put('/:id', (req, res) => {
    if(req.user != undefined){
        users.forEach(user => {
            if (user.id == req.user.id) {
                user.firstName = req.body.firstName ? req.body.firstName : user.firstName
                user.lastName = req.body.firstName ? req.body.lastName : user.lastName
                user.email = req.body.firstName ? req.body.email : user.email
            }
        })
        res.status(200).json(req.user)
    }
    else
        res.status(404).json()
})

controller.delete('/:id', (req, res) => {
    if(req.user != undefined){
        users = users.filter(user => user.id !== req.user.id)
        res.status(204).json()
    }
    else
        res.status(404).json()
})


module.exports = controller