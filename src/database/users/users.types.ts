import { Document, Model, ObjectId } from "mongoose"


export interface IUser {
    email: string
    name: string
    hash: string
    createdDate?: Date
}

export interface IUserDocument extends IUser, Document {
    createUser: (
        this: IUserDocument,
        password: string
    ) => Promise<void>

    updatePassword: (
        this: IUserDocument,
        id: ObjectId,
        password: string
    ) => Promise<void>
}

export interface IUserModel extends Model<IUserDocument> {
    authenticate: (
        this: IUserModel,
        email: string,
        password: string
    ) => Promise<any>
    
    getAll: (this: IUserModel) => Promise<IUserDocument[]>
    
    getById: (
        this: IUserModel,
        id: number
    ) => Promise<IUserDocument>
    
    _delete: (
        this: IUserModel,
        id: ObjectId
    ) => Promise<void>
}