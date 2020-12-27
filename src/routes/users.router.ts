import * as express from 'express';
import { UserController } from '../controllers/users.controller';

const router = express.Router();

/* GET users listing. */
const userController = new UserController();

router.post('/authenticate', userController.authenticate);
router.post('/register', userController.register);
router.get('/', userController.getAll);
router.get('/current', userController.getCurrent);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController._delete);

export { router as userRouter };
