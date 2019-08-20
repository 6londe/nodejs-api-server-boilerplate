import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import httpStatus from 'http-status';
import APIError from '../utils/APIError';
import { generatePassword } from '../utils/util';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 128,
  },
  name: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
}, {
  timestamps: true,
});

userSchema.pre('save', async function _(next) {
  this.password = await generatePassword(this.password);
  return next();
});

userSchema.method('passwordMatches', async (password) => bcrypt.compare(password, this.password));

userSchema.statics = {
  transform(user) {
    const transformed = {};
    const fields = ['id', 'name', 'email', 'createdAt'];
    fields.forEach((field) => { transformed[field] = user[field]; });
    return transformed;
  },
  async post(body) {
    const user = await this.create(body);
    if (user) return user;

    throw new APIError({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Failed to create an user',
    });
  },
  async list(query) {
    const { offset, limit } = query;
    delete query.offset;
    delete query.limit;
    const users = this.find(query).skip(offset || 0).limit(limit || 10);
    return users;
  },
  async get(id) {
    const user = await this.findById(id);
    if (user) return user;

    throw new APIError({
      status: httpStatus.NOT_FOUND,
      message: 'User not found',
    });
  },
  async update(id, body) {
    const { password } = body;
    if (password) body.password = await generatePassword(password);
    const user = await this.findByIdAndUpdate(id, body, { new: true });
    return user;
  },
  async delete(id) {
    const user = await this.findByIdAndDelete(id);
    return user;
  },
};

export default mongoose.model('User', userSchema);
