import mongoose, { model, Schema, Document } from 'mongoose';

export const AddressSchema: Schema = new Schema({
    city: { type: String, required: false },
    town: { type: String, required: false },
    village: { type: String, required: false },
    streetName: { type: String, required: false },
    houseNumber: { type: Number, required: false },
});