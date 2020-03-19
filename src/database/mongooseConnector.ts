const dotenv = require('dotenv');
import * as mongoose from 'mongoose';
// import * as chalk from 'chalk';
const chalk = require('chalk')

dotenv.config()


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
export async function mongooseConnector() {

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
            process.exit(0)
        });
    });
}