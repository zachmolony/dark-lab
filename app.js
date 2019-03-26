const express = require('express');
const app = express();

// middleware
app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
    console.log("listenin on andre 3000")
});
