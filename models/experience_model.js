
import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const experienceSchema = new Schema({
    companyName: { type: String },
    role: { type: String },
    skills: { type: String },
    responsibilities: { type: String },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    user: { type: Types.ObjectId, ref: 'User' }
})

experienceSchema.plugin(toJSON)
export const Experience = model('Experience', experienceSchema)