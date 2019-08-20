import express from 'express';
import validate from 'express-validation';
import authorize from '../../middlewares/authorization';
import { handle } from '../../utils/APIHandler';
import {
  listUsers, getUser, createUser, updateUser, deleteUser,
} from '../../validations/user.validation';
import controller from '../../controllers/user.controller';

const router = express.Router();

/**
 * @swagger
 * /v1/users:
 *   post:
 *     tags:
 *       - User
 *     summary: Create an user
 *   get:
 *     tags:
 *       - User
 *     summary: Get the list of users
 */
router
  .route('/')
  .post(authorize(), validate(createUser), handle(controller.create))
  .get(authorize(), validate(listUsers), handle(controller.list));

/**
 * @swagger
 * /v1/users/{userId}:
 *   get:
 *     tags:
 *       - User
 *     summary: Get the user
 *   put:
 *     tags:
 *       - User
 *     summary: Update the user
 *   delete:
 *     tags:
 *       - User
 *     summary: Delete the user
 */
router
  .route('/:userId')
  .get(authorize(), validate(getUser), handle(controller.get))
  .put(authorize(), validate(updateUser), handle(controller.update))
  .delete(authorize(), validate(deleteUser), handle(controller.delete));

export default router;
