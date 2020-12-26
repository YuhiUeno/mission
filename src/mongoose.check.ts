import { connect, disconnect } from "./database/db";
import { HeroModel } from "./database/heroes/heroes.model";

async function check(min: number, max: number) {
    connect()
    console.log(await HeroModel.hello())

    disconnect()
}

check(13,15)