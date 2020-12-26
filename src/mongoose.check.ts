import { connect, disconnect } from "./database/db";
import { HeroModel } from "./database/heroes/heroes.model";

async function check(min: number, max: number) {
    connect()
    const heroes = await HeroModel.findByHeroId(min, max)
    console.log(heroes)
    disconnect()
}

check(13,15)