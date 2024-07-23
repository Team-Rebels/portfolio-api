import { UserProfile } from "../models/user_profile_model.js";
import { profileSchema } from "../schema/user_profile.js";
import { User } from "../models/user_model.js";



// create a profile 


export const createUserProfile = async (req, res) => {
    try {
      const { error, value } = profileSchema.validate({
        ...req.body,
        profilePicture: req.files?.profilePicture[0].filename,
        resume: req.files?.resume[0].filename,
      });
  
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  //Get User id from session or request
      const userId = req.session?.user?.id || req?.user?.id;
     
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send({message:"User not found"});
      }

  
      const profile = await UserProfile.create({ ...value, user: userId });
  
      user.userProfile = profile._id;
  
      await user.save();
  
      res.status(201).json({ profile });
    } catch (error) {
      console.log(error);
    }
  };



  //update User Profile 
  export const updateUserProfile = async (req, res) => {
    try {
      const { error, value } = profileSchema.validate({
        ...req.body,
        profilePicture: req.files.profilePicture[0].filename,
        resume: req.files.resume[0].filename,
      });
  
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      const userId = req.session?.user?.id || req?.user?.id;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send({message:"User not found"});
      }
  
      const profile = await UserProfile.findByIdAndUpdate(req.params.id, value, { new: true });
        if (!profile) {
            return res.status(404).send({message:"Profile not found"});
        }
  
      res.status(201).json({ profile });
    } catch (error) {
      console.log(error);
    }
  };






//Get a profiles

export const getProfile = async (req, res, next) => {

    try {
        //we are fetching profile that belongs to a particular user
        const userId = req.session?.user?.id || req?.user?.id;
        const profile = await UserProfile.findOne({ user: userId });
        if (!profile) {
            return res.status(404).send({message:'No profile found',profile})
        }
        res.status(200).json({ userProfile: profile })
    } catch (error) {
        next(error)
    }

}

