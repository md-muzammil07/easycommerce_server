import User from "../model/userSchema.js";

export const userSignup = async (request, response) => {
    try {
        console.log('request recieved');
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json('User already exist');
        }
        const user = request.body;
        const newUser = new User(user);       //User schema validates hoga
        await newUser.save();
        response.status(200).json('user has been successfully registered');
    } catch (error) {
        response.status(400).json(error);
        console.log(error);
    }
}

export const userLoginIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password});
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('invalid login');
        }
    } catch (error) {
        console.log(error);
    }
};


