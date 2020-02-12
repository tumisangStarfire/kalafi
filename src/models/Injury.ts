
import { PillPrescription } from './PillPrescription';
import { Vitals } from './Vitals';
import mongoose, { Model, Schema, Document, set, get } from 'mongoose';

export class Injury extends Document {

  _id: string;
  userId: number;
  injuryType: string;
  date_of_injury: Date;
  vitals: Vitals;
  medicationPrescribed: Array<PillPrescription>; //pills given to the patient [ { id: 1 } ]
  doctorsNotes?: string;

  constructor(userId: number, injuryType: string, date_of_injury: Date, doctorsNotes?: string) {
    super();
    this.userId = userId;
    this.injuryType = injuryType;
    this.date_of_injury = date_of_injury;
    this.doctorsNotes = doctorsNotes;
  }

  addInjuryPills(medicationPrescribed: PillPrescription) {
    this.medicationPrescribed.push(medicationPrescribed);
  }

  get getUserId(): number {
    return this.userId;
  }
  set setUserId(userId: number) {
    this.userId = userId;
  }




}
