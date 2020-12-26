import { Request, Response, NextFunction } from 'express'
import { CounterModel } from '../database/counters/counters.model'
import { HeroModel } from '../database/heroes/heroes.model'

export class HeroesController {
    index = {
        get: async (req: Request, res: Response, next: NextFunction) => {
            const name = req.query.name
            if (name) {
                // you can chage regexp if you want a higher-quality search
                const regexp = RegExp(name + '')
                res.json(await HeroModel.find({name: {$regex: regexp, $options: 'i'}}))
            } else {
                res.json(await HeroModel.getHeroes())
            }
        },
        post: async (req: Request, res: Response, next: NextFunction) => {
            try {
                const name = req.body.name
                await HeroModel.addHero(req.body.name)
                const counter = await CounterModel.findOne({key: "heroId"})
                res.json(await HeroModel.getHero(counter.seq))
            } catch (err) {
                res.status(400).send({error: err.message})
            }
        },
        put: async (req: Request, res: Response, next: NextFunction) => {
            try {
                await HeroModel.updateHeroName(parseInt(req.body._id), req.body.name)
                res.status(200).json({message: 'hero name updated'})

            } catch (err) {
                res.status(400).send({message: err.message})
            }
        }
    }

    id = {
        get: async (req: Request, res: Response, next: NextFunction) => {
            try {
                res.json(await HeroModel.getHero(parseInt(req.params.id)))
            } catch (err) {
                res.status(400).json({
                    message: err.message,
                    tip: "Check your hero's ID."
                })
            }
        },
        delete: async (req: Request, res: Response, next: NextFunction) => {
            try {
                await HeroModel.deleteHero(parseInt(req.params.id))
                res.status(200).send({message: `${req.body.name} deleted`})

            } catch (err) {
                res.status(400).json({
                    message: err.message,
                    tip: "Check your hero's ID."
                })
            }
        }
    }
}
