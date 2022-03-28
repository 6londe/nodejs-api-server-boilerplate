import httpStatus from 'http-status';
import User from '../models/user.model';
import APIResponse from '../utils/api-response';
import APIError from '../utils/api-error';

exports.create = async ({ body }) => {
  const user = await User.add(body);
  return new APIResponse(201, User.transform(user));
};

exports.list = async ({ query }) => {
  const users = await User.list(query);
  return new APIResponse(200, users.map((user) => User.transform(user)));
};

exports.get = async ({ params }) => {
  const { id } = params;
  const user = await User.getById(id);
  if (user) return new APIResponse(200, User.transform(user));
  throw new APIError({ status: httpStatus.NOT_FOUND, message: 'user not found' });
};

exports.update = async ({ body, params }) => {
  const { id } = params;
  const user = await User.updateById(id, body);
  if (user) return new APIResponse(200, User.transform(user));
  throw new APIError({ status: httpStatus.NOT_FOUND, message: 'user not found' });
};

exports.delete = async ({ params }) => {
  const { id } = params;
  const user = await User.deleteById(id);
  if (user) return new APIResponse(200, User.transform(user));
  throw new APIError({ status: httpStatus.NOT_FOUND, message: 'user not found' });
};
