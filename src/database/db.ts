import * as Mongoose from 'mongoose'

let database: Mongoose.Connection

export const connect = () => {
    const URI = 'mongodb://127.0.0.1:27017/heroes'
    if (database) {
        return
    }

    Mongoose.connect(URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
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
