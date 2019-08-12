import express from 'express';
import config from '../config';

const app = express();
app.listen(config.port, () => console.log(`Server has started on port ${config.port}`));
