import * as express from 'express'
import { HeroesController } from '../controllers/heroesController'

const router = express.Router()

/* GET users listing. */
const heroesController = new HeroesController()

router.get('/', heroesController.index.get)
router.put('/', heroesController.index.put)
router.post('/', heroesController.index.post)

router.get('/:id(\\d+)', heroesController.id.get)
router.delete('/:id(\\d+)', heroesController.id.delete)

export {router};
