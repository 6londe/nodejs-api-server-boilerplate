import express from 'express';
import mongoose from 'mongoose';

import config from '../config';
import routes from './routes';

const { server, database } = config;
mongoose.connect(database.uri, database.options);

const app = express();
app.use(express.json());

routes(app);
app.listen(server.port, server.host, () => console.log(`Server has started on ${server.host}:${server.port}`));

export default app;
