import Product from "../model/productSchema.js";


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});
        response.json(products);
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async(request, response) => {
    try {
        const product = await Product.findOne({ 'id': request.params.id })                         //routes me id pass karrahe hai
        response.json(product);
    } catch (error) {
        console.log('Error: ', error.message);
    }

}