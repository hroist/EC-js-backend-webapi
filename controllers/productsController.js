const express = require('express')
const controller = express.Router()
let products = require('../data/simulated_database')

controller.param("artnr", (req, res, next, artnr) => {
    req.product = products.find(product => product.articleNumber == artnr)
    next()
})

// GET - READ - HÄMTA ALLA PRODUKTER - http://localhost:5000/api/products
const {take} = req.query
controller.get(`/:take=${take}`, (httpRequest, httpResponse) => {
    httpResponse.status(200).json(products)
})

// GET - READ - HÄMTA ALLA PRODUKTER - http://localhost:5000/api/products
controller.get('/:artnr', (httpRequest, httpResponse) => {
    if (httpRequest != undefined)
        httpResponse.status(200).json(httpRequest.product)
    else    
        httpResponse.status(404).json()
})

module.exports = controller