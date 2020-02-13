
import { ObjectId, Timestamp } from "mongodb";

/*constants */

enum Status {
  Non_Active = 0,
  Active = 1,
  Suspended = 2

}
/** a class */
export class User {

  /**Defines primary id that will be used as _id of the mongo collection. */
  _id: ObjectId;

  private firstName: string;
  private lastName: string;
  private cellphone: number;
  private password: string;
  private email?: string;
  private status?: Status; //default status of the user
  private verified?: boolean;
  private created_at: string;


  /** user document structure 
   *  _id = ObjectId(121221qwqwqw) ,
   * firstName : John [required], 
   * lastName : Doe [required],  
   * cellphone : 76221221 , [required] 
   * password : 1221221 [required]
   * email : johndoe.mail.com, optional  
   * status : 0 
   * verified : false
   * 
   */
  constructor(
    firstName: string,
    lastName: string,
    cellphone: number,
    password: string,
    email?: string,
    status?: Status,
    verified?: boolean,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cellphone = cellphone;
    this.password = password;
    this.email = email;
    this.status = status;
    this.verified = verified;

    /*initialize the timestamp when saving the documennt*/
    this.created_at = Date.now().toString();
  }


  get getUserId(): ObjectId {
    return this._id;
  }

  set setUserId(_id: ObjectId) {
    this._id = _id;
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

  get getStatus(): Status {
    return this.status;
  }

  set setStatus(status: Status) {
    this.status = status;
  }

  get getVerifified(): boolean {
    return this.verified;
  }

  set setVerified(verified: boolean) {
    this.verified = verified;
  }

}



