const express = require('express')
const path = require('path');
const app = express()
const port = 8080;

//congif template engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/abc', function (req, res) {
    // res.send('Check ABC')
    res.render('sample')
})

app.listen(port, () => {
    console.log(`Example app listen on port ${port}`);
})