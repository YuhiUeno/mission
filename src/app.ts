import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';

import {router as indexRouter} from './routes/indexRouter';
import {router as usersRouter} from './routes/usersRouter';
import {router as heroesRouter} from './routes/heroesRouter';

const app = express();

// view engine setup
// app.set('/', path.join(__dirname, '../dist/heroes'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/heroes', heroesRouter);

// Angular route setting
app.use(express.static(path.join(__dirname, '../dist/heroes')));
app.use('/*', express.static(path.join(__dirname, '../dist/heroes/index.html')));

//const server = app.listen(4200, function(){
//  console.log("Port 4200 started.");
//});

export {app};
