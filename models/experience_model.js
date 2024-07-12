
import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const experienceSchema = new Schema({
    companyName: { type: String },
    role: { type: String },
    skills: { type: String },
    responsibilities: { type: String },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: string },
    user: { type: Types.ObjectId, ref: 'User' }
})

experienceSchema.plugin(toJSON)
export const ExperienceModel = model('Experience', experienceSchema)