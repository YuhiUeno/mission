import { Document } from "mongoose"
import { IHeroDocument } from "./heroes.types"

export async function setLastUpdate(this: IHeroDocument) :Promise<void> {
    const now = new Date()
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now
        await this.save()
    }
}

export async function sameName(this: IHeroDocument): Promise<Document[]> {
    return this.model("hero").find( {name: this.name} )
}
