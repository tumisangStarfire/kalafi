import { UserProfile } from '../models/UserProfile';
import { Request, Response } from 'express';
import { UserProfileHelper } from '../databasehelper/UserProfileHelper';


export async function createUserProfile(request: Request, response: Response) {
    try {
        const newProfile: UserProfile = request.body;

        await UserProfileHelper.create(newProfile, result => {
            console.log(result);
            return response.json(result).status(200);
        });
    } catch (error) {
        console.log(error);
    }
}

export async function updateUserProfile(request: Request, response: Response) {
    try {
        let id = request.params.id;
        var updateProfile: UserProfile = request.body;
        await UserProfileHelper.update(updateProfile, id, result => {
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
        await UserProfileHelper.uploadProfilePicture(file, userId, result => {
            console.log(result);
            return response.json(result);
        })
    } catch (error) {
        console.log(error);
    }
} 

export async function getUserProfile(request: Request, response: Response) {
    try {
        
        let userId = request.body.userId;
        // console.log(file);
        await UserProfileHelper.getUserProfile(userId, result => {
            console.log(result);
            return response.json(result);
        })
    } catch (error) {
        console.log(error);
    }
}