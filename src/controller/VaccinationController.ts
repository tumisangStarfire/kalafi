import { Vaccination } from '../models/Vaccination';
import { Request, Response } from 'express';

export async function createVaccination(request: Request, response: Response) {
    try {
        var newVaccination: Vaccination = request.body;
        await Vaccination.create(newVaccination, result => {
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
        await Vaccination.remove(vaccinationId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error)
    }
}