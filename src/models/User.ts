import { Address } from "./Address";
//TODO password hashing
import { databaseConnector } from '../database/databaseConnector';
import { UserProfile } from "./UserProfile";

export class User {
  private id?: Number;
  private firstName: string;
  private lastName: string;
  private email: string;
  private cellphone: string;
  private password: string;
  private status?: number;
  private verified?: boolean;
  private address?: Address;

  constructor(

    firstName: string,
    lastName: string,
    email: string,
    cellphone: string,
    password: string,
    status: number,
    verified: boolean
  ) {


    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.cellphone = cellphone;
    this.password = password;
    this.status = status;
    this.verified = verified;
  }


  get getUserId(): Number {
    return this.id;
  }

  set setUserId(id: Number) {
    this.id = id;
  }

  get getFirstName(): string {
    return this.firstName;
  }

  set setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  get getLastName(): string {
    return this.lastName;
  }

  set setLastName(lastName: string) {
    this.lastName = lastName;
  }

  get getEmail(): string {
    return this.email;
  }

  set setEmail(email: string) {
    this.email = email;
  }

  get getPassword(): string {
    return this.password;
  }

  set setPassword(password: string) {
    this.password = password;
  }

  get getCellphone(): string {
    return this.cellphone;
  }

  set setCellphone(cellphone: string) {
    this.cellphone = cellphone;
  }

  get getStatus(): number {
    return this.status;
  }

  set setStatus(status: number) {
    this.status = status;
  }

  get getVerifified(): boolean {
    return this.verified;
  }

  set setVerified(verified: boolean) {
    this.verified = verified;
  }

  static validateUserPhoneNumber = async (cellphone, callback) => {
    try {
      var result = false; //final response to five back 
      //let cellphone = cellphone; //validations for cellphone
      const connection = await databaseConnector();
      let query = 'select count(1) as valid from customer where cellphone =' + connection.escape(cellphone);
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
          console.log(rows)
          if (rows[0].valid > 0) {
            result = true
            // response.send({ message: result, status: "success" }).status(200) 
            return callback(result);
          } else {
            console.log(result);
            // response.send({ message: result, status: "failed" }).status(404); 
            return callback(result);
          }
        }

      });
      return result;
      connection.release();
    } catch (error) {
      console.log(error);
    }
  }

  /**function to save a new user registration, it wil be called by the Registration Controller */
  static create = async (user: User, callback) => {
    try {
      const connection = await databaseConnector();
      user.setVerified = false;
      user.setStatus = 0;
      await connection.query('insert into users set ?', [user], function (err, userId) {
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
          if (userId.insertId !== null) {
            /*** create Profile function, create Address function 
            const createProfile = UserProfile.create(userId.insertId, result => {
              console.log('profile', result);
            });

            const createAddress = Address.create(userId.insertId, result => {
              console.log('address', result);
            });*/
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
        }

      });
      connection.release();

    } catch (error) {
      console.log(error);
    }
  }

  static validateUserAccount = async () => {
    try {
      // call the send otp function, 
    } catch (error) {
      console.log(error);
    }
  }

}
