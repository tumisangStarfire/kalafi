import { databaseConnector } from '../database/databaseConnector';


export class Vaccination {
  _id?: string;
  userId: number;
  type_of_vacination_id: string;
  date_administered: Date;
  medicalFacilify?: string;


}
