import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";




export const projectSchema = new Schema({
    projectName: { type: String },
    description: { type: String },
    contibutors: { type: String },
    date: { type: String },
    link: { type: String },
    image: { type: String },
    user: { type: Types.ObjectId, ref: 'User' }
}
)

projectSchema.plugin(toJSON)
export const Project = model('Project', projectSchema)
