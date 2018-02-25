import express from 'express';
import queue from 'express-queue';
import controller from '../controllers/v0.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(controller.get);
router.route('/batchRequest').get(controller.batchRequest, queue({ activeLimit: 1, queuedLimit: -1}));

/** EXAMPLE: POST /api/users - Create new user */
// .post(validate(paramValidation.createUser), userCtrl.create);

/** Load user when API with userId route parameter is hit */
router.param('userId', controller.load);

export default router;
