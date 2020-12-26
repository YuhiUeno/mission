import { IHeroDocument, IHeroModel } from "./heroes.types"
import { CounterModel } from "../counters/counters.model"

export async function findOneOrCreate(
    this: IHeroModel,
    heroId: number,
    name: string
): Promise<IHeroDocument> {
    const record = await this.findOne({ heroId: heroId })
    if (record) {
        return record
    } else {
        return this.create({ heroId: heroId, name: name })
    }
}

export async function findByHeroId(
    this: IHeroModel,
    min?: number,
    max?: number
): Promise<IHeroDocument[]> {
    return this.find({ heroId: {$gte: min || 11, $lte: max || Infinity} })
}

export async function getHeroes(
    this: IHeroModel
): Promise<IHeroDocument[]> {
    return this.find()
}

export async function getHero(
    this: IHeroModel,
    heroId: number
): Promise<IHeroDocument> {
    return this.findOne({heroId: heroId})
}

export async function updateHeroName(
    this: IHeroModel,
    heroId: number,
    name: string
): Promise<void> {
    this.updateOne(
        {heroId: heroId}, 
        {$set: {name: name}}
    )
}

export async function addHero(
    this: IHeroModel,
    name: string
): Promise<void> {
    await CounterModel.findOneAndUpdate(
        {key: "heroId"},
        {$inc: {seq: 1}},
        {upsert: true},
    )
    
    console.log(await CounterModel.findOne({key: "heroId"}))
    await this.create({heroId: null, name: name})
    
    // const seq = result.seq
    // await this.create({heroId: seq, name: name})
    // console.log(seq)
}

export async function deleteHero(
    this: IHeroModel,
    heroId: number
): Promise<IHeroDocument> {
    return this.findOneAndDelete({heroId: heroId})
}
