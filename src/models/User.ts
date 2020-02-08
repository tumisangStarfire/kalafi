import { Address } from "./Address";
//TODO password hashing

import { validate, validateOrReject, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from "class-validator";


export class User {
  private id?: Number;
  private firstName: string;
  private lastName: string;
  private email: string;
  private cellphone: string;
  private password: string;
  private status?: number;
  private verified?: boolean;
  private address?: Address;

  constructor(firstName: string,
    lastName: string,
    email: string,
    cellphone: string,
    password: string,
    status: number,
    verified: boolean
  ) {


    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.cellphone = cellphone;
    this.password = password;
    this.status = status;
    this.verified = verified;
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

  get getCellphone(): string {
    return this.cellphone;
  }

  set setCellphone(cellphone: string) {
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
