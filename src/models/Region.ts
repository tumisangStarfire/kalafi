import { databaseConnector } from '../database/databaseConnector';

export class Region {
  private id?: number;
  private regionName: string;

  set setRegionName(regionName: string) {
    this.regionName = regionName;
  }

  get getRegionName(): string {
    return this.regionName;
  }

  constructor(regionName: string) {
    this.regionName = regionName;
  }
  static getRegions = async callback => {
    try {
      let query = 'SELECT * FROM region';
      const connection = await databaseConnector();
      await connection.query(query, function (err, rows, fields) {
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

        } else {
          console.log(rows);
          var region: Region = rows;
          return callback(region);
        }

      });
      connection.release();
    } catch (error) {
      console.log(error);
    }
  }
}
