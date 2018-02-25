import express from 'express';

import { default as v0Router } from './model/v0/router';
import { default as v1Router } from './model/v1/router';

const router = new express.Router();

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to web-js-snippets API!' });
});

router.use('/v0', v0Router);
router.use('/v1', v1Router);

export default router;
