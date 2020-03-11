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
const MongoHelper_1 = require("./database/MongoHelper");
/* import * as bodyParser from 'body-parser'; */
const router_1 = require("./router/router");
const loggerMiddleware_1 = require("./middleware/loggerMiddleware");
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
    }
    initializeMiddlewares() {
        //this.app.use(bodyParser.json()); 
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(loggerMiddleware_1.loggerMiddleware);
        this.app.use(express.static(process.env.PWD + './public'));
        //this.app.set('views', path.join(__dirname + '/public/web'));
        //this.app.engine('html', require('ejs').renderFile);
        //this.app.set('view engine', 'html');
        /**remove this line in prod */
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    }
    initializeRoute() {
        this.app.use('/v1/api', router_1.default);
        this.app.get("/", function (req, res) {
            res.sendFile('./public/web/views/index.html', { root: __dirname });
        });
        this.app.get('/legal/privacy-policy', function (req, res) {
            res.sendFile('./public/web/views/privacy_policy.html', { root: __dirname });
        });
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