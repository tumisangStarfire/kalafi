import { HealthFacility } from "./HealthFacility";

export class CurrentMedicalCondition{

    _id?:string;
    userId:string;
    conditionName:string;
    dateofDiganosis:Date;
    healthFacility:HealthFacility  


    constructor(
        userId:string, 
        conditionName:string, 
        dateofDiagnosis: Date, 
        healthFacility:HealthFacility,
        storageId?: string, 
    ){ 
        this._id= storageId; 
        this.userId= userId; 
        this.conditionName= conditionName; 
        this.dateofDiganosis=dateofDiagnosis; 
        this.healthFacility = healthFacility;
    }   

    get getStorageId(): string {
        return this._id;
      }
    
      set setStorageId(storageId: string) {
        this._id = storageId;
      }

    get getUserId(): string {
        return this.userId;
      }
    
      set setUserId(userId: string) {
        this.userId = userId;
      } 

      get getConditionName(): string {
        return this.conditionName;
      }
    
      set setConditionName(conditionName: string) {
        this.conditionName = conditionName;
      }
    
      get getDateofDignosis(): Date {
        return this.dateofDiganosis;
      }
    
      set setDateofDignosis(dateofDiganosis: Date) {
        this.dateofDiganosis = dateofDiganosis;
      }

      get getHealthFacility():HealthFacility{
          return this.healthFacility;
      }
      set setHealthFacility(healthFacility : HealthFacility){
          this.healthFacility= healthFacility;
      }
}