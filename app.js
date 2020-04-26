const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./routes');


const app = express();

// enable handlebars who view
app.engine('handlebars',
    exphbs({
        defaultLayout:'layout'
    })
);

app.set('view engine','handlebars');

// static file
app.use(express.static(path.join(__dirname,'public')));

app.use('/', router());

app.listen('5000');
console.log('server run: 5000');
