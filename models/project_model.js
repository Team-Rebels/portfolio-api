import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";




export const projectSchema = new Schema({
    projectName: { type: String },
    description: { type: String },
    contibutors: { type: String },
    date: { type: String },
    link: { type: String },
    user: { type: Types.ObjectId, ref: 'User' }
},{timestamps:true}
)

projectSchema.plugin(toJSON)
export const projects = model('Project', projectSchema)
