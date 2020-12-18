import * as express from 'express';
import { HeroesController } from '../controllers/heroesController';

const router = express.Router();

/* GET users listing. */
const heroesController = new HeroesController();
router.get('/', heroesController.index);

export {router};
