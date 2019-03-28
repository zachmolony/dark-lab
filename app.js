const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require("request");

// middleware
app.use(express.static(__dirname + '/dist/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

// create server
app.listen(3000, function () {
    console.log("listenin on andre 3000")
});

// when we get a req from the root (/) of the site, run inside code
app.post('/', function (req, res) {
    postToMailchimp(req.body.email);
    res.end('post route success');
})

// post email address to mc
function postToMailchimp(email) {

    var options = {
        method: 'POST',
        url: 'https://us20.api.mailchimp.com/3.0/lists/4faf0ee8ab/members',
        headers: {
            'Postman-Token': 'cc367f26-eb4f-4536-8ec4-1522cbbff574',
            'cache-control': 'no-cache',
            Authorization: 'Basic YWRtaW46NjJlMjUxNDVkMjA1M2UzNjU1OTJlMzMwNWZlNzI2MjUtdXMyMA==',
            'Content-Type': 'application/json'
        },
        body: {
            email_address: email,
            status: 'subscribed'
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });

}