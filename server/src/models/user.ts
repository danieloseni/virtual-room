import {model, Schema} from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "firstname is required"]
    },
    lastname: {
        type: String,
        required: [true, "lastname is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "The email already exists"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
})


UserSchema.pre("save", async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.statics.login = async function(email, password){
    const user = await this.findOne({email})

    if(user){
        const auth = await bcrypt.compare(password, user.password)

        if(auth){

            const {firstname, lastname, email,  id} = user
            const newUser = {
                firstname, lastname, email, id
            }
            return newUser;
            // return user;
        }

        throw new Error("Invalid credentials");
    }

    throw new Error("Invalid credentials");
}

export default model('user', UserSchema);