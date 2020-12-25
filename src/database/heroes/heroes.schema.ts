import { Schema } from "mongoose"
import { findOneOrCreate, findByHeroId } from "./heroes.statics"
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
HeroSchema.index({heroId: 1, unique: true})

HeroSchema.statics.findOneOrCreate = findOneOrCreate
HeroSchema.statics.findById = findByHeroId

HeroSchema.methods.setLastUpdate = setLastUpdate
HeroSchema.methods.sameName = sameName

export { HeroSchema }
