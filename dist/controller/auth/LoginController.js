var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// DB
const mysqlconnection = require('database/databaseConnector.js');
const login = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //TODO login with cellphone or email
        let email = request.body.email;
        let password = request.body.password;
        let query = 'select cellphone,password from users where email=' + email + 'AND pasword=' + password;
        var result = yield mysqlconnection.query(query, function (connectionErr, rows, fields) {
            if (connectionErr) {
                console.log('error', connectionErr);
            }
            else {
                console.log(rows[0]);
            }
        });
    }
    catch (error) {
        console.log(error);
    }
});
export default login;
//# sourceMappingURL=LoginController.js.map