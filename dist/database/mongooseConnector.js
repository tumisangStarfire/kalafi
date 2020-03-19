"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv');
const mongoose = require("mongoose");
// import * as chalk from 'chalk';
const chalk = require('chalk');
dotenv.config();
var mongoURL = process.env.MONGO_Url;
var MongoDatabase = process.env.MONGO_DATABASE;
var MongoUser = process.env.MONGO_USER;
var MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const connectionString = `mongodb+srv://${MongoUser}:${MONGO_PASSWORD}${mongoURL}/${MongoDatabase}?retryWrites=true&w=majority`;
var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;
//export this function and imported by server.js
function mongooseConnector() {
    return __awaiter(this, void 0, void 0, function* () {
        //mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true }); 
        var result = mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true });
        mongoose.connection.on('connected', function () {
            console.log(connected("Mongoose default connection is open to ", connectionString));
        });
        mongoose.connection.on('error', function (err) {
            console.log(error("Mongoose default connection has occured " + err + " error"));
        });
        mongoose.connection.on('disconnected', function () {
            console.log(disconnected("Mongoose default connection is disconnected"));
        });
        process.on('SIGINT', function () {
            mongoose.connection.close(function () {
                console.log(termination("Mongoose default connection is disconnected due to application termination"));
                process.exit(0);
            });
        });
    });
}
exports.mongooseConnector = mongooseConnector;
//# sourceMappingURL=mongooseConnector.js.map