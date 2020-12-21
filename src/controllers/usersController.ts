import { Request, Response, NextFunction } from 'express';

export class UsersController {
    index = (req: Request, res: Response, next: NextFunction) => {
        res.send('Users extended.');
    }
}