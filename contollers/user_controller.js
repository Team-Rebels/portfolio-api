import { UserModel } from "../models/user_model.js";
import { userSchema } from "../schema/user.js";


 export const signup = (req,res) => {
    const {error, value} = userSchema.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    } 