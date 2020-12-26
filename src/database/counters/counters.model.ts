import { model } from "mongoose"
import { ICounterDocument } from "./counters.types"
import { CounterSchema } from "./counters.schema"

export const CounterModel = model<ICounterDocument>("counter", CounterSchema, 'counters')
