
import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";



export const skillsSchema = new Schema({

    name: { type: String },
    levelOfProficiency:{ type: String, enum: ['beginner', 'intermediate', 'advanced', 'expert'] },
    user: { type: Types.ObjectId, ref: 'User' }
})

skillsSchema.plugin(toJSON)
export const Skills = model('Skill', skillsSchema)
