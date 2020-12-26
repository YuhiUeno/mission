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
                const hero = await HeroModel.addHero(name)
                // const hero = await HeroModel.findOne({name: name})
                res.json(hero)
            } catch (err) {
                res.status(400).send({error: err.message})
            }
        },
        put: async (req: Request, res: Response, next: NextFunction) => {
            try {
                await HeroModel.updateHeroName(parseInt(req.body.heroId), req.body.name)
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


export async function updateHeroName(heroId: number, name: string): Promise<void> {
    await HeroModel.findOneAndUpdate({heroId: heroId}, {name: name}, {new: true});
};