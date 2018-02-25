import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const tx_v0 = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  }
});

tx_v0.statics = {
  get(id) {
    return this.findById(id)
      .exec()
      .then((tx) => {
        if (tx) {
          return tx;
        }
        const err = new APIError('No such tx exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },
};

export default mongoose.model('tx_v0', tx_v0);
