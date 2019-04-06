$(document).ready(function () {
    if (!sessionStorage.getItem('firstLoad')) {
        $('#header').css('display', 'none');
        $('#store').css({'top':'0', 'display':'block'});
        $('#nav').css('display', 'block');
    } else {
        $(".button").click(function () {
            sessionStorage.setItem('firstLoad',  true);
            $(".skull").fadeOut();
            $(".button").fadeOut();

            setTimeout(function () {
                $("#img").animate({
                    'top': '16vw'
                }, 900)
            }, 800);

            setTimeout(function () {
                $("#store").animate({
                    'top': 0
                }, {
                    'duration': 100,
                    'queue': false
                });
            }, 1000);
            setTimeout(function () {
                $("#nav").fadeIn({
                    'duration': 1000
                });
                $("#store").fadeIn({
                    'duration': 500,
                    'queue': true
                });
            }, 1800);
        });
    }
});

function dropmenu() {
    if ($('.dropdown-content').css('display') == 'block') {
        $('.dropdown-content').css({'display':'none'});
    } else {
        $('.dropdown-content').css({'display':'block'})
    }
};