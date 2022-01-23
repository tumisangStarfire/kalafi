
import * as express from 'express'; var cors = require('cors');
import { MongoHelper } from './database/MongoHelper';
import router from './router/router';
import { loggerMiddleware } from './middleware/loggerMiddleware';
import * as jsdom from 'jsdom';
import { errorHandler, notFound } from './middleware/errorMiddleware';
const { JSDOM } = jsdom;    
var path = require('path'); 
const dotenv = require('dotenv');
process.env.PWD = process.cwd()
dotenv.config()
export class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.envSettings();
        this.initializeRoute(); 
        this.testPublicPath();
       
    }

    private initializeMiddlewares() {
        //this.app.use(bodyParser.json());  
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(loggerMiddleware);
        this.app.use(notFound);
        this.app.use(errorHandler);
        this.app.use(express.static(path.join(process.env.PWD ,'/public'))); 
        this.app.use(express.static(path.join(__dirname , '/public'))); 
    }  
    public testPublicPath(){
        var test =  path.join(process.env.PWD ,'/public');
    
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
