$(document).ready(function () {
    $('.ryu-action').hide();
    $('.ryu-still').show();

    $('.ryu').mouseenter(function () {
            $('.ryu-action').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu-action').hide();
            $('.ryu-still').show();

        })
        .mousedown(function () {
            //play Hadouken sound
            $('.ryu-action').hide();
            $('.ryu-throw').show();
            $('.hadouken').show();
            //animate hadouken
        })
        .mouseup(function () {
            $('.ryu-action').hide();
            $('.ryu-ready').show();
        });

});
