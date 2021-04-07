$(document).ready(function () {
    var newImg;
    var oldImg;
    $('img').hover(function () {
        newImg = $(this).attr('data-alt-src');
        oldImg = $(this).attr('src');
            $(this).attr('src', newImg);
            $(this).attr('data-alt-src', oldImg);
        },function () { {
            $(this).attr('src', oldImg);
            $(this).attr('data-alt-src', newImg);
        }
    });

});