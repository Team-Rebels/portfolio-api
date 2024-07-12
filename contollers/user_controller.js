import { UserModel } from "../models/user_model.js";
import { userSchema } from "../schema/user.js";
import * as bcrypt from 'bcrypt'



export const signup = async (req, res) => {
   const { error, value } = userSchema.validate(req.body)
   if (error) {
      return res.status(400).send(error.details[0].message)
   }
   const email = value.email
   console.log('email', email)

   const findIfUserExist = await UserModel.findOne({ email })
    if (findIfUserExist) {
         return res.statu(401).send('User has already signed Up')
   } else {
      value.password = await bcrypt.hash(value.password, 10)
      res.status(201).json(value)

      // const hashedPassword = await bcrypt.hash(value.password, 10)
      // value.password = hashedPassword

      await UserModel.create(value)
      res.status(201).json('User created successfully')
   }
}



