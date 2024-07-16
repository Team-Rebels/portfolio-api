import { Experience } from "../models/experience_model.js";
import { experienceSchema } from "../schema/experience_schema.js";
import { profileSchema } from "../schema/user_profile.js";
import { User } from "../models/user_model.js";



//post experience       
export const addExperience = async (req, res, next) => {

    console.log('yess Boss')
    try {
        const { error, value } = experienceSchema.validate(req.body)
        if (error) {
            return res.status(400).send(error.details[0].message)
        }
         //after, find the user with the id that you passed when creating the education
         const userSessionId  = req.session?.user?.id || req?.user?.id;

        const user = await User.findById(userSessionId);
        if (!user) {
          return res.status(404).send("User not found");
        }
        //create the suer
        const experience = await Experience.create({ ...value, user: userSessionId })
        //if you find the user, push the education id you just created inside
        user.experiences.push(experience._id);

        //and save the user now with the educationId
        await user.save();

        //return the education
        res.status(201).json({ experience })
        
    } catch (error) {
        next(error)
    }
}




//get all experience controller
export const getAllUserExperience = async (req, res) => {
    try {
      //we are fetching Experience that belongs to a particular user
      const userSessionId  = req.session?.user?.id || req?.user?.id;
      const allExperience = await Experience.find({ user: userSessionId });
      if (allExperience.length == 0) {
        return res.status(404).send("No Experience added");
      }
      res.status(200).json({ Experience: allExperience });
    } catch (error) {
      return res.status(500).json({error})
    }
  };



//update experience
export const updateUserExperience = async (req, res,next) => {
    try {
      const { error, value } = experienceSchema.validate(req.body);
  
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      const userSessionId  = req.session?.user?.id || req?.user?.id;
      const user = await User.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const experience = await Experience.findByIdAndUpdate(req.params.id, value, { new: true });
        if (!experience) {
            return res.status(404).send("experience not found");
        }
  
      res.status(200).json({ experience });
    } catch (error) {
      next(error)
    }
  };

//delete experience
  export const deleteUserExperience = async (req, res) => {
    try {
     
  
      const userSessionId  = req.session?.user?.id || req?.user?.id; 
      const user = await User.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const experience = await Experience.findByIdAndDelete(req.params.id);
        if (!experience) {
            return res.status(404).send("experience not found");
        }
  
        user.experiences.pull(req.params.id);
        await user.save();
      res.status(200).json("Experience deleted");
    } catch (error) {
      return res.status(500).json({error})
    }
  };


