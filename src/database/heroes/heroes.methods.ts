import { Document } from "mongoose"
import { CounterModel } from "../counters/counters.model"
import { IHeroDocument } from "./heroes.types"

export async function setLastUpdate(this: IHeroDocument) :Promise<void> {
    const now = new Date()
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now
        await this.save()
    }
}

export async function sameName(this: IHeroDocument): Promise<Document[]> {
    return this.model("hero").find( {name: this.name} )
}




export async function getHeroes(
    this: IHeroDocument
): Promise<IHeroDocument[]> {
    return this.model("hero").find()
}

export async function getHero(
    this: IHeroDocument,
    heroId: number
): Promise<IHeroDocument> {
    return this.model("hero").findOne({heroId: heroId})
}

export async function updateHeroName(
    this: IHeroDocument,
    heroId: number,
    name: string
): Promise<void> {
    this.model("hero").updateOne(
        {heroId: heroId}, 
        {$set: {name: name}}
    )
}

export async function addHero(
    this: IHeroDocument,
    name: string
): Promise<void> {
    const result = await CounterModel.findOneAndUpdate(
        {key: "heroId"},
        {$inc: {seq: 1}},
        {upsert: true, returnOriginal: true},
    )
    await this.model("hero").create({heroId: result.seq, name: name})
}

export async function deleteHero(
    this: IHeroDocument,
    heroId: number
): Promise<IHeroDocument> {
    return this.model("hero").findOneAndDelete({heroId: heroId})
}
