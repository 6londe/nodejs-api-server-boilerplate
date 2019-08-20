const Joi = require('joi');

module.exports = {
  createUser: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(3).max(128).required(),
      name: Joi.string().max(128).required(),
    },
  },
  getUser: {
    params: {
      userId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },
  listUsers: {
    query: {
      offset: Joi.number().min(0),
      limit: Joi.number().min(1).max(100),
      email: Joi.string().email(),
      name: Joi.string().max(128),
    },
  },
  updateUser: {
    body: {
      email: Joi.string().email(),
      password: Joi.string().min(3).max(128),
      name: Joi.string().max(128),
    },
    params: {
      userId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },
  deleteUser: {
    params: {
      userId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    },
  },
};
