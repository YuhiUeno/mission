import { IUserDocument, IUserModel } from "./users.types";
import { jwt } from "jsonwebtoken";
import { bcrypt } from "bcryptjs";
import { ObjectId } from "mongoose";

const db = require('_helpers/db');
const User = db.User;

// mock config data
const config = {
    connectionString: "mongodb://localhost/node-mongo-registration-login-api",
    secret: "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}

export async function authenticate(
    this: IUserModel,
    email: string,
    password: string
) {
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
    id: number
): Promise<IUserDocument> {
    return this.findById(id);
}

export async function _delete(
    this: IUserModel,
    id: ObjectId
): Promise<void> {
    await User.findByIdAndRemove(id);
}
