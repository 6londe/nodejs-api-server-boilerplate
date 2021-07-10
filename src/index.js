import express from 'express';
import mongoose from 'mongoose';
import log from './utils/logger';
import config from '../config';
import route from './routers';

const { server, database } = config;
mongoose.connect(database.uri, database.options);

const app = express();
app.use(express.json());

log(app);
route(app);

app.listen(server.port, server.host, () => console.log(`Server has started on ${server.host}:${server.port}`));

export default app;
