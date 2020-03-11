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
const databaseConnector_1 = require("../database/databaseConnector");
class PillPrescriptionLogic {
}
exports.PillPrescriptionLogic = PillPrescriptionLogic;
PillPrescriptionLogic.create = (pillPrescription, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield databaseConnector_1.databaseConnector();
        yield connection.query('insert into PillPrescription set ?', [pillPrescription], function (err, res) {
            //Do not throw err as it will crash the server. 
            if (err) {
                console.log(err.message);
                //rollback the operation  
                connection.end();
                const jsonResponse = {
                    message: 'something went wrong please try again',
                    status: 'failed',
                    statusCode: 501
                };
                return callback(jsonResponse);
            }
            console.log(res);
            if (res.insertId !== null) {
                const jsonResponse = {
                    message: 'data saved',
                    status: 'success',
                    statusCode: 200
                };
                return callback(jsonResponse);
            }
            else {
                const jsonResponse = {
                    message: 'something wrong please try again',
                    status: 'failed',
                    statusCode: 501
                };
                return callback(jsonResponse);
            }
        });
        connection.release();
    }
    catch (error) {
    }
});
//# sourceMappingURL=PillPrescriptionLogic.js.map