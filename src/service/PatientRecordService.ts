import CurrentMedication from '../models/CurrentMedication';
import { MongoHelper } from '../database/MongoHelper';
import { JsonResponseInterface } from '../interfaces/JsonResponseInterface';
import UserIllness from '../models/UserIllness';
import UserInjury from '../models/UserInjury';

export default class PatientRecordService { 

     static storeUserIllness = async (userIllness: UserIllness, callback) => {
        try {
            const query =  MongoHelper.getDatabase().collection('userillness');
            var result = query.insertOne(userIllness, function (err, res) {
                if (err) {
                    console.log(err);
                    var jsonRes : JsonResponseInterface={
                        status : 'failed',
                        message :'failed to add medication information',
                        data :err,
                    };
                    return callback(jsonRes);
                }
                var jsonRes : JsonResponseInterface= {
                    status : 'success',
                    message :'medication information added succesfully',
                    data :res.insertedId,
                };


                //console.log(res);
                return callback(jsonRes);
            });
        } catch (error) {
            console.log(error);
        }
    }

    static getUserIllnessUsingUserId = async (userId : string, callback) => {
        try {
            const collection =MongoHelper.getDatabase().collection('userillness');
            var query = { userId: userId };
            var result = collection.find({ userId: userId }).toArray(function (err, res) {
                if (err) {
                    console.log(err);
                    var jsonRes : JsonResponseInterface ={
                        status : 'failed',
                        message :'failed to fetch medical information',
                        data :err,

                    };
                    return callback(jsonRes);
                }
                var illnesses: Array<UserIllness>;
                illnesses = res;
                var jsonres : JsonResponseInterface ={
                    status : 'success',
                    message : 'user illnesses data has been fetched',
                    data : illnesses,
                }
                //console.log(injury);
                return callback(illnesses);
            });


        } catch (error) {
            console.log(error);
        }
    }  

    static storeUserInjury = async (userIllness: UserIllness, callback) => {
        try {
            const query =  MongoHelper.getDatabase().collection('userinjury');
            var result = query.insertOne(userIllness, function (err, res) {
                if (err) {
                    console.log(err);
                    var jsonRes : JsonResponseInterface = {
                        status : 'failed',
                        message :'failed to add medication information',
                        data :err,
                    };
                    return callback(jsonRes);
                }
                var jsonRes : JsonResponseInterface= {
                    status : 'success',
                    message :'medication information added succesfully',
                    data :res.insertedId,
                };


                //console.log(res);
                return callback(jsonRes);
            });
        } catch (error) {
            console.log(error);
        }
    }

    static getUserInjuriesUsingUserId = async (userId : string, callback) => {
        try {
            const collection = MongoHelper.getDatabase().collection('userinjury');
            var query = { userId: userId };
            var result = collection.find({ userId: userId }).toArray(function (err, res) {
                if (err) {
                    console.log(err);
                    var jsonRes : JsonResponseInterface ={
                        status : 'failed',
                        message :'failed to fetch medical information',
                        data :err,

                    };
                    return callback(jsonRes);
                }
                var userinjury: Array<UserInjury>;
                userinjury = res;
                var jsonres : JsonResponseInterface ={
                    status : 'success',
                    message : 'user userinjury data has been fetched',
                    data : userinjury,
                }
                //console.log(injury);
                return callback(userinjury);
            });


        } catch (error) {
            console.log(error);
        }
    }
}