import tx_v0 from '../models/tx.v0.model';
import {transactionHelper} from '../helpers/web3-v0.x/transactionHelper';

const txHelper = new transactionHelper();

function load(req, res, next, id) {
  tx_v0.get(id)
    .then((tx) => {
      req.tx = tx; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

function get(req, res) {
  return res.json(result);
}

async function batchRequest(req, res) {
  txHelper.initializeAccount('addUser', ['0xa029391DB383CF30c70ffF7582E179692caFaC57'])
    .then(result => {
      Promise.all(result.requests).then(innerResult => {
        return res.json({
          body: innerResult
        });
      });
    })
    .catch(err => {
      return res.send(err).status(400);
    })
}

export default {load, get, batchRequest};
