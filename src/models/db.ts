import { MongoClient, ObjectId, Collection } from 'mongodb';

// connect to mongodb
const MONGODB_URI = 'mongodb://127.0.0.1:27017/heroes'

// Hero Schema
export type Hero = {
    _id: number
    name: string
}

export type Counter = {
    key: string
    seq: number
}

// collections
export const collections: {
    hero: Collection<Hero>,
    counter: Collection<Counter>
} = {
    hero: null,
    counter: null
}

export async function connect() {
    const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = client.db('heroes')

    collections.hero = db.collection<Hero>('heroes')
    collections.counter = db.collection<Counter>('counters')

    return client
}
