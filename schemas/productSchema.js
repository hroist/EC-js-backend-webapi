const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String},
    rating: {type: Number},
    price: {type: Number, required: true},
    tag: {type: String},
    imageName: {type: String}
})

module.exports = mongoose.model("products", productSchema)