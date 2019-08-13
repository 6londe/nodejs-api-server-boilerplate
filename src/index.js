import express from 'express';
import mongoose from 'mongoose';

import config from '../config';
import routes from './routes';

const { server, database } = config;
mongoose.connect(database.uri, database.options);

const app = express();
routes(app);
app.listen(server.port, () => console.log(`Server has started on port ${server.port}`));

export default app;
