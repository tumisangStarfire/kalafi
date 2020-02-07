import { databaseConnector } from '../database/databaseConnector';

export class UserAllergy {
  id?: number;
  userId: number;
  allergyType: string;

  set setAlleryType(allergyType: string) {
    this.allergyType = allergyType;
  }

  get getAlleryType(): string {
    return this.allergyType;
  }

  constructor(userID: number, allergyType: string) {
    this.userId = userID;
    this.allergyType = allergyType;
  }

  static create = async (allergy: UserAllergy, callback) => {
    try {
      const connection = await databaseConnector();
      await connection.query('insert into allergy set ?', [allergy], function (err, res) {
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
  static remove = async (id, callback) => {
    try {
      const connection = await databaseConnector();
      let query = 'delete from allergy where id=' + connection.escape(id);
      await connection.query(query, function (err, row) {
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
        if (row.affectedRows < 0) { /** get the number of affected rows */
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

      });
      connection.release();
    } catch (error) {
      console.log(error);
    }
  }

}
