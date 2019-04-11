$(document).ready(function () {
    $('.menu a').click(function (event) { 
        event.preventDefault();
        $('.menu').toggleClass("barSwitch");
    });
});