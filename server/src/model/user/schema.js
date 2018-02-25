import { Schema } from 'mongoose';

const userSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String }
});

export default userSchema;