import * as express from 'express';
import { IndexController } from '../controllers/indexController';

const router = express.Router();

/* GET users listing. */
const indexController = new IndexController();
router.get('/', indexController.index);

export { router as indexRouter };