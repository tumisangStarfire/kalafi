import mongoose, { Model, Schema, Document, MongooseDocument } from 'mongoose';

export class CurrentMedication extends MongooseDocument {
  id?: number;
  userId: number;
  pillName: string;
  date_prescribed: Date;
  dailyDosage: number;

  constructor(userId: number, pillName: string, date_prescribed: Date, dailyDosage: number) {
    super();
    this.userId = userId;
    this.pillName = pillName;
    this.date_prescribed = date_prescribed;
    this.dailyDosage = dailyDosage;

  }






}
