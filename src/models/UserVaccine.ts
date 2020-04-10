import { Document } from "mongoose";
import { HealthFacility } from "./HealthFacility";

import { Vaccine } from "./Vaccine";



export class UserVaccine extends Document {

  _id: string;
  private userId: string;
  private vaccine: Vaccine;
  private dateAdministered: Date;
  private healthFacility: HealthFacility;

  /**vaccination dcocument Structure 
   * _id : ObjectId(121221qwqwqw)  
   * userID :   ObjectId(23232wewew)
   * date_administered : 2003-11-04  
   * vaccines :{ 
   *    "id": 1,
        "name": "Measles",
        "typeofVacineRef": 1
   * }, 
      healthFacility : {
         "id": 102,
        "name": "Physio Hub",
        "region": 1,
        "Speciality": {}
      }
   */
  constructor( 
    userId: string,
    vaccine: Vaccine, 
     dateAdministered: Date,
    healthFacility: HealthFacility, 
    storageId:string,
    ) {
    super(); 
    this._id = storageId;
    this.userId = userId;
    this.vaccine = vaccine;
    this.dateAdministered = dateAdministered;
    this.healthFacility = healthFacility;
  }


}
