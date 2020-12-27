import * as expressJwt from "express-jwt";
// import config from "../jwt/config.json";
import { UserModel } from "../database/users/users.model";

// mock config data
const config = {
    connectionString: "mongodb://localhost/node-mongo-registration-login-api",
    secret: "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}

export function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await UserModel.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};
