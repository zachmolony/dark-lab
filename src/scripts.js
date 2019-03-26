var $ = require('jquery');

// prevent page reload on submit
$('form').submit(function (event) {
    event.preventDefault();
    // send ajax req to server
    $.ajax({
        url: '/',
        type: 'POST',
        data: {
            email: 'zach.molony@mail.com'
        },
        success: function (response) {
            console.log(response);
        }
    });
});