const Router = require('express').Router;
const router = new Router();

const user = require('./model/user/router');
const transaction = require('./model/transaction/router');
const template = require('./model/template/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to web-js-snippets API!' });
});

router.use('/user', user);
router.use('/transaction', transaction);
router.use('/template', template);

module.exports = router;
