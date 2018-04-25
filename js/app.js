$(document).ready(function() {
var options = {
    stringsElement: '#introductionTyped',
    typeSpeed: 50,
    loop: true,
    backSpeed: 50,
}

var typed = new Typed("#intro", options);
});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
});