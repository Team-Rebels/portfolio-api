import { UserProfile } from "../models/user_profile_model";
import { profileSchema } from "../schema/user_profile";

// create a profile 
export const addUserProfile = async (req, res) => {
    try {
        const { error, value } = profileSchema.validate(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    console.log('value', value)
    const profile = await UserProfile.create(value)
    res.status(201).json(profile)
    } catch (error) {
     return res.status(500).send(error.message)
        
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
