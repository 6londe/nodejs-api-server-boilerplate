import express from 'express';
import userRoute from './user.route';

const router = express.Router();

router.use('/users', userRoute);

module.exports = router;
