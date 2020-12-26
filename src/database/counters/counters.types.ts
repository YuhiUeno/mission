import { Document, Model } from "mongoose"

export interface Counter {
    key: string
    seq: number
}

export interface CounterDocument extends Counter, Document {}
export interface CounterModel extends Model<CounterDocument> {}
