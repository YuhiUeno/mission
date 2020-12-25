import { Document, Model } from "mongoose"


export interface Hero {
    heroId: number
    name: string
    dateOfEntry?: Date
    lastUpdated?: Date
}

export interface HeroDocument extends Hero, Document {
    setLastUpdated: (this: HeroDocument) => Promise<void>
    sameName: (this: HeroDocument) => Promise<Document[]>
}

export interface HeroModel extends Model<HeroDocument> {
    findOneOrCreate: (
        this: HeroModel,
        {
            heroId,
            name
        }: {
            heroId: number
            name: string
        }
    ) => Promise<HeroDocument>

    findByHeroId: (
        this: HeroModel,
        min?: number,
        max?: number
    ) => Promise<HeroDocument[]>
}
