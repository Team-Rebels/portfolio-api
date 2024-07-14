import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";



export const localUpload = multer({ dest: 'uploads' })

export const profilePictureUploads = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/portfolio_img/profile_img/*',
    })
});

// export const resumeUploads = multer({
//     storage: multerSaveFilesOrg({
//         apiAccessToken: process.env.SAVEFILESORG_API_KEY,
//         relativePath: '/portfolio_img/resumes/*',
//     })
// })