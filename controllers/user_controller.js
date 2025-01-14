import { User } from "../models/user_model.js";
import { userSchema } from "../schema/user.js";
import * as bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"



// controls for signup 
export const signup = async (req, res, next) => {
   try {
      // error handling
      const { error, value } = userSchema.validate(req.body)
      if (error) {
         return res.status(400).send(error.details[0].message)
      }
      const email = value.email
      // check if the user exixt 
      const findIfUserExist = await User.findOne({ email })
      if (findIfUserExist) {
         return res.status(401).send({ message: 'User has already signed Up'})
      } else {
         // hash the password
         value.password = await bcrypt.hash(value.password, 10)
         // res.status(201).json(value)

         //create a new user
         const user = await User.create(value)
         //Generate a session for the user
         req.session.user = { id: user.id }
         return res.status(201).json({
            message: "Registration successful"
      })
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
         res.status(401).json({ message:'User Not Found'});
      }
      else {
         //verify their password
         const correctPassword = bcrypt.compareSync(password, user.password);
         if (!correctPassword) {
            res.status(401).json({ message:'Invalid credential'});
         }
         else {
            //Generate a session for the user
            req.session.user = { id: user.id }
            //Return a response
            res.status(200).json({message: 'User Logged in Successfully'});
         }

      }
   } catch (error) {
      next(error)
   }
}

//login with token
export const token = async (req, res, next) => {
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
         res.status(401).json({ message:'User Not Found'});
      }
      else {
         //verify their password
         const correctPassword = bcrypt.compareSync(password, user.password);
         if (!correctPassword) {
            res.status(401).json({ message:'Invalid credential'});
         } 
      else {
         //Generate a token for the user
         const token = jwt.sign(
            { id: user.id },
             process.env.JWT_PRIVATE_KEY,
            {expiresIn:'72h'})
         //Return a response
         res.status(200).json({
            message: 'User logged in',
             accessToken: token,
            user: {
               firstName: user.firstName,
               lastName: user.lastName,
               userName: user.userName
              
            }});
      }
   
   }
} catch (error) {
      next(error)
   }
}
//Users Logout
export const logout = async (req, res, next) => {
   try {
      //Destroy user session
      await req.session.destroy();
      //Return response
      res.status(200).json({ message: 'User Logged out'})
   } catch (error) {
      next(error)
   }
};



export const profile = async (req, res, next) => {

   try {

      const userName = req.params.userName;
      const options = { sort: { startDate: -1 } }


      const userDetails = await User.find({ userName })
         .select('-password')
         .populate({
            path: 'education',
            options
         })

         .populate({
            path: 'userProfile',
            options
         })

         .populate({
            path: 'experiences',
            options
         })

         .populate({
            path: 'skills',
            options
         })

          .populate({
              path:'projects',
             options})

         .populate({
            path: 'volunteering',
            options
         })

         .populate({
            path: 'achievements',
            options: { sort: { date: -1 } }
         })


      return res.status(201).json({ user: userDetails })
   } catch (error) {
      next(error);
   }

};



//Get All Users

export const getUsers = async (req, res) => {


   const email = req.query.email?.toLowerCase()
   const userName = req.query.userName?.toLowerCase();

   const filter = {};
   if (email) {
      filter.email = email;
   }
   if (userName) {
      filter.userName = userName;
   }

   const users = await User.find(filter);

   return res.status(200).json({ users });
};
