import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const volunteeringSchema = new Schema({
    organization: { type: String },
    description: { types: String },
    skills: { type: String },
    responsibilities: { type: String },
    role: { type: String },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    projectName: { type: String }
})



volunteeringSchema.plugin(toJSON)
export const Volunteering = model('Volunteering', volunteeringSchema)