import { UserVaccine } from '../models/UserVaccine';
import { Request, Response } from 'express';
import { VaccinationHelper } from '../databasehelper/VaccinationHelper';

export async function createUserVaccination(request: Request, response: Response) {
    try {
        var newVaccination: UserVaccine = request.body;
        await VaccinationHelper.create(newVaccination, result => {
            console.log(result);
            response.json(result);
        })
    } catch (error) {
        console.log(error);
    }
}

export async function removeUserVaccination(request: Request, response: Response) {
    try {
        var vaccinationId = request.params.id;
        await VaccinationHelper.remove(vaccinationId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
} 

export async function getAllVaccines(request : Request, response: Response){ 
    try {
        await VaccinationHelper.getAllVaccines(result=>{ 
            console.log(result);
            response.json(result);
        })
    } catch (error) {
        console.log(error)
    }
} 

export async function getUserVaccines(request : Request, response: Response){ 
    try { 
        const userId=request.params.userId;
        await VaccinationHelper.getAllUserVaccineData(userId,result=>{ 
            console.log(result);
            response.json(result);
        })
    } catch (error) {
        console.log(error)
    }
}