$(document).ready(function () {
    var newImg;
    var oldImg;
    $('img').click(function () {
        newImg = $(this).attr('data-alt-src');
        oldImg = $(this).attr('src');
        if ($(this).attr('src') == oldImg) {
            $(this).attr('src', newImg);
            $(this).attr('data-alt-src', oldImg);
        } else {
            $(this).attr('src', oldImg);
            $(this).attr('data-alt-src', newImg);
        }
    });

});