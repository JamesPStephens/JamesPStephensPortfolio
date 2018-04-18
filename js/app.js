$(document).ready(function() {
var options = {
    stringsElement: '#Introduction-typed',
    typeSpeed: 50
}

var typed = new Typed("#intro", options);
});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
});