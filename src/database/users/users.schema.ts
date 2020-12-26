import { Schema } from "mongoose";
import { createUser, updatePassword } from "./users.methods";
import { authenticate, getAll, getById, _delete } from "./users.statics";

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    name: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

UserSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

// methods
UserSchema.methods.createUser = createUser
UserSchema.methods.updatePassword = updatePassword

// statics
UserSchema.statics.authenticate = authenticate
UserSchema.statics.getAll = getAll
UserSchema.statics.getById = getById
UserSchema.statics._delete = _delete

export { UserSchema }
