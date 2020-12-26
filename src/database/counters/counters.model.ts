import { model } from "mongoose"
import { CounterDocument } from "./counters.types"
import { CounterSchema } from "./counters.schema"

export const CounterModel = model<CounterDocument>("counter", CounterSchema, 'counters')
