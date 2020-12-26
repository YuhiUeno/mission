import { connect, disconnect } from "./database/db";
import { HeroModel } from "./database/heroes/heroes.model";

async function check() {
    connect()
    const hero = new HeroModel({name: "Narco"})
    console.log(hero.getHeroes())

    disconnect()
}

check()