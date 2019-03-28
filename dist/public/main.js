$(document).ready(function () {
    if (sessionStorage.getItem('firstLoad')) {
        $('#mob_header').css('display', 'none');
        $('#store').css({'top':'0', 'display':'block'});
        $('#nav').css('display', 'block');
        $('#logo-firstload').css('display', 'block');
    } else {
        $(".button").click(function () {
            sessionStorage.setItem('firstLoad',  true);
            $(".skull_mob").fadeOut();
            $(".button").fadeOut();

            setTimeout(function () {
                $("#mobimg").animate({
                    top: 65
                }, 900)
            }, 800);

            setTimeout(function () {
                $("#store").animate({
                    top: 0
                }, {
                    duration: 300,
                    queue: false
                });
                $("#store").fadeIn({
                    duration: 450,
                    queue: false
                });
            }, 1400);
            setTimeout(function () {
                $("#nav").fadeIn({
                    duration: 250
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