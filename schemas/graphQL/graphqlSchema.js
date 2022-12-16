const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql

const Product = require('../productSchema')

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString},
        description: { type: GraphQLString},
        category: { type: GraphQLString},
        price: { type: GraphQLString},
        rating: { type: GraphQLString},
        tag: { type: GraphQLString},
        imageName: { type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        product: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Product.findById(args.id)
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return Product.find({})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})