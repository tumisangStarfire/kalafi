const mysql = require("mysql");
import * as dotenv from "dotenv";

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

export async function databaseConnector() {

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
}