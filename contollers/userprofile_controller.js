import { UserProfile } from "../models/user_profile_model.js";
import { profileSchema } from "../schema/user_profile.js";
import { User } from "../models/user_model.js";


// create a profile 
export const addUserProfile = async (req, res, next) => {

    try {
        const { error, value } = profileSchema.validate(req.body)
        if (error) {
            return res.status(400).send(error.details[0].message)
        }
        const profile = await UserProfile.create(value)
        //after, find the user with the id that you passed when creating the education 
        const user = await User.findById(value.user);
        if (!user) {
            return res.status(404).send('User not found');
        }
        //if you find the user, push the userprofile id you just created inside
        user.profile.push(profile._id);

        //and save the user now with the educationId
        await user.save();

        //return the education
        res.status(201).json({ profile })
        
    } catch (error) {
        next(error)
    }
}

//Get All profiles
export const getAllProfile = async (req, res) => {
    try {
        const profile = await UserProfile.find()
        if (profile.length = 0) {
            return res.status(404).send('No profile found')
        }
        res.status(200).json(profile)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
