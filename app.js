const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middleware
app.use(express.static(__dirname + '/dist/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// create server
app.listen(3000, function() {
    console.log("listenin on andre 3000")
});

// when we get a req from the root (/) of the site, run inside code
app.post('/', function(req, res) {
    console.log(req.body);
    res.end('post route success');
})