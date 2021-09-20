import mongoose from 'mongoose';
import validator from "validator";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required:true,
    },
    username: {
        type:String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("invalid email id")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        min: 10,
    },
    password: {
        type: String,
        required: true,
    }
});

const user = mongoose.model('user', userSchema);

export default user;