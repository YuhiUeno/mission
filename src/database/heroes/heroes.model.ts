import { model } from "mongoose"
import { IHeroDocument, IHeroModel } from "./heroes.types"
import { HeroSchema } from "./heroes.schema"

export const HeroModel = model<IHeroDocument, IHeroModel>("hero", HeroSchema, "heroes")
