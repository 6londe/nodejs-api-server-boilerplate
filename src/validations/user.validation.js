const Joi = require('joi');

exports.create = {
  body: {
    email: Joi.string().email().required(),
    name: Joi.string().max(128).required(),
  },
};

exports.get = {
  params: {
    id: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
  },
};

exports.list = {
  query: {
    offset: Joi.number().min(0),
    limit: Joi.number().min(1).max(100),
    email: Joi.string().email(),
    name: Joi.string().max(128),
  },
};

exports.update = {
  body: {
    email: Joi.string().email(),
    name: Joi.string().max(128),
  },
  params: {
    id: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
  },
};

exports.delete = {
  params: {
    id: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
  },
};
