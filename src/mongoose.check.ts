import { connect, disconnect } from "./database/db";
import { HeroModel } from "./database/heroes/heroes.model";

async function check(id: number) {
    connect()
    const hero = new HeroModel({name: "Narco"})
    console.log(await hero.sameName())

    disconnect()
}

check(13)