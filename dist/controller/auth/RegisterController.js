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
const registerUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = request.body;
        yield mysqlconnection.query('insert into users set ?', [newUser]);
        response.json({
            status: 'success',
            message: 'Account created'
        }).status(200);
    }
    catch (error) {
        throw error;
    }
});
export default registerUser;
//# sourceMappingURL=RegisterController.js.map