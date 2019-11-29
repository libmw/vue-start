var express = require('express')
const cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())
app.all('/', function (req, res) {
        res.set({
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'X-PINGOTHER',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:4000',
            'ETag': '12345'

        })
    //res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000)})
    res.send('hello world')
    console.log('get request', new Date(), 'cookie:', req.cookies.rememberme);
})
app.listen(3001)