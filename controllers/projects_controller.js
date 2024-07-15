import { UserProfile } from "../models/user_profile_model.js";
import { projectSchema } from "../schema/projects_schema.js";
import { User } from "../models/user_model.js";
import { projects } from "../models/project_model.js";




export const createUserProject = async (req, res) => {
    try {
      const { error, value } = projectSchema.validate({...req.body, image:req.file.filename});
  
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      const userSessionId = req.session.user.id;
     
      const user = await User.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const project = await Project.create({ ...value, user: userSessionId });
  
      user.projects.push(project._id)
  
      await user.save();
  
      res.status(201).json({ project });
    } catch (error) {
      console.log(error);
    }
  };
  