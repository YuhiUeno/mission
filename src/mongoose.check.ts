import { connect, disconnect } from "./database/db";
import { HeroModel } from "./database/heroes/heroes.model";

async function check(id: number) {
    connect()
    const hero = new HeroModel()
    console.log(await hero.getHero(id))

    disconnect()
}

check(13)