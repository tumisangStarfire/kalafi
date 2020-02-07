import { databaseConnector } from '../database/databaseConnector';


export class PillPrescription {
  id?: number;
  pill_prescribed_to: number; // what was the pill presribed to illness/injury
  pillName: string;
  date_prescribed: Date;
  dailyDosage: number;
  pillsGiven?: number;
  pillsUsed?: number;

  constructor(pillName: string, date_prescribed: Date, dailyDosage: number) {
    this.pillName = pillName;
    this.date_prescribed = date_prescribed;
    this.dailyDosage = dailyDosage;

  }
  //gets the prescriptions remaining pills
  static getRemainingPills(pillsGiven: number, pillsUsed: number) {
    let result = pillsGiven - pillsUsed;
    return result;
  }

  static create = async (pillPrescription: PillPrescription, callback) => {
    try {
      const connection = await databaseConnector();
      await connection.query('insert into PillPrescription set ?', [pillPrescription], function (err, res) {
        //Do not throw err as it will crash the server. 
        if (err) {
          console.log(err.message);
          //rollback the operation  
          connection.end();
          const jsonResponse = {
            message: 'something went wrong please try again',
            status: 'failed',
            statusCode: 501
          }
          return callback(jsonResponse);

        }
        console.log(res);
        if (res.insertId !== null) {
          const jsonResponse = {
            message: 'data saved',
            status: 'success',
            statusCode: 200
          }
          return callback(jsonResponse);
        } else {
          const jsonResponse = {
            message: 'something wrong please try again',
            status: 'failed',
            statusCode: 501
          }
          return callback(jsonResponse);
        }

      });
      connection.release();
    } catch (error) {

    }
  }

}
