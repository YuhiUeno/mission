import * as express from 'express'
import * as path from 'path'
import * as cookieParser from 'cookie-parser'
import * as logger from 'morgan'

import {router as indexRouter} from './routes/indexRouter';
import {router as usersRouter} from './routes/users.router';
import {router as heroesRouter} from './routes/heroes.router';

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/heroes', heroesRouter);

// Angular route setting
app.use(express.static(path.join(__dirname, '../dist/mission')));
app.use('/*', express.static(path.join(__dirname, '../dist/mission/index.html')));


// DB connection


export {app};
