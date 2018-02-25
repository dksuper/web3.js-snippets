import express from 'express';
import controller from '../controllers/v1.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
/** GET /api/users - Get list of users */
  .get(controller.get);

/** EXAMPLE: POST /api/users - Create new user */
// .post(validate(paramValidation.createUser), userCtrl.create);

/** Load user when API with userId route parameter is hit */
router.param('userId', controller.load);

export default router;
