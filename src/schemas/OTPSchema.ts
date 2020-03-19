import mongoose, { model, Schema, Document } from 'mongoose';

export const OTPSchema: Schema = new Schema({
    otp_code: { type: Number, required: true },
    cellphone: { type: Number, required: true },

}, { timestamps: true });