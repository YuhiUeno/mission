import { Schema } from "mongoose"

const CounterSchema = new Schema({
    key: String,
    seq: Number
})
CounterSchema.index({key: 1}, {unique: true})

export { CounterSchema }
