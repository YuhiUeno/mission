import { HeroModel } from "./database/heroes/heroes.model";

async function check(id: number) {
    const hero = await HeroModel.getHero(id)
    console.log(hero)
}

check(14)