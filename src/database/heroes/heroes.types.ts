import { Document, Model } from "mongoose"


export interface IHero {
    heroId: number
    name: string
    dateOfEntry?: Date
    lastUpdated?: Date
}

export interface IHeroDocument extends IHero, Document {
    setLastUpdated: (this: IHeroDocument) => Promise<void>
    sameName: (this: IHeroDocument) => Promise<Document[]>

    getHeroes: (
        this: IHeroDocument,
    ) => Promise<Document>

    getHero: (
        this: IHeroDocument,
        heroId: number
    ) => Promise<Document>

    updateHeroName: (
        this: IHeroDocument,
        heroId: number,
        name: String
    ) => Promise<void>

    addHero: (
        this: IHeroDocument,
        name: String
    ) => Promise<void>

    deleteHero: (
        this: IHeroDocument,
        heroId: number
    ) => Promise<Document>
}

export interface IHeroModel extends Model<IHeroDocument> {
    findOneOrCreate: (
        this: IHeroModel,
        {
            heroId,
            name
        }: {
            heroId: number
            name: string
        }
    ) => Promise<IHeroDocument>

    findByHeroId: (
        this: IHeroModel,
        min?: number,
        max?: number
    ) => Promise<IHeroDocument[]>

    getHeroes: (
        this: IHeroModel,
    ) => Promise<IHeroDocument>

    getHero: (
        this: IHeroModel,
        heroId: number
    ) => Promise<IHeroDocument>

    updateHeroName: (
        this: IHeroModel,
        heroId: number,
        name: String
    ) => Promise<void>

    addHero: (
        this: IHeroModel,
        name: String
    ) => Promise<void>

    deleteHero: (
        this: IHeroModel,
        heroId: number
    ) => Promise<IHeroDocument>
}
