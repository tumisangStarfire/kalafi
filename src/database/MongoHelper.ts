
import * as mongo from 'mongodb';
const mongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
import mongoose from 'mongoose';

dotenv.config({path: __dirname + '/.env'});
require('dotenv').config()



var mongoURL = process.env.LOCAL_DB_URL;
var MongoDatabase = process.env.LOCAL_MONGO_DATABASE;
var MongoUser = process.env.MONGO_USER;
var MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const connectionString = `mongodb+srv://${MongoUser}:${MONGO_PASSWORD}${mongoURL}/${MongoDatabase}?retryWrites=true&w=majority`;

export class MongoHelper {
  
  public static client: mongo.MongoClient;
  static database: mongo.Db;

  constructor() {
  }

  public static connect(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      console.log(mongoURL);
      mongo.MongoClient.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true }, (err, client: mongo.MongoClient) => {
        if (err) {
          reject(err);
        } else {
          MongoHelper.client = client;
          this.database = client.db(MongoDatabase);


          resolve(client.db(MongoDatabase));
        }
      });
    });
  }

  public static getDatabase(): mongo.Db {
    return MongoHelper.database;
  }

  public disconnect(): void {
    MongoHelper.client.close();
  }
}

