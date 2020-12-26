import { connect, disconnect } from "./database/db";
import { HeroModel } from "./database/heroes/heroes.model";

async function check(min: number, max: number) {
    connect()
    const hero = new HeroModel({name: 'Narco', heroId: 30})
    console.log(await hero.sameName())
    disconnect()
}

check(13,15)