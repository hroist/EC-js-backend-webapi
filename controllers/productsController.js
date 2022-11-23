const express = require('express')
const controller = express.Router()
let products = require('../data/simulated_database')

controller.param("artnr", (req, res, next, artnr) => {
    req.product = products.find(product => product.articleNumber == artnr)
    next()
})


// GET - READ - HÄMTA ALLA PRODUKTER - http://localhost:5000/api/products
controller.get('/', (req, res) => {
        console.log(req.query)
        const { take } = req.query
        let sortedProducts = [...products]

        if( take > 0){
            sortedProducts = sortedProducts.slice(0, Number(take))
        } 

        res.status(200).json(sortedProducts)
})


// GET - READ - HÄMTA ALLA PRODUKTER - http://localhost:5000/api/products
controller.route('/:artnr').get((req, res) => {
    if (req != undefined){
        console.log(req.params)
        res.status(200).json(req.product)
    } else {    
        res.status(404).json()
    }
})

module.exports = controller