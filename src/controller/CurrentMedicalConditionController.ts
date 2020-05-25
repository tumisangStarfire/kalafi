import { CurrentMedicalCondition } from "../models/CurrentMedicalCondition";
import { CurrentMedicalConditionHelper } from "../databasehelper/CurrentMedicalConditionHelper";
import { Request, Response } from 'express';

var ObjectId = require('mongodb').ObjectID;

export async function saveCurrentMedicalCondition(request: Request, response: Response) {
    try {

        const newCurrentMedicalCondition: CurrentMedicalCondition = request.body;

        await CurrentMedicalConditionHelper.create(newCurrentMedicalCondition, result => {
            response.json(result).status(200);
        });

    } catch (error) {
        throw (error)
    }
}


export async function removeCurrentMedicalCondition(request: Request, response: Response) {
    try {

        let CurrentMedicalConditionId = request.params.id;//send the id as a parameter

        await CurrentMedicalConditionHelper.remove(CurrentMedicalConditionId, result => {
            return response.json(result);
        });

    } catch (error) {
        throw (error)
    }
}

export async function getUserMedicalConditionData(request: Request, response: Response) {
    try {
        let userId = request.params.userId;
       // console.log("userid on controller" + userId);
       // return response.json(userId).status(200);
        await CurrentMedicalConditionHelper.getMedicationConditionDataUsingUserId(userId, result => {
            return response.json(result).status(200);
        });

    } catch (error) {
        console.log(error);
    }

}