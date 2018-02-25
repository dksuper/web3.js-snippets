import { Router } from 'express';
import controller from './controller';

const router = new Router();

router.route('/')
    .get((...args) => controller.find(...args));

router.route('/')
    .get((...args) => controller.update(...args));

export default router;
