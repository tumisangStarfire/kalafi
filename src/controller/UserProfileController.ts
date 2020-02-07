import { UserProfile } from '../models/UserProfile';
import { Request, Response } from 'express';


export async function createUserProfile(request: Request, response: Response) {
    try {
        const newProfile: UserProfile = request.body;

        await UserProfile.create(newProfile, result => {
            console.log(result);
            return response.json(result).status(200);
        });
    } catch (error) {
        console.log(error);
    }
}

export async function updateUserProfile(request: Request, response: Response) {
    try {
        let id = request.body.id;
        var updateProfile: UserProfile = request.body;
        await UserProfile.update(updateProfile, id, result => {
            console.log(result);
            return response.json(result).status(200);
        })
    } catch (error) {
        console.log(error);
    }
}

export async function updateProfilePicture(request: Request, response: Response) {
    try {
        var file = request.body.profilePicture;
        let userId = request.body.userId;
        // console.log(file);
        await UserProfile.uploadProfilePicture(file, userId, result => {
            console.log(result);
            return response.json(result);
        })
    } catch (error) {
        console.log(error);
    }
}