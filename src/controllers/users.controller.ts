import { Request, Response, NextFunction } from 'express';
import { UserModel } from "../database/users/users.model"

export class UserController {
    authenticate = (req: Request, res: Response, next: NextFunction) => {
        UserModel.authenticate(req.body.email, req.body.password)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'email or password is incorrect' }))
            .catch(err => next(err));
    }

    register = (req: Request, res: Response, next: NextFunction) => {
        const userModel = new UserModel({
            email: req.body.email,
            name: req.body.name
        });
        userModel.createUser(req.body.password)
            .then(() => res.json({}))
            .catch(err => {next(err)});
    }

    getAll = (req: Request, res: Response, next: NextFunction) => {
        UserModel.getAll()
            .then(users => res.json(users))
            .catch(err => next(err));
    }

    getCurrent = (req: Request, res: Response, next: NextFunction) => {
        // UserModel.getById(req.user.sub)
        UserModel.getById(req.params.id)
            .then(user => user ? res.json(user) : res.sendStatus(404))
            .catch(err => next(err));
    }

    getById = (req: Request, res: Response, next: NextFunction) => {
        UserModel.getById(req.params.id as string)
            .then(user => user ? res.json(user) : res.sendStatus(404))
            .catch(err => next(err));
    }

    update = (req: Request, res: Response, next: NextFunction) => {
        const userModel = new UserModel({
            email: req.body.email,
            name: req.body.name
        });
        userModel.updatePassword(req.params.id as string, req.body.password)
            .then(() => res.json({}))
            .catch(err => next(err));
    }

    _delete = (req: Request, res: Response, next: NextFunction) => {
        UserModel._delete(req.params.id)
            .then(() => res.json({}))
            .catch(err => next(err));
    }
}