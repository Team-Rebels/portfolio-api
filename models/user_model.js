import { Schema, model } from "mongoose";
const userSchema = new Schema({
    user: {
        firstName: { type: String },
        lastName: { type: String, },
        otherName: { type: String },
        email: { type: String, unique: true },
        password: { type: String },
        userName: { type: String, unique: true },
        termsAndConditions: { type: Boolean, }
    },
   

    userProfile: {
        profilePicture: { type: String },
        location: { type: String },
        maritalStatus: { type: String, enum: ['single', 'married', 'prefer-not-to-say'] },
        sex: { type: String, enum: ['male', 'female', 'prefer-not-to-say'] },
        bio: { type: String },
        contact: { type: String },
        resume: { type: String },
        languages: [
            { type: String }
        ]

    },

    skills:
        [
            {
                name: { type: String },
                levelOfProficiency:
                    { type: String, enum: ['beginner', 'intermediate', 'advanced', 'expert'] }
            }
        ],

    experience: [
        {
            companyName: { type: String },
            role: { type: String },
            skills: { type: String },
            responsibilities: { type: String },
            location: { type: String },
            startDate: { type: String },
            endDate: { type: string }
        }
    ],
    education: [
        {
            schoolName: { type: String },
            program: { type: String },
            qualification: { type: String },
            grade: { type: String },
            location: { type: String },
            startDate: { type: String },
            endDate: { type: string }

        }
    ],

    achievements: [
        {
            award: { type: String },
            description: { type: String },
            date: { type: String },
            image: { type: String },
            nameOfInstitution: { type: String }
        }
    ],

    projects: [
        {
            projectName: { type: String },
            description: { type: String },
            contibutors: { type: String },
            date: { type: String },
            link: { type: String },
            image: { type: String },
            nameOfInstitution: { type: String }
        }
    ],

    socials: {
        githublink: { type: String },
        linkedinLink: { type: String },
        instagramLink: { type: String },
        twitterLink: { type: String },
    },
    volunteering: [{
        organization: { type: String },
        description: { types: String },
        skills: { type: String },
        responsibilities: { type: String },
        role: { type: String },
        location: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        projectName: { type: String }
    }]
}
)





export const User = model('User', userSchema)