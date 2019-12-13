import httpStatus from 'http-status';
import User from '../models/user.model';
import APIResponse from '../utils/api-response';
import APIError from '../utils/api-error';

exports.create = async (req) => {
  const { body } = req;
  const user = await User.createUser(body);
  return new APIResponse(201, User.transform(user));
};

exports.list = async (req) => {
  const { query } = req;
  const users = await User.listUsers(query);
  return new APIResponse(200, users.map((user) => User.transform(user)));
};

exports.get = async (req) => {
  const { id } = req.params;
  const user = await User.getUser(id);
  if (user) return new APIResponse(200, User.transform(user));
  throw new APIError({ status: httpStatus.NOT_FOUND, message: 'user not found' });
};

exports.update = async (req) => {
  const { body, params } = req;
  const { id } = params;
  const user = await User.updateUser(id, body);
  if (user) return new APIResponse(200, User.transform(user));
  throw new APIError({ status: httpStatus.NOT_FOUND, message: 'user not found' });
};

exports.delete = async (req) => {
  const { id } = req.params;
  const user = await User.deleteUser(id);
  if (user) return new APIResponse(200, User.transform(user));
  throw new APIError({ status: httpStatus.NOT_FOUND, message: 'user not found' });
};
