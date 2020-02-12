
import * as express from 'express';
import { MongoHelper } from './database/MongoHelper';
import { mongooseConnector } from './database/mongooseConnector';
/* import * as bodyParser from 'body-parser'; */
import router from './router/router';
import { loggerMiddleware } from './middleware/loggerMiddleware';
const dotenv = require('dotenv');

dotenv.config()
export class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.envSettings();
        this.initializeRoute();


    }

    private initializeMiddlewares() {
        //this.app.use(bodyParser.json()); 
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(loggerMiddleware);
    }

    private initializeRoute() {
        this.app.use('/v1/api', router);
    }

    private envSettings() {
        const PORT = process.env.PORT || 3000;
        const NODE_ENV = process.env.NODE_ENV || "development"; //development environment
        this.app.set("port", PORT);
        this.app.set("env", NODE_ENV);
    }

    private serverError() {

    }
    async listen() {
        this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
        /**Now, instead of having the server just print out a message, we’ll also try connecting to our instance of Mongo. */
        try {


            //TODO to replace this
            await MongoHelper.connect();
            //await mongooseConnector();

            console.info(`Connected to Mongo!`);
        } catch (err) {
            console.error(`Unable to connect to Mongo!`, err);
        }
    }

}
