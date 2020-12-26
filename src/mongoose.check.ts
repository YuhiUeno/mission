import { connect, disconnect } from "./database/db";
import { HeroModel } from "./database/heroes/heroes.model";

async function check(id: number) {
    const db = connect()
    const hero = await db.HeroModel.getHero(id)
    console.log(hero)
    disconnect()
}

check(14)