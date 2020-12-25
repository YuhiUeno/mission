// import { MongoClient, Collection } from 'mongodb'
import * as Mongoose from 'mongoose'
import { Hero } from './heroes/heroes.types'
import { Counter } from './counters/counters.types'

let database: Mongoose.Connection

export const connect = () => {
    const URI = 'mongodb://127.0.0.1:27017/heroes'

    if (database) {
        return
    }

    Mongoose.connect(URI, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

    database = Mongoose.connection

    database.once("open", async () => {
        console.log("connected to database")
    })

    database.on("error", () => {
        console.log("Error connecting to database")
    })
}

export const disconnect = () => {
    if (!database) {
        return
    }

    Mongoose.disconnect()
}

/*
// When you add a new schema, declare it here.
export const collections: {
    hero: Collection<Hero>,
    counter: Collection<Counter>,
    user: Collection<User>
} = {
    hero: null,
    counter: null,
    user: null
}

export async function connect() {
    const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = client.db('heroes')

    // You also have to register it here.
    collections.hero = db.collection<Hero>('heroes')

    collections.counter = db.collection<Counter>('counters')
    
    collections.user = db.collection<User>('users')
    collections.user.


    return client
}
*/
