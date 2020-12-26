import { Document, Model } from "mongoose"

export interface ICounter {
    key: string
    seq: number
}

export interface ICounterDocument extends ICounter, Document {}
export interface ICounterModel extends Model<ICounterDocument> {}
