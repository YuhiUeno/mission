import { connect, disconnect } from './db'
import { HeroModel } from './heroes/heroes.model'
import { Hero } from './heroes/heroes.types'

const HEROES: Hero[] = [
    { heroId: 11, name: 'Dr Nice' },
    { heroId: 12, name: 'Narco' },
    { heroId: 13, name: 'Bombasto' },
    { heroId: 14, name: 'Celeritas' },
    { heroId: 15, name: 'Magneta' },
    { heroId: 16, name: 'RubberMan' },
    { heroId: 17, name: 'Dynama' },
    { heroId: 18, name: 'Dr IQ' },
    { heroId: 19, name: 'Magma' },
    { heroId: 20, name: 'Tornado' }
]

async function addMock() {
    connect()
    try {
        await HeroModel.insertMany(HEROES)
        console.log('Heroes are registered.')

        disconnect()
    } catch (e) {
        console.error(e)
    }
    // const res = await db.collections.hero.insertMany(HEROES)
    // if (res.result.ok) {
    //     console.log(`${res.result.n} documents successfully inserted.`)
    // } else {
    //     const e = new Error("couldn't insert documents")
    //     throw e
    // }

    // client.close()
}

addMock()
