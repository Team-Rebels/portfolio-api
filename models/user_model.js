import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";




export const userSchema = new Schema({

    firstName: { type: String },
    lastName: { type: String, },
    otherName: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    userName: { type: String, unique: true },
    termsAndConditions: { type: Boolean, }

})
 
userSchema.plugin(toJSON)
export const UserModel = model('User', userSchema)