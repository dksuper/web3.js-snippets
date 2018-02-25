import tx_v1 from '../models/tx.v1.model';

function load(req, res, next, id) {
  tx_v1.get(id)
    .then((tx) => {
      req.tx = tx; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

function get(req, res) {
  return res.json(req.tx);
}

export default { load, get };
