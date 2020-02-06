import { databaseConnector } from '../database/databaseConnector';

export class UserProfile {
  id?: number;
  userId: number;
  date_of_birth: Date;
  gender?: string;
  omang?: number;
  profilePicture?: string;
  weight: number;
  height: number;
  bmi: number;
  bloodType: string;

  get getUserId(): number {
    return this.userId;
  }

  public calculateBMI(weight: number, height: number) {
    return this.bmi = weight / (height * height);
  }

  public calculateAge(date_of_birth: Date): number {
    var todaysDate = new Date();
    const birthDate = new Date(date_of_birth);
    let age = todaysDate.getFullYear() - birthDate.getFullYear();
    var month = todaysDate.getMonth() - birthDate.getMonth();
    return age;
  }


  getHealthRisk(bmi: number): string {
    if (bmi < 15) {

      console.log("You are in 'Very severely underweight' Category");
      return 'Severely Underweight';
    } else if (bmi >= 15 && bmi < 16) {
      console.log("You are in 'Severely underweight' Category");
      return 'Slightly Underweight';
    } else if (bmi >= 16 && bmi < 18.5) {
      console.log("You are in 'Underweight' Category");
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      console.log("You are in 'Normal (healthy weight)' Category");
      return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 30) {
      console.log("You are in 'Overweight' Category");
      return 'Overweight';
    } else if (bmi >= 30 && bmi < 35) {
      console.log("You are in 'Moderately obese' Category");
      return 'Moderately Obese';
    } else if (bmi >= 35 && bmi < 40) {
      console.log("You are in 'Severely obese' Category");
      return 'Severely Obese';
    } else if (bmi > 40) {
      console.log("You are in 'Very severely obese' Category");
      return 'Extremely Obese';
    }
  }
  /**  static exposes the function to the class, without having to create a new class every time when trying to get the function */
  static create = async (userProfile: UserProfile, callback) => {
    try {
      const connection = await databaseConnector();
      await connection.query('insert into userProfile set ?', [userProfile], function (err, res) {
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
            return callback(jsonResponse);
          } else {
            const jsonResponse = {
              message: 'something wrong please try again',
              status: 'failed',
              statusCode: 501
            }
            return jsonResponse;
          }
        }
        // console.log(res);

      });
      connection.release();
    } catch (error) {
      console.log(error)
    }
  }

  static update = async (userProfile: UserProfile, callback) => {
    try {

      const connection = await databaseConnector();
      await connection.query('update users set ? where userId = ', [userProfile, userProfile.getUserId], function (err, row, fields) {
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
          console.log(row);
          if (row.affectedRows < 0) {
            var jsonResponse = {
              message: 'profile updated',
              status: 'success',
              statusCode: 200
            }
            callback(jsonResponse);
          } else {
            var jsonResponse = {
              message: 'profile update failed',
              status: 'failed',
              statusCode: 501
            }
            callback(jsonResponse);
          }
        }

      });
      connection.release();
    } catch (error) {
      console.log(error)
    }
  }

  static getUserProfile = async (userId, callback) => {
    try {
      const connection = await databaseConnector();
      await connection.query('select * from userprofile where =' + userId, function (err, rows, fields) {
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
        console.log(rows);
        var userProfile: UserProfile = rows;
        return callback(userProfile);

      });

    } catch (error) {
      console.log(error);
    }
  }
}
