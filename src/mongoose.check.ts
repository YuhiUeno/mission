import { connect, disconnect } from "./database/db";
import { HeroModel } from "./database/heroes/heroes.model";

async function check(id: number) {
    connect()
    const hero = await HeroModel.findOne({heroId: id})
    console.log(hero)
    disconnect()
}

check(14)