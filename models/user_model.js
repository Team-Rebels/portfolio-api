import { Schema, model, Types} from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";




export const userSchema = new Schema({

    firstName: { type: String },
    lastName: { type: String, },
    otherName: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    userName: { type: String, unique: true , default:null},
    termsAndConditions: { type: Boolean, },
    education: [{ type: Types.ObjectId, ref: 'Education' }],
    skills: [{ type: Types.ObjectId, ref: 'Skill' }],
    achievements: [{ type: Types.ObjectId, ref: 'Achievement' }],
    projects: [{ type: Types.ObjectId, ref: 'Project' }],
    userProfile: { type: Types.ObjectId, ref: 'UserProfile' },
    volunteering: [{ type: Types.ObjectId, ref: 'Volunteering' }],
    experiences: [{ type: Types.ObjectId, ref: 'Experience' }],

})
 
userSchema.plugin(toJSON)
export const User = model('User', userSchema)