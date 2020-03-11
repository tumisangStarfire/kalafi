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
const mysql = require("mysql");
const dotenv = require("dotenv");
/**
 * Connection Pooling is mechanism to maintain cache of database connection so that connection can be reused after releasing it.
 * Node mysql, we can use pooling directly to handle multiple connection and reuse the connection
 */ //use ENV variables  
dotenv.config();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development"; //development environment 
const HOST = process.env.HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PASSWORD = process.env.DB_PASSWORD;
function databaseConnector() {
    return __awaiter(this, void 0, void 0, function* () {
        const mysqlpoolconnection = mysql.createPool({
            host: HOST,
            user: DB_USERNAME,
            password: DB_PASSWORD,
            database: DB_DATABASE,
            port: 3306,
        });
        mysqlpoolconnection.on('error', function (err) {
            console.log("[mysql error]", err);
        });
        mysqlpoolconnection.getConnection((err, con) => {
            try {
                if (con) {
                    con.release();
                    console.log({ "status": "success", "message": "MySQL connected.", "con": mysqlpoolconnection });
                }
            }
            catch (err) {
                console.log({ "status": "failed", "error": err });
            }
            console.log({ "status": "failed", "error": "Error connecting to MySQL." });
        });
        return mysqlpoolconnection;
    });
}
exports.databaseConnector = databaseConnector;
//# sourceMappingURL=databaseConnector.js.map