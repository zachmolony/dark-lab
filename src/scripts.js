var $ = require('jquery');

// prevent page reload on submit
$('form').submit(function (event) {
    var userEmail = $('#email').val();
    event.preventDefault();
    // send ajax req to server
    $.ajax({
        url: '/',
        type: 'POST',
        data: {
            email: userEmail
        },
        success: function (response) {
            console.log(response);
        }
    });
});