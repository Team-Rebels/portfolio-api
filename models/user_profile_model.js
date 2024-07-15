import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


export const userProfilSchema = new Schema({

    profilePicture: { type: String },
    location: { type: String },
    sex: { type: String, enum: ['male', 'female', 'prefer-not-to-say'] },
    bio: { type: String },
    contact: { type: String },
    resume: { type: String },
    // languages: [{ type: String }],
    githublink: { type: String },
    linkedinLink: { type: String },
    twitterLink: { type: String },
    user: { type: Types.ObjectId, ref: 'User' }

},{timestamps:true})

userProfilSchema.plugin(toJSON)
export const UserProfile = model('UserProfile', userProfilSchema)