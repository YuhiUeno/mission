import { IUserDocument } from "./users.types";
import { ObjectId } from "mongoose";
import { bcrypt } from "bcryptjs";

export async function createUser(
    this: IUserDocument,
    password: string
): Promise<void> {
    // validate
    if (await this.model("user").findOne({ email: this.email })) {
        throw 'Email "' + this.email + '" is already used';
    }

    // const user = new User(userParam);

    // hash password
    if (password) {
        this.hash = bcrypt.hashSync(password, 10);
    }

    // save user
    await this.save();
}

export async function updatePassword(
    this: IUserDocument,
    id: ObjectId,
    password: string
): Promise<void> {
    const user = await this.model("user").findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.email !== this.email && await this.model("user").findOne({ email: this.email })) {
        throw 'Email "' + this.email + '" is already used';
    }

    // hash password if it was entered
    if (password) {
        this.hash = bcrypt.hashSync(password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, this);

    await user.save();
}
