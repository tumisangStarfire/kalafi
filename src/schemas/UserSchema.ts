import mongoose, { model, Schema, Document } from 'mongoose';
import { AddressSchema } from './AddressSchema';

export const UserSchema: Schema = new Schema({
    email: { type: String, required: true },  //unique: true
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    cellphone: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: Number, default: 0 },
    verified: { type: Boolean, required: false }

}, { timestamps: true });