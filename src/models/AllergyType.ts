import { MongooseDocument, set, get } from "mongoose";
import { Timestamp } from "mongodb";


export interface AllergyTypes extends MongooseDocument {
    id?: number;
    allergyName: string;
    allergySeverity: string;
    allergyDescription: string;
    category: string;

    /*     constructor(allergyName: string, allergySeverity: string, allergyDescription: string, category: string){
    
        this.allergyName = allergyName;
    }
    
    set setAllergyName(allergyName: string) {
        this.allergyName = allergyName;
    }
    get getAllergyName(): string {
        return this.allergyName;
    }
    
    set setAllergySeverity(allergySeverity: string) {
        this.allergySeverity = allergySeverity;
    }
    get getAllergySeverity(): string {
        return this.allergySeverity;
    }
    
    set setAllergyDescription(allergyDescription: string) {
        this.allergyDescription = allergyDescription;
    }
    get getAllergyDescription(): string {
        return this.allergyDescription;
    }
    
    set setCategory(category: string) {
        this.category = category;
    } */


} 