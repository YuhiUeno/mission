import { Schema } from "mongoose"
import { findOneOrCreate, findByHeroId, addHero, deleteHero, getHero, getHeroes } from "./heroes.statics"
import { setLastUpdate, sameName } from "./heroes.methods"

const HeroSchema = new Schema({
    heroId: Number,
    name: String,
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
})

// statics
HeroSchema.statics.findOneOrCreate = findOneOrCreate
HeroSchema.statics.findById = findByHeroId

HeroSchema.statics.getHeroes = getHeroes
HeroSchema.statics.getHero = getHero
HeroSchema.statics.addHero = addHero
HeroSchema.statics.deleteHero = deleteHero


// methods
HeroSchema.methods.setLastUpdate = setLastUpdate
HeroSchema.methods.sameName = sameName

export { HeroSchema }
