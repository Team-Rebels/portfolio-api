import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";



export const achievementUploads = multer ({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/achievements_img/*'    
    })
})



export const remoteUploads = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/portfolio/*',
    })
})