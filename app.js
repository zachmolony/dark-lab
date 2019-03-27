const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middleware
app.use(express.static(__dirname + '/dist/public'));

app.listen(3000, function() {
    console.log("listenin on andre 3000")
});

// when we get a req from the root (/) of the site, run inside code
app.post('/', function(req, res) {
    res.end('post route success');
})