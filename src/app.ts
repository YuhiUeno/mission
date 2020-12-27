import * as express from 'express'
import * as path from 'path'
import * as cookieParser from 'cookie-parser'
import * as logger from 'morgan'
import * as cors from 'cors'

import { indexRouter } from './routes/indexRouter'
import { userRouter } from './routes/users.router'
import { heroRouter } from './routes/heroes.router'
import { jwt } from './_helpers/jwt'
import { errorHandler } from './_helpers/error-handler'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(jwt())
// app.use(cors())

app.use('/api/', indexRouter)
app.use('/api/users', userRouter)
app.use('/api/heroes', heroRouter)

// global error handler
app.use(errorHandler)

// Angular route setting
app.use(express.static(path.join(__dirname, '../dist/mission')))
app.use('/*', express.static(path.join(__dirname, '../dist/mission/index.html')))

export {app}
