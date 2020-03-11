import { ObjectId } from "mongodb";
import { HealthFacility } from "./HealthFacility";
import { VaccinationType } from "./VaccinationType";



export class Vaccination {

  _id: ObjectId;
  private userId: string;
  private typeOfVaccination: VaccinationType;
  private date_administered: Date;
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
  constructor(userId: string, typeOfVaccination: VaccinationType, date_administered: Date, healthFacility: HealthFacility) {
    this.userId = userId;
    this.typeOfVaccination = typeOfVaccination;
    this.date_administered = date_administered;
    this.healthFacility = healthFacility;
  }


}
