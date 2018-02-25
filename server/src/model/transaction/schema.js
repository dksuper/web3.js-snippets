import { Schema } from 'mongoose';

const transactionSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String }
});

export default transactionSchema;
