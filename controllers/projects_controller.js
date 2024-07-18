
import { projectSchema } from "../schema/projects_schema.js";
import { User } from "../models/user_model.js";
import { Projects } from "../models/project_model.js";





  
  export const createUserProject = async (req, res, next) => {

    try {
        const { error, value } = projectSchema.validate(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        //after, find the user with the id that you passed when creating the education
        const userSessionId  = req.session?.user?.id || req?.user?.id;
        const user = await User.findById(userSessionId);
        if (!user) {
            return res.status(404).send({message:"User not found"});
 
        }
  //Extract the name from the session 
  // const {name} =req.body
  // const existingProject = await projects.find({name:name}, {user:userSessionId});
  // if(existingSkill){
  //   return res.status(409).json('The skill already exists for this user')
  // }

        //create the suer
        const projects = await Projects.create({ ...value, user: userSessionId })
        //if you find the user, push the education id you just created inside
        user.projects.push(projects._id);

        //and save the user now with the educationId
        await user.save();
        res.status(201).json({message:'Project created', projects})


    } catch (error) {
        next(error)

    }
}


export const getAllUserProject = async (req, res, next) => {

  try {
      //Get UserID from The Session Or Token
      const userSessionId  = req.session?.user?.id || req?.user?.id;
      const allProject = await Projects.find({ user: userSessionId });
      if (!allProject) {
          return res.status(404).send({message:'No project found', allProject})
      }
      res.status(200).json({ projects: allProject })
  } catch (error) {
      next(error)
  }

}


//Get Project By ID

export const updateUserProject = async (req, res,next) => {
  try {
    const { error, value } = projectSchema.validate(req.body);


    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const userSessionId  = req.session?.user?.id || req?.user?.id;
    const user = await User.findById(userSessionId);
    if (!user) {
      return res.status(404).send({message: "User not found"});
    }

    const project = await Projects.findByIdAndUpdate(req.params.id, value, { new: true });
      if (!project) {
          return res.status(404).send({message:"Project not found"});
      }

    res.status(200).json({ project });
  } catch (error) {
    next(error)
  }
};


export const deleteUserProject = async (req, res,next) => {
  try {
   

    const userSessionId  = req.session?.user?.id || req?.user?.id; 
    const user = await User.findById(userSessionId);
    if (!user) {
      return res.status(404).send({message:"User not found"});
    }

    const project = await Projects.findByIdAndDelete(req.params.id);
      if (!project) {
          return res.status(404).send({message:"Project not found",project});
      }

      user.projects.pull(req.params.id);
      await user.save();
    res.status(200).json({message:"Project deleted"});
  } catch (error) {
   next(error)
  }
};
