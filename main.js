
$(document).ready(function () {
    if (sessionStorage.getItem('firstLoad')) {
        document.getElementById('mob_header').style.display = "none";
        document.getElementById('store').style.top = 0;
        document.getElementById('store').style.display = "block";
        document.getElementById('nav').style.display = "block";
        document.getElementById('logo-firstload').style.display = "block";
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
