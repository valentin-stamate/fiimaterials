import express, {Express} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {connectToMongo} from "./database/database";
import fileUpload from "express-fileupload";
import {Endpoints} from "./rest/endpoints";
import {Middleware} from "./rest/middleware";
import {Controller} from "./rest/controller";
import morgan from "morgan";

require('dotenv').config();
const env = process.env;

const port = env.PORT;
const host = `http://localhost:${port}`;

const app: Express = express();

connectToMongo().then(r => {});
/************************************************************************************
 *                              Basic Express Middlewares
 ***********************************************************************************/

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(fileUpload());
app.set('json spaces', 4);

// Handle logs in console during development
if (process.env.NODE_ENV === 'development' || env.NODE_ENV === 'development') {
    app.use(cors({origin: ['http://localhost:4200', 'https://fiimaterials.valentinstamate.com']}));
}

// Handle security and origin in production
if (process.env.NODE_ENV === 'production' || env.NODE_ENV === 'production') {
    app.use(helmet());
}

/************************************************************************************
 *                               Register all REST routes
 ***********************************************************************************/

/* Any user */
app.get(Endpoints.MATERIALS, Middleware.visitorMiddleware, Controller.getMaterials);
// app.get(Endpoints.FEEDBACK, Middleware.visitorMiddleware, Controller.getFeedback);
// app.post(Endpoints.FEEDBACK, Middleware.visitorMiddleware, Controller.addFeedback);

/* Admin only */
app.post(Endpoints.REFRESH_MATERIALS, Middleware.adminMiddleware, Controller.refreshMaterials);

/************************************************************************************
 *                               Express Error Handling
 ***********************************************************************************/
app.use(Middleware.errorHandler);

app.listen(port, () => {
    console.log(`Server started at ${host}`);
});