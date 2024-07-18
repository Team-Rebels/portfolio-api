import { Education } from "../models/education_model.js";
import { educationSchema } from "../schema/education_schema.js";
import { User } from "../models/user_model.js";




//create an education
export const addEducation = async (req, res, next) => {

    try {
        const { error, value } = educationSchema.validate(req.body)
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
        const education = await Education.create({ ...value, user: userSessionId })
        //if you find the user, push the education id you just created inside
        user.education.push(education._id);

        //and save the user now with the educationId
        await user.save();

        //return the education
        res.status(201).json({ education })
        
    } catch (error) {
        next(error)
    }
}


// Get All Education
export const getAllUserEducation = async (req, res, next) => {

    try {
        //we are fetching education that belongs to a particular user
        const userSessionId  = req.session?.user?.id || req?.user?.id;
        const alleducation = await Education.find({ user: userSessionId });
    if(alleducation.length == 0){
        return res.status(404).send(alleducation)
    }
    res.status(200).json({education:alleducation})
    } catch (error) {
        next(error)
    }

}
//update user Education

export const updateUserEducation = async (req, res, next) => {
    try {
      const { error, value } = educationSchema.validate(req.body);
  
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      const userSessionId  = req.session?.user?.id || req?.user?.id;
      const user = await User.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const Educations = await Education.findByIdAndUpdate(req.params.id, value, { new: true });
        if (!Education) {
            return res.status(404).send("Education not found");
        }
  
      res.status(201).json({ Educations });
    } catch (error) {
      next(error)
    }
  };


//Delete Uuser Education

export const deleteUserEducation = async (req, res) => {
    try {
     
  
      const userSessionId  = req.session?.user?.id || req?.user?.id;
      const user = await User.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const education = await Education.findByIdAndDelete(req.params.id);
        if (!education) {
            return res.status(404).send("Education not found");
        }
  
        user.education.pull(req.params.id);
        await user.save();
      res.status(200).json("Education deleted");
    } catch (error) {
      return res.status(500).json({error})
    }
  };







