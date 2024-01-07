import mongoose, {Schema, Document} from 'mongoose';
import validator from 'validator'

export interface IUser extends Document{
name: string,
email: string,
}

const userSchema = new Schema({
name: {
    type: String,
    required: [true, 'Please add a name']
},
email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true,
    validate: [validator.isEmail, 'Please provide a valid email']
},


})