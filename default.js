
import products from "./constants/product.js";
import Product from "./model/productSchema.js";

const DefaultData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("data imported Succcessfully");

    } catch (error) {
        console.log("data not imported", error);
    }
}


export default DefaultData;
