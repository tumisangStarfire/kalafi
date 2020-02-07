import { databaseConnector } from '../database/databaseConnector';


export class Vaccination {
  id?: number;
  userId: number;
  type_of_vacination_id: string;
  date_administered: Date;
  medicalFacilify?: string;

  /**function to add a new vacination of user_id */
  static async create(vacination: Vaccination, callback) {
    try {
      const connection = await databaseConnector();
      await connection.query('insert into vacination set ?', [vacination], function (err, res) {
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

          if (res.insertId < 0) {
            const jsonResponse = {
              message: 'data saved',
              status: 'success',
              statusCode: 200
            }
            return jsonResponse;
          } else {
            const jsonResponse = {
              message: 'something wrong please try again',
              status: 'failed',
              statusCode: 501
            }
            return jsonResponse;
          }

        }

      });
    } catch (error) {
      console.log(error);
    }
  }

  /**function to remove vaccination record of id */
  static remove = async (vaccinationId, callback) => {
    try {
      const connection = await databaseConnector();
      let query = 'delete from vaccination where id=' + connection.escape(vaccinationId);
      await connection.query(query, function (err, res) {
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
          if (res.affectedRows < 0) { /** get the number of affected rows */
            const jsonResponse = {
              message: 'removed',
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

        }

      });
      connection.release();
    } catch (error) {
      console.log(error);
    }
  }
}
