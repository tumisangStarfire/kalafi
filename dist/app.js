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
const express = require("express");
var cors = require('cors');
const MongoHelper_1 = require("./database/MongoHelper");
const router_1 = require("./router/router");
const loggerMiddleware_1 = require("./middleware/loggerMiddleware");
const errorMiddleware_1 = require("./middleware/errorMiddleware");
var path = require('path');
const dotenv = require('dotenv');
process.env.PWD = process.cwd();
dotenv.config();
class App {
    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.envSettings();
        this.initializeRoute();
        this.testPublicPath();
    }
    initializeMiddlewares() {
        //this.app.use(bodyParser.json());  
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(loggerMiddleware_1.loggerMiddleware);
        this.app.use(errorMiddleware_1.notFound);
        this.app.use(errorMiddleware_1.errorHandler);
        this.app.use(express.static(path.join(process.env.PWD, '/public')));
        this.app.use(express.static(path.join(__dirname, '/public')));
    }
    testPublicPath() {
        var test = path.join(process.env.PWD, '/public');
    }
    initializeRoute() {
        this.app.use('/v1/api', router_1.default);
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
            /**Now, instead of having the server just print out a message, we’ll also try connecting to our instance of Mongo. */
            try {
                //TODO to replace this
                yield MongoHelper_1.MongoHelper.connect();
                //await mongooseConnector();
                console.info(`Connected to Mongo!`);
            }
            catch (err) {
                console.error(`Unable to connect to Mongo!`, err);
            }
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map