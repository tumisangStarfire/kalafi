import { databaseConnector } from '../database/databaseConnector';


export class Vaccination {
  id?: number;
  userId: number;
  type_of_vacination_id: string;
  date_administered: Date;
  medicalFacilify?: string;
  

}
