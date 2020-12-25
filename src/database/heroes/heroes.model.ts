import { model } from "mongoose"
import { HeroDocument } from "./heroes.types"
import { HeroSchema } from "./heroes.schema"

export const HeroModel = model<HeroDocument>("hero", HeroSchema, 'heroes')
