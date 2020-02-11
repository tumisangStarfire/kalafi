import { Address } from "./Address";
//TODO password hashing
import mongoose, { Model, Schema, Document } from 'mongoose';


export class User extends Document {
  id?: Number;


  firstName: string;

  lastName: string;


  email: string;


  cellphone: number;

  password: string;
  status?: number; //default status of the user
  verified?: boolean;
  address?: Address;
  created_at: Date;

  constructor(firstName: string,
    lastName: string,
    email: string,
    cellphone: number,
    password: string,
    status: number,
    verified: boolean,
    address?: Address
  ) {


    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.cellphone = cellphone;
    this.password = password;
    this.status = status;
    this.verified = verified;
    this.address = address;
  }


  get getUserId(): Number {
    return this.id;
  }

  set setUserId(id: Number) {
    this.id = id;
  }

  get getFirstName(): string {
    return this.firstName;
  }

  set setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  get getLastName(): string {
    return this.lastName;
  }

  set setLastName(lastName: string) {
    this.lastName = lastName;
  }

  get getEmail(): string {
    return this.email;
  }

  set setEmail(email: string) {
    this.email = email;
  }

  get getPassword(): string {
    return this.password;
  }

  set setPassword(password: string) {
    this.password = password;
  }

  get getCellphone(): number {
    return this.cellphone;
  }

  set setCellphone(cellphone: number) {
    this.cellphone = cellphone;
  }

  get getStatus(): number {
    return this.status;
  }

  set setStatus(status: number) {
    this.status = status;
  }

  get getVerifified(): boolean {
    return this.verified;
  }

  set setVerified(verified: boolean) {
    this.verified = verified;
  }

}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  cellphone: { type: Number, required: true },
  password: { type: String, required: true },
  status: { type: Number, default: 0 },
  verified: { type: Boolean, required: false },
  created_at: { type: Date, required: false },
  updated_at: { type: Date, required: false },

});

/* UserSchema.pre("save", function (next) {
  let now = new Date();
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
}); */
//export interface UserModel extends Model<User> { };

/**Your newly created interface needs to extend Document, an interface that extends MongooseDocument,
 * NodeJS.EventEmitter & ModelProperties.
 * This will add the required functions and fields to your interface, such as save(), remove(), __v, ect... */