import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const userProfilSchema = new Schema({

    profilePicture: { type: String },
    location: { type: String },
    maritalStatus: { type: String, enum: ['single', 'married', 'prefer-not-to-say'] },
    sex: { type: String, enum: ['male', 'female', 'prefer-not-to-say'] },
    bio: { type: String },
    contact: { type: String },
    resume: { type: String },
    languages: [{ type: String }],
    githublink: { type: String },
    linkedinLink: { type: String },
    instagramLink: { type: String },
    twitterLink: { type: String },
    user: { type: Types.ObjectId, ref: 'User' }

})

userProfilSchema.plugin(toJSON)
export const UserProfileModel = model('UserProfile', userProfilSchema)