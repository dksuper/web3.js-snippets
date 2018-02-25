import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  }
});

UserSchema.statics = {
  get(id) {
    return this.findById(id)
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },
};

export default mongoose.model('User', UserSchema);
