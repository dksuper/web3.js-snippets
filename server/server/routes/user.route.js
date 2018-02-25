import express from 'express';
import userCtrl from '../controllers/user.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(userCtrl.list);

  /** EXAMPLE: POST /api/users - Create new user */
  // .post(validate(paramValidation.createUser), userCtrl.create);

/** Load user when API with userId route parameter is hit */
router.param('userId', userCtrl.load);

export default router;
