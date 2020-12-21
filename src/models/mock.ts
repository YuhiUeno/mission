import * as db from './db'
import { Hero } from './db'

const HEROES: Hero[] = [
    { _id: 11, name: 'Dr Nice' },
    { _id: 12, name: 'Narco' },
    { _id: 13, name: 'Bombasto' },
    { _id: 14, name: 'Celeritas' },
    { _id: 15, name: 'Magneta' },
    { _id: 16, name: 'RubberMan' },
    { _id: 17, name: 'Dynama' },
    { _id: 18, name: 'Dr IQ' },
    { _id: 19, name: 'Magma' },
    { _id: 20, name: 'Tornado' }
]

async function addMock() {
    const client = await db.connect()

    const res = await db.collections.hero.insertMany(HEROES)
    if (res.result.ok) {
        console.log(`${res.result.n} documents successfully inserted.`)
    } else {
        const e = new Error("couldn't insert documents")
        throw e
    }

    client.close()
}

addMock()
