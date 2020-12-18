import { Request, Response, NextFunction } from 'express';

export class IndexController {
    index = (req: Request, res: Response, next: NextFunction) => {
        res.send('Index extended.');
    }
}