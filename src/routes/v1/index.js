import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /v1:
 *   get:
 *     tags:
 *       - Example
 *     summary: Example API
 *     description: Example API description
 */
router.get('/', (req, res) => { res.status(200).send('OK'); });

export default router;
