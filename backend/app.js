var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var http = require('http');
var socket = require('socket.io')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rceRouter = require('./routes/rce');

/** Express Stuff */

var app = express();

app.set('port', 5000);

const server = http.createServer(app);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rce', rceRouter);


/** Socket Stuff */

const io = socket.listen(server);

io.on('connection', (client) => {
    console.log('A client has connected', client.id);

    client.on('codeChange', ({newCode}) => {
        console.log('New code recived from', client.id, 'code:',newCode);
        io.sockets.emit('codeChange', { newCode });
    })

    client.on('drawChange', ({newOperation}) => {
        console.log('New draw operation recived from', client.id, newOperation);
        io.sockets.emit('drawChange',{newOperation});
    })
});

server.listen(5000, () => {
    console.log('Server is now running on port 5000')
});

module.exports = app;
