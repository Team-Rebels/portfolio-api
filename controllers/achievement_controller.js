import { Achievements } from "../models/achievement_model.js";
import { AchievementSchema } from "../schema/achievements_schema.js";
import { User } from "../models/user_model.js";



//post achievement
export const createUserAchievement = async (req, res) => {
    try {
      const { error, value } = AchievementSchema.validate({  
        ...req.body,
        image: req.file.filename
      });
  
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      const userSessionId = req.session.user.id;
     
      const user = await User.findById(userSessionId);
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const achievement = await Achievements.create({ ...value, user: userSessionId });
  
      user.achievements.push(achievement._id)
  
      await user.save();
  
      res.status(201).json({ achievement });
    } catch (error) {
      console.log(error);
    }
  };


//get all achievements controller
export const getUserAchievements = async (req, res, next) => {

    try {
        //we are fetching achievements that belongs to a particular user
        const userSessionId = req.session.user.id
        const allachievements = await Achievements.find({ user: userSessionId });
        if (allachievements.length == 0) {
            return res.status(404).send('No achievement added')
        }
        res.status(200).json({ achievements: allachievements })
    } catch (error) {
        next(error)
    }

}

// //get a single  achievement
// export const oneAchievement = async (req, res, next) => {
//     try {
//         const aAchievement = await Achievements.findById(req.params.id)
//         res.status(201).json(aAchievement)
//     } catch (error) {
//         next(error)
//     }
// }

//update achievement
export const updateAchievement = async (req, res, next) => {
    try {

        const updatedAchievement = await Achievements.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json(updatedAchievement)
    } catch (error) {
        next(error)
    }
}


//delete achievement
export const deleteAchievement = async (req, res, next) => {
    try {

        const achievementDeleted = await Achievements.findByIdAndDelete(req.params.id)
        res.status(201).json('achievement deleted')

    } catch (error) {
        next(error)

    }

}


