import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  photo: String;
  phone?: string;
  bio: string;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [6, "Password must be up to 6 characters"],
    },
    photo: {
      type: String,
      required: [true, "Please upload a photo"],
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    phone: {
      type: String,
      default: "+234",
    },
    bio: {
      type: String,
      maxlength: [256, "Bio must not be more than 256 characters"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
