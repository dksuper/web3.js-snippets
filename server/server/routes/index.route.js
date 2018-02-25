import express from 'express';
import userRoutes from './user.route';
import v0Router from './v0.route';
import v1Router from './v1.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

router.use('/web3/v0', v0Router);
router.use('/web3/v1', v1Router);


export default router;
