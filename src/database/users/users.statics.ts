import { IUserDocument, IUserModel } from "./users.types";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

//const db = require('_helpers/db');
// mock config data
const config = {
    connectionString: "mongodb://127.0.0.1:27017/heroes",
    secret: "TestSecretKey"
}

export async function authenticate(
    this: IUserModel,
    email: string,
    password: string
) {
    console.log(6)
    const user = await this.findOne({ email: email });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
        return {
            ...user.toJSON(),
            token
        };
    }
}

export async function getAll(this: IUserModel): Promise<IUserDocument[]> {
    return this.find();
}

export async function getById(
    this: IUserModel,
    id: string
): Promise<IUserDocument> {
    return this.findById(id);
}

export async function _delete(
    this: IUserModel,
    id: string
): Promise<void> {
    await this.findByIdAndRemove(id);
}
