var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import * as bodyParser from 'body-parser';
import router from './router/authrouter';
export class App {
    constructor() {
        this.app = express();
        this.initializeRoute();
        this.envSettings();
        this.initializeMiddlewares();
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }
    initializeRoute() {
        this.app.use(router);
    }
    envSettings() {
        const PORT = process.env.PORT || 3000;
        const NODE_ENV = process.env.NODE_ENV || "development"; //development environment
        this.app.set("port", PORT);
        this.app.set("env", NODE_ENV);
    }
    serverError() {
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(this.app.get('port'));
            console.log('Server on port', this.app.get('port'));
        });
    }
}
//# sourceMappingURL=app.js.map