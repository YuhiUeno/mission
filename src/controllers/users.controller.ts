import { Request, Response, NextFunction } from 'express';

export class UserController {
    authenticate = (req: Request, res: Response, next: NextFunction) => {
        userService.authenticate(req.body)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
            .catch(err => next(err));
    }

    register = (req: Request, res: Response, next: NextFunction) => {
        userService.create(req.body)
            .then(() => res.json({}))
            .catch(err => next(err));
    }

    getAll = (req: Request, res: Response, next: NextFunction) => {
        userService.getAll()
            .then(users => res.json(users))
            .catch(err => next(err));
    }

    getCurrent = (req: Request, res: Response, next: NextFunction) => {
        userService.getById(req.user.sub)
            .then(user => user ? res.json(user) : res.sendStatus(404))
            .catch(err => next(err));
    }

    getById = (req: Request, res: Response, next: NextFunction) => {
        userService.getById(req.params.id)
            .then(user => user ? res.json(user) : res.sendStatus(404))
            .catch(err => next(err));
    }

    update = (req: Request, res: Response, next: NextFunction) => {
        userService.update(req.params.id, req.body)
            .then(() => res.json({}))
            .catch(err => next(err));
    }

    _delete = (req: Request, res: Response, next: NextFunction) => {
        userService.delete(req.params.id)
            .then(() => res.json({}))
            .catch(err => next(err));
    }
}