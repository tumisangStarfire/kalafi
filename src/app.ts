
import * as express from 'express';
/* import * as bodyParser from 'body-parser'; */
import router from './router/router';
import { loggerMiddleware } from './middleware/loggerMiddleware'


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
        this.app.use('v1/api', router);
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
    }

}
