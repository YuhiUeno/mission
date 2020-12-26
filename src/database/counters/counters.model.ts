import { model } from "mongoose"
import { ICounterDocument, ICounterModel } from "./counters.types"
import { CounterSchema } from "./counters.schema"

export const CounterModel = model<ICounterDocument, ICounterModel>("counter", CounterSchema, 'counters')
