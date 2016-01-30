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
            playHadouken()
            $('.ryu-action').hide();
            $('.ryu-throw').show();
            $('.hadouken-bubble').show();
            $('.hadouken').finish().show().animate({
                    'left': '1075px'
                },
                500,
                function () {
                    $(this).hide();
                    $(this).css('left', '585px');
                }
            );

        })
        .mouseup(function () {
            $('.ryu-action').hide();
            $('.hadouken-bubble').hide();
            $('.ryu-ready').show();

        })
    $(document).keydown(function (key) {
            if (key.which == 88)
                $('.ryu-action').hide();
            $('.ryu-cool').show();
        })
        .keyup(function (key) {
            if (key.which == 88)
                $('.ryu-action').hide();
            $('.ryu-still').show();
        });

});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
