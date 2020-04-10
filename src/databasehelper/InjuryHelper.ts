import { databaseConnector } from '../database/databaseConnector';
import { UserInjury } from 'models/UserInjury';
import { MongoHelper } from '../database/MongoHelper';
var ObjectId = require('mongodb').ObjectID;

export class InjuryHelper {
    /** save the vitals , afterwards save the injury, save the PillPresriptio data  */
    static create = async (injury: UserInjury, callback) => {
        try {

            const query = MongoHelper.client.db('Mooki_Development').collection('injury');
            var result = query.insertOne(injury, function (err, data) {
                if (err) {
                    console.log(err);
                }
                console.log(data);
                return callback(data.insertedId);
            });

        } catch (error) {
            console.log(error);
        }
    }

    static remove = async (storageId:string, callback) => {
        try {
            const query = MongoHelper.client.db('Mooki_Development').collection('injury');
            var deleteParams = { _id: storageId };
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

    static getUserInjuriesUsingUserId = async (userId:string, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('injury');

            var result = collection.find({ userId: userId }).toArray(function (err, res) {
                if (err) {
                    console.log(err);
                }
                var injury: Array<UserInjury>;
                injury = res;
                console.log(injury);
                return callback(injury);
            });


        } catch (error) {
            console.log(error);
        }
    } 

    static getAllInjuryData = async callback=>{  
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('typesofinjuries'); 

            var result = collection.find().toArray(function(err,data){
                if (err) {
                    console.log(err);
                } 
                console.log(data);
                return callback(data);
            })
        } catch (error ) {
            console.log(error);
        }
    }
}