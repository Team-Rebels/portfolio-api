import { Volunteering } from "../models/volunteering_model.js";
import { volunteeringSchema } from "../schema/volunteering_schema.js"
import { User } from "../models/user_model.js";




//post volunteering 
export const createUserVolunteering = async (req, res,next) => {
    try {
      const { error, value } = volunteeringSchema.validate(req.body);
  
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
    
      const userSessionId  = req.session?.user?.id || req?.user?.id;
      const user = await User.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const volunteering = await Volunteering.create({
        ...value,
        user: userSessionId,
      });
  
      user.volunteering.push(volunteering._id);
  console.log('not work')
      await user.save();
  
      res.status(201).json({ volunteering });
    } catch (error) {
     next(error);
    }
  };
  

//get all volunteering controller
export const getAllUserVolunteerings = async (req, res, next) => {
    try {
      //we are fetching Volunteering that belongs to a particular user
      const userSessionId  = req.session?.user?.id || req?.user?.id;
      const allVolunteering = await Volunteering.findOne({ user: userSessionId });
      if (!allVolunteering) {
        return res.status(404).send("No Volunteering added");
      }
      res.status(200).json({ Volunteerings: allVolunteering });
    } catch (error) {
      next(error);
    }
  };
    

//update volunteering
export const updateUserVolunteering = async (req, res, next) => {
    try {
      const { error, value } = volunteeringSchema.validate(req.body);
  
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      const userSessionId  = req.session?.user?.id || req?.user?.id;
      const user = await User.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const volunteering = await Volunteering.findByIdAndUpdate(
        req.params.id,
        value,
        { new: true }
      );
      if (!volunteering) {
        return res.status(404).send("Volunteering not found");
      }
  
      res.status(200).json({ Volunteering });
    } catch (error) {
     next(error);
    }
  };


//delete volunteering
export const deleteUserVolunteering = async (req, res,next) => {
    try {
      const userSessionId  = req.session?.user?.id || req?.user?.id;
      const user = await User.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const volunteering = await Volunteering.findByIdAndDelete(req.params.id);
      if (!volunteering) {
        return res.status(404).send("Volunteering not found");
      }
  
      user.volunteering.pull(req.params.id);
      await user.save();
  
      res.status(200).json("Volunteering deleted");
    } catch (error) {
    next(error);
    }
  };


