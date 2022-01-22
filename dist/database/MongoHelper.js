"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo = require("mongodb");
const mongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });
require('dotenv').config();
var mongoURL = process.env.LOCAL_DB_URL;
var MongoDatabase = process.env.LOCAL_MONGO_DATABASE;
var MongoUser = process.env.MONGO_USER;
var MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const connectionString = `mongodb+srv://${MongoUser}:${MONGO_PASSWORD}${mongoURL}/${MongoDatabase}?retryWrites=true&w=majority`;
class MongoHelper {
    constructor() {
    }
    static connect() {
        return new Promise((resolve, reject) => {
            mongo.MongoClient.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true }, (err, client) => {
                if (err) {
                    reject(err);
                }
                else {
                    MongoHelper.client = client;
                    this.database = client.db(MongoDatabase);
                    resolve(client.db(MongoDatabase));
                }
            });
        });
    }
    static getDatabase() {
        return MongoHelper.database;
    }
    disconnect() {
        MongoHelper.client.close();
    }
}
exports.MongoHelper = MongoHelper;
//# sourceMappingURL=MongoHelper.js.map