import * as expressJwt from "express-jwt";
import { UserModel } from "../database/users/users.model";

// import config from "../jwt/config.json";

// mock config data
const config = {
    connectionString: "mongodb://127.0.0.1:27017/heroes",
    secret: "TestSecretKey"
}

export function jwt() {
    console.log(1)
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            'api/users/authenticate',
            'api/users/register'
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
