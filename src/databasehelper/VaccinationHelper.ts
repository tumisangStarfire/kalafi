import { Vaccination } from "models/Vaccination";
var ObjectId = require('mongodb').ObjectID;
import { MongoHelper } from "../database/MongoHelper";

export class VaccinationHelper {
    /**function to add a new vacination of user_id */
    static async create(vacination: Vaccination, callback) {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('vaccination');
            var result = await query.insertOne(vacination, function (err, data) {
                if (err) {
                    console.log(err);
                }
                console.log(data)
                return callback(data.insertedId);
            });

        } catch (error) {
            console.log(error);
        }
    }

    /**function to remove vaccination record of id */
    static remove = async (id, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('vaccination');
            var deleteParams = { _id: new ObjectId(id) };
            var result = query.deleteOne(deleteParams, function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.log(res)
                return callback(res.deletedCount);
            });
        } catch (error) {
            console.log(error);
        }
    }
}