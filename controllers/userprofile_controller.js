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
        
        //after, find the user with the id that you passed when creating the education 
        const user = await User.findById(value.user);
        if (!user) {
            return res.status(404).send('User not found');
        }
        const userProfile = await UserProfile.create(value)
        //if you find the user, push the userprofile id you just created inside
        user.userProfile.userProfile._id;

        //and save the user now with the educationId
        await user.save();

        //return the education
        res.status(201).json({ userProfile})
        
    } catch (error) {
        next(error)
    }
}

//Get a profiles
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.parms.id)
        .populate('userProfile');
        if (!user) {
            return res.status(404).send('User not found');
        }

        const profile = await UserProfile.find({ user: user._id });
        if (!profile) {
            return res.status(404).send('No profile found')
        }
        res.status(200).json(profile)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
