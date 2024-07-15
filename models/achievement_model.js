import { Schema, model, Types} from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";



export const achievementSchema = new Schema({
        award: { type: String },
        description: { type: String },
        date: { type: String },
        image: { type: String },
        nameOfInstitution: { type: String },
        user: { type: Types.ObjectId, ref: 'User' }
    })


    achievementSchema.plugin(toJSON)
export const Achievements = model('Achievement', achievementSchema)