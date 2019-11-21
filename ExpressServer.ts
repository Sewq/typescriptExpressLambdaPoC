import 'reflect-metadata';
import {Application} from 'express';
import * as bodyParser from 'body-parser';
import * as controllers from './controller';
import {createExpressServer} from "routing-controllers";

export class ExpressServer {

    private readonly app: Application;

    constructor() {
        this.app = createExpressServer({
            controllers: this.setupControllers()
        });
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    private setupControllers(): any[] {
        const controllerInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                controllerInstances.push((controllers as any)[name]);
            }
        }
        return controllerInstances;
    }

    public getServerApplication(): Application {
        return this.app;
    }
}
