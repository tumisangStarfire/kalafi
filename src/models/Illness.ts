import { PillPrescription } from "./PillPrescription";
import { Vitals } from "./Vitals";
import mongoose, { Model, Schema, Document } from 'mongoose';

/**Illness has vitals */
export class Illness extends Document {

    _id: string;
    userId: number;
    type_of_illness: string;
    date_of_diagnosis: Date;
    doctorsNotes?: string;
    medicationPrescribed: Array<PillPrescription>;
    vitals: Vitals;


    constructor(userId: number, type_of_illness: string, date_of_diagnosis: Date, vitals: Vitals, doctorsNotes?: string) {
        super();
        this.userId = userId;
        this.type_of_illness = type_of_illness;
        this.date_of_diagnosis = date_of_diagnosis;
        this.doctorsNotes = doctorsNotes;
        this.vitals = vitals;
    }

    addInjuryPills(medicationPrescribed: PillPrescription) {
        this.medicationPrescribed.push(medicationPrescribed);
    }

}