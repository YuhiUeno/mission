import { Document } from "mongoose"
import { HeroDocument } from "./heroes.types"

export async function setLastUpdate(this: HeroDocument) :Promise<void> {
    const now = new Date()
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now
        await this.save()
    }
}

export async function sameName(this: HeroDocument): Promise<Document[]> {
    return this.model("hero").find( {name: this.name} )
}
