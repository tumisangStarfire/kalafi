import { Vaccination } from '../models/Vaccination';
import { Request, Response } from 'express';
import { VaccinationLogic } from 'businesslogic/VacinationLogic';

export async function createVaccination(request: Request, response: Response) {
    try {
        var newVaccination: Vaccination = request.body;
        await VaccinationLogic.create(newVaccination, result => {
            console.log(result);
            response.json(result);
        })
    } catch (error) {
        console.log(error)
    }
}

export async function removeVaccination(request: Request, response: Response) {
    try {
        var vaccinationId = request.params.id;
        await VaccinationLogic.remove(vaccinationId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error)
    }
}