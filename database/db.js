import mongoose from "mongoose";


const Connection = async () => {
    const URL = 'mongodb://localhost:27017/ecommerce'

    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });
        console.log("database Connection is successfull");
    } catch (error) {
        console.log('Error:', error.message)
    }
}

export default Connection;