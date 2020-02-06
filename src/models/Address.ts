import { Region } from "./Region";
import { databaseConnector } from '../database/databaseConnector';

export class Address {
  city?: string;
  town?: string;
  village?: string;
  streetName?: string;
  houseNumber?: string;
  region: Region;

  get getCity(): string {
    return this.city;
  }

  set setCity(city: string) {
    this.city = city;
  }

  get getTown(): string {
    return this.town;
  }

  set setTown(town: string) {
    this.town = town;
  }

  get getVillage(): string {
    return this.village;
  }

  set setVillage(village: string) {
    this.village = village;
  }


  get getStreetName(): string {
    return this.streetName;
  }

  set setStreetName(streetName: string) {
    this.streetName = streetName;
  }

  get getHouseNumber(): string {
    return this, this.houseNumber;
  }

  set setHouseNumber(houseNumber: string) {
    this.houseNumber = houseNumber;
  }

  static create = async (address: Address, callback) => {
    try {
      const connection = await databaseConnector();
      await connection.query('insert into Address ?', [address], function (err, res) {
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
        }

      });
      connection.release();
    } catch (error) {
      console.log(error);
    }
  }

  static update = async (address: Address, addressId, callback) => {
    try {
      const connection = await databaseConnector();
      connection.query('update Address set ? where id = ', [address, addressId], function (err, row, fields) {
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
              message: 'adresss updated',
              status: 'success',
              statusCode: 200
            }
            callback(jsonResponse);
          } else {
            var jsonResponse = {
              message: 'Adress failed to update',
              status: 'failed',
              statusCode: 501
            }
            callback(jsonResponse);
          }
        }

      });
      connection.release();
    } catch (error) {
      console.log(error);

    }
  }



}
