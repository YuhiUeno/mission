import { HeroDocument, HeroModel } from "./heroes.types"

export async function findOneOrCreate(
    this: HeroModel,
    heroId: number,
    name: string
): Promise<HeroDocument> {
    const record = await this.findOne({ heroId: heroId })
    if (record) {
        return record
    } else {
        return this.create({ heroId: heroId, name: name })
    }
}

export async function findByHeroId(
    this: HeroModel,
    min?: number,
    max?: number
): Promise<HeroDocument[]> {
    return this.find({ heroId: {$gte: min || 11, $lte: max || Infinity} })
}
