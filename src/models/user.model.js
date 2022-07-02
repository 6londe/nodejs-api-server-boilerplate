import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    name: {
      type: String,
      maxlength: 128,
      index: true,
      trim: true,
    },
  },
  { timestamps: true }
);

userSchema.statics = {
  async add(body) {
    const doc = await this.create(body);
    return doc;
  },
  async getById(id) {
    const doc = await this.findById(id);
    return doc;
  },
  async updateById(id, body) {
    const doc = await this.findByIdAndUpdate(id, body, { new: true });
    return doc;
  },
  async deleteById(id) {
    const doc = await this.findByIdAndDelete(id);
    return doc;
  },
  async list(query) {
    const { offset, limit } = query;
    delete query.offset;
    delete query.limit;
    const docs = this.find(query)
      .skip(parseInt(offset || 0, 10))
      .limit(parseInt(limit || 10, 10));
    return docs;
  },
  transform(doc) {
    const transformed = {};
    const fields = ["_id", "name", "email", "createdAt"];
    fields.forEach((field) => {
      transformed[field] = doc[field];
    });
    return transformed;
  },
};

export default mongoose.model("User", userSchema);
