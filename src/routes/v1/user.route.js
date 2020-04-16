import express from 'express';
import authenticate from '../../middlewares/authentication';
import controller from '../../controllers/user.controller';
import { handle } from '../../utils/api-handler';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Manage user information
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - email
 *       - name
 *     properties:
 *       id:
 *         type: string
 *         description: ID
 *         example: 5df206f819f1802f7e158f73
 *       email:
 *         type: string
 *         description: E-mail address
 *         example: 6londe@gmail.com
 *       name:
 *         type: string
 *         description: Name
 *         example: Jack
 *       createdAt:
 *         type: date-time
 *         description: Date of creation
 *         example: "2000-01-01T01:01:01.001Z"
 */

/**
 * @swagger
 * /v1/users:
 *   post:
 *     tags: [User]
 *     summary: Create an user
 *     parameters:
 *       - in: body
 *         name: body
 *         description: User's information
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - name
 *           properties:
 *             email:
 *               type: string
 *               description: E-mail address
 *               example: 6londe@gmail.com
 *             name:
 *               type: string
 *               description: Name
 *               example: Jack
 *     responses:
 *       201:
 *         description: Return created user
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               $ref: '#/definitions/User'
 *             version:
 *               type: string
 *               example: 1.0.0
 */
router.route('/').post(authenticate(), handle(controller.create));

/**
 * @swagger
 * /v1/users:
 *   get:
 *     tags: [User]
 *     summary: Get a list of users
 *     parameters:
 *       - in: query
 *         name: offset
 *         description: Offset (default=0)
 *         schema:
 *           type: integer
 *           example: '0'
 *           default: 0
 *       - in: query
 *         name: limit
 *         description: Limit (default=10)
 *         schema:
 *           type: integer
 *           example: 10
 *           default: 10
 *     responses:
 *       200:
 *         description: Return a list of users
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/User'
 *             version:
 *               type: string
 *               example: 1.0.0
 */
router.route('/').get(authenticate(), handle(controller.list));

/**
 * @swagger
 * /v1/users/{id}:
 *   get:
 *     tags: [User]
 *     summary: Get an user
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User's ID
 *         schema:
 *           type: string
 *           example: 5df206f819f1802f7e158f73
 *     responses:
 *       200:
 *         description: Return an user
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               $ref: '#/definitions/User'
 *             version:
 *               type: string
 *               example: 1.0.0
 */
router.route('/:id').get(authenticate(), handle(controller.get));

/**
 * @swagger
 * /v1/users/{id}:
 *   put:
 *     tags: [User]
 *     summary: Update an user
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User's ID
 *         schema:
 *           type: string
 *           example: 5df206f819f1802f7e158f73
 *       - in: body
 *         name: body
 *         description: User's information
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - name
 *           properties:
 *             email:
 *               type: string
 *               description: E-mail address
 *               example: 6londe@gmail.com
 *             name:
 *               type: string
 *               description: Name
 *               example: Jack
 *     responses:
 *       200:
 *         description: Return updated user
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               $ref: '#/definitions/User'
 *             version:
 *               type: string
 *               example: 1.0.0
 */
router.route('/:id').put(authenticate(), handle(controller.update));

/**
 * @swagger
 * /v1/users/{id}:
 *   delete:
 *     tags: [User]
 *     summary: Delete an user
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User's ID
 *         schema:
 *           type: string
 *           example: 5df206f819f1802f7e158f73
 *     responses:
 *       200:
 *         description: Return deleted user
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               $ref: '#/definitions/User'
 *             version:
 *               type: string
 *               example: 1.0.0
 */
router.route('/:id').delete(authenticate(), handle(controller.delete));

export default router;
