import { User } from "../models/user_model.js";
import { userSchema } from "../schema/user.js";
import * as bcrypt from 'bcrypt'


// controls for signup 
export const signup = async (req, res, next) => {
   try {
      // error handling
      const { error, value } = userSchema.validate(req.body)
      if (error) {
         return res.status(400).send(error.details[0].message)
      }
      const email = value.email
      console.log('email', email)
      // check if the user exixt 
      const findIfUserExist = await User.findOne({ email })
      if (findIfUserExist) {
         return res.statu(401).send('User has already signed Up')
      } else {
         // hash the password
         value.password = await bcrypt.hash(value.password, 10)
         res.status(201).json(value)

         //create a new user
         await UserModel.create(value)
         res.status(201).json('User created successfully')
      }
   } catch (error) {
      next(error)
   }
};

//create a login 
export const login = async (req, res, next) => {
   try {
      //disstruturing 
      const { email, userName, password } = req.body
      const user = await User.findOne({
         $or: [
            { email: email },
            { userName: userName }
         ]

      });
      if (!user) {
         res.status(401).json('User Not Found');
      } else {
         //verify their password
         const correctPassword = bcrypt.compareSync(password, user.password);
         if (!correctPassword) {
            res.status(401).json('Invalid credential');
         } else {
            //Generate a session for the user
            req.session.user = { id: user.id }
            //Return a response
            res.status(200).json('User Logged in Successfully');
         }

      }
   } catch (error) {
      next(error)
   }
}

//Get a user profile
export const profile = async (req, res, next) => {
   try {
     //Find a User by Id 
     const user = await User
       .findById(req.session.user.id)
       .select('-password');
     //Return response
     res.status(200).json(user);
   } catch (error) {
    next(error)
   }
  
  };

  //Users Logout
  export const logout = async (req, res, next) => {
   try {
     //Destroy user session
     await req.session.destroy();
     //Return response
     res.status(200).json('User Logged out')
   } catch (error) {
     next(error)
   }
  };
 




