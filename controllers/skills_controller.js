import { Skills} from "../models/skills_models.js";
import { skillSchema } from "../schema/skills_schema.js";
import { User } from "../models/user_model.js";




//post skills
export const addSkills = async (req, res, next) => {

    try {
        const { error, value } = skillSchema.validate(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        //after, find the user with the id that you passed when creating the education
        const userSessionId  = req.session?.user?.id || req?.user?.id;
        const user = await User.findById(userSessionId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        //create the suer
        const skills = await Skills.create({ ...value, user: userSessionId })
        //if you find the user, push the education id you just created inside
        user.skills.push(skills._id);

        //and save the user now with the educationId
        await user.save();
        res.status(201).json(skills)


    } catch (error) {
        next(error)

    }
}






// Get All Skills
export const getAllUserSkills = async (req, res, next) => {

    try {
        //we are fetching Skills that belongs to a particular user
        const userSessionId  = req.session?.user?.id || req?.user?.id;
        const allSkills = await Skills.findOne({ user: userSessionId });
        if (!allSkills) {
            return res.status(404).send('No Skills added')
        }
        res.status(200).json({ skills: allSkills })
    } catch (error) {
        next(error)
    }

}


//update skills
export const updateUserSkill = async (req, res,next) => {
    try {
      const { error, value } = skillSchema.validate(req.body);

  
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      const userSessionId  = req.session?.user?.id || req?.user?.id;
      const user = await User.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const skill = await Skills.findByIdAndUpdate(req.params.id, value, { new: true });
        if (!skill) {
            return res.status(404).send("Skill not found");
        }
  
      res.status(200).json({ skill });
    } catch (error) {
      next(error)
    }
  };




//delete Skills
export const deleteUserSkill = async (req, res,next) => {
    try {
     
  
      const userSessionId  = req.session?.user?.id || req?.user?.id; 
      const user = await User.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const skill = await Skills.findByIdAndDelete(req.params.id);
        if (!skill) {
            return res.status(404).send("Skill not found");
        }
  
        user.skills.pull(req.params.id);
        await user.save();
      res.status(200).json("Skill deleted");
    } catch (error) {
     next(error)
    }
  };

