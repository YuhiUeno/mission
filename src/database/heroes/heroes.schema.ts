import { Schema } from "mongoose"
import { findOneOrCreate, findByHeroId, addHero, deleteHero, getHero, getHeroes, updateHeroName } from "./heroes.statics"
import { setLastUpdate, sameName } from "./heroes.methods"

const HeroSchema = new Schema({
    heroId: {type: Number, unique: true},
    name: {type: String, required: true},
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
})

// methods
HeroSchema.methods.setLastUpdate = setLastUpdate;
HeroSchema.methods.sameName = sameName;

// statics
HeroSchema.statics.findOneOrCreate = findOneOrCreate;
HeroSchema.statics.findById = findByHeroId;

HeroSchema.statics.getHeroes = getHeroes;
HeroSchema.statics.getHero = getHero;
HeroSchema.statics.addHero = addHero;
HeroSchema.statics.updateHeroName = updateHeroName;
HeroSchema.statics.deleteHero = deleteHero;

export { HeroSchema }
