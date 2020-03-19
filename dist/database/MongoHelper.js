"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo = require("mongodb");
const mongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();
var mongoURL = process.env.MONGO_Url;
var MongoDatabase = process.env.MONGO_DATABASE;
var MongoUser = process.env.MONGO_USER;
var MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const connectionString = `mongodb+srv://${MongoUser}:${MONGO_PASSWORD}${mongoURL}/${MongoDatabase}?retryWrites=true&w=majority`;
class MongoHelper {
    constructor() {
    }
    static connect() {
        return new Promise((resolve, reject) => {
            // console.log(connectionString);
            mongo.MongoClient.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true }, (err, client) => {
                if (err) {
                    reject(err);
                }
                else {
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
    disconnect() {
        MongoHelper.client.close();
    }
}
exports.MongoHelper = MongoHelper;
//# sourceMappingURL=MongoHelper.js.map