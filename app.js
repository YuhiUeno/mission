var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);

// Angular route setting
app.use(express.static(path.join(__dirname, '/dist/heroes')));
app.use('/*', express.static(path.join(__dirname, '/dist/heroes/index.html')));

var server = app.listen(4200, function(){
  console.log("started. port:" + server.address().port);
});

module.exports = app;
