import * as express from 'express'
import { HeroController } from '../controllers/heroes.controller'

const router = express.Router()

/* GET users listing. */
const heroController = new HeroController()

router.get('/', heroController.index.get)
router.put('/', heroController.index.put)
router.post('/', heroController.index.post)

router.get('/:id(\\d+)', heroController.id.get)
router.delete('/:id(\\d+)', heroController.id.delete)

export {router};
