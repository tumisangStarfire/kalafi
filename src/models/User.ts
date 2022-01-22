import { ObjectId, Timestamp } from "mongodb";
import * as bcrypt from 'bcrypt'; 
import  Profile  from './UserProfile'; 

/*constants */

enum Status {
  Non_Active = 0,
  Active = 1,
  Suspended = 2

}
/** a class */
export default class User  {

  /**Defines primary id that will be used as _id of the mongo collection. */
  _id: ObjectId;
  private firstName: string;
  private lastName: string;
  private cellphone: number;
  private password: string;
  private email?: string;
  private status?: Status; //default status of the user
  private profile : Profile;
  private verified?: boolean;
  private created_at : Date;
  private updated_at : Date;



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
    _id : ObjectId,
    firstName: string,
    lastName: string,
    cellphone: number,
    password: string,
    email?: string,
    status?: Status,
    profile ?:  Profile,
    verified?: boolean, 
    created_at?: Date,
    updated_at?: Date,
  ) { 
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.cellphone = cellphone;
    this.password = password;
    this.email = email;
    this.status = status;
    this.profile = profile
    this.verified = verified;

    /*initialize the timestamp when saving the documennt*/
    this.created_at = created_at,
    this.updated_at = updated_at
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

   get getProfile(): Profile {
    return this.profile;
  }

  set setProfile(profile: Profile) {
    this.profile = profile;
  }

  get getVerifified(): boolean {
    return this.verified;
  }

  set setVerified(verified: boolean) {
    this.verified = verified;
  } 

  set setCreatedAt(created_at :Date){
    this.created_at = new Date();
  } 

  set setUpdatedAt(updated_at :Date){
    this.updated_at = new Date();
  }

  public hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  } 

 static checkIfPasswordAndConfirmPasswordMatch(password :string, confirmPassword: string){ 
    if(password === confirmPassword) 
      return true 
    else 
      return false 

  }

}



