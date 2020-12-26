import { connect, disconnect } from "./database/db";
import { HeroModel } from "./database/heroes/heroes.model";

async function check(id: number) {
    const hero = await HeroModel.findOne({heroId: id})
    console.log(hero)
}

check(14)