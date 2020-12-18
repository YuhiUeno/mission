import * as express from 'express';
import { UsersController } from '../controllers/usersController';

const router = express.Router();

/* GET users listing. */
const usersController = new UsersController();
router.get('/', usersController.index);

export {router};
