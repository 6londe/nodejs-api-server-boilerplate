import APIResponse from '../utils/APIResponse';
import User from '../models/user.model';

exports.create = async (req) => {
  const { body } = req;
  const user = await User.post(body);
  return APIResponse(201, User.transform(user));
};

exports.list = async (req) => {
  const { query } = req;
  const users = await User.list(query);
  return APIResponse(200, users.map((user) => User.transform(user)));
};

exports.get = async (req) => {
  const { userId } = req.params;
  const user = await User.get(userId);
  return APIResponse(200, User.transform(user));
};

exports.update = async (req) => {
  const { body, params } = req;
  const { userId } = params;
  const user = await User.update(userId, body);
  return APIResponse(200, User.transform(user));
};

exports.delete = async (req) => {
  const { userId } = req.params;
  const user = await User.delete(userId);
  return APIResponse(200, User.transform(user));
};
