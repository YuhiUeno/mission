import { Request, Response, NextFunction } from 'express'
import { HeroModel } from '../database/heroes/heroes.model'

export class HeroesController {
    index = {
        get: async (req: Request, res: Response, next: NextFunction) => {
            if (req.params.name) {
                console.log(req.params.name)
            } else {
                res.json(await HeroModel.getHeroes())
            }
        },
        post: async (req: Request, res: Response, next: NextFunction) => {
            try {
                res.json(await HeroModel.addHero(req.body.name))
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

// export async function getHeroes() {
//     return await db.collections.hero.find().toArray()
// }

// export async function getHero(id: number) {
//     const hero = await db.collections.hero.findOne({_id: id})
//     if (hero) {
//         // return {
//         //     id: hero._id,
//         //     name: hero.name
//         // }
//         return hero
//     } else {
//         throw new Error("That hero does't exist.")
//     }
// }

// export async function updateHeroName(id: number, name: string) {
//     await db.collections.hero.updateOne(
//         {_id: id}, 
//         {$set: {name: name}}
//     )
// }

// export async function addHero(name: string) {
//     const result = await db.collections.counter.findOneAndUpdate(
//         {key: "hero_id"},
//         {$inc: {seq: 1}},
//         {upsert: true, returnOriginal: true},
//     )
//     const hero = {_id: result.value.seq, name: name}
//     await db.collections.hero.insertOne(hero)
//     return hero
// }

// export async function deleteHero(id: number) {
//     await db.collections.hero.deleteOne({_id: id})
// }
