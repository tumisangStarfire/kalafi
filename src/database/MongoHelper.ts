import * as mongo from 'mongodb';
const mongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');

dotenv.config()


var mongoURL = process.env.MONGO_Url;
var MongoDatabase = process.env.MONGO_DATABASE;
var MongoUser = process.env.MONGO_USER;
var MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const connectionString = `mongodb+srv://${MongoUser}:${MONGO_PASSWORD}${mongoURL}/test?retryWrites=true&w=majority`;

export class MongoHelper {
  public static client: mongo.MongoClient;
  static database;

  constructor() {
  }

  public static connect(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      console.log(connectionString);
      mongo.MongoClient.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true }, (err, client: mongo.MongoClient) => {
        if (err) {
          reject(err);
        } else {
          MongoHelper.client = client;
          this.database = client.db('test');

          resolve(client.db('test'));
        }
      });
    });
  }

  getDatabase() {
    return MongoHelper.database;
  }

  public disconnect(): void {
    MongoHelper.client.close();
  }
}

