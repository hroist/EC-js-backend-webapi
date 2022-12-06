const express = require('express')
const controller = express.Router()
let products = require('../data/simulated_database_products')
const { v4: uuidv4 } = require('uuid')

controller.param("artnr", (req, res, next, artnr) => {
    req.product = products.find(product => product.articleNumber == artnr)
    next()
})

// POST - CREATE PRODUCT
controller.post('/', (req, res) => {
    let product = {
        articleNumber: uuidv4(),
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        rating: req.body.rating,
        price: req.body.price,
        tag: req.body.tag,
        imageName: req.body.imageName,

    }

    products.push(product)
    console.log("product created")
    res.status(201).json(product)
})


// GET - READ - HÄMTA ALLA ELLER NÅGRA PRODUKTER / FILTRERA MED TAGS - http://localhost:5000/api/products
controller.get('/', (req, res) => {
        const { take, tag } = req.query
        let sortedProducts = [...products]

        if(tag) {
            sortedProducts = sortedProducts.filter(product => product.tag == tag)
        }

        if( take > 0){
            sortedProducts = sortedProducts.slice(0, Number(take))
        } 

        res.status(200).json(sortedProducts)
})


// GET - READ - HÄMTA EN PRODUKT - http://localhost:5000/api/products
controller.route('/:artnr').get((req, res) => {
    if (req != undefined){
        res.status(200).json(req.product)
    } else {    
        res.status(404).json()
    }
})


// PUT - UPDATE PRODUCT
controller.route('/:artnr').put((req, res) => {
    if(req.product != undefined){
        
        let product = req.product

        product.name = req.body.name ? req.body.name : product.name
        product.category = req.body.category ? req.body.category : product.category
        product.description = req.body.description ? req.body.description : product.description
        product.rating = req.body.rating ? req.body.rating : product.rating
        product.price = req.body.price ? req.body.price : product.price
        product.tag = req.body.tag ? req.body.tag : product.tag
        product.imageName = req.body.imageName ? req.body.imageName : product.imageName

        res.status(200).json(req.product)
    }
    else
        res.status(404).json()
    })


// DELETE - DELETE PRODUCT
controller.route('/:artnr').delete((req, res) => {
    if(req.product != undefined){
        products = products.filter(product => product.articleNumber !== req.product.articleNumber)
        console.log("product deleted")
        res.status(204).json()
    }
    else
        res.status(404).json()
})

module.exports = controller