import 'babel-polyfill';

import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import bluebird from 'bluebird';

import { config } from './config';
import router from './routes';

const app  = express();

mongoose.Promise = bluebird;

mongoose.connect(config.mongo.url, {
    useMongoClient: true
});

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/', router);

app.listen(config.server.port, () => {
  console.log(`Magic happens on port ${config.server.port}`);
});

export default app;
