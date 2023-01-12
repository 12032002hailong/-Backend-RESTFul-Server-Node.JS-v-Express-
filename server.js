const express = require('express')
const app = express()
const port = 8080

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/abc', function (req, res) {
    res.send('Check ABC')
})

app.listen(port, () => {
    console.log(`Example app listen on port ${port}`);
})