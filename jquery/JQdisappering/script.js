$(document).ready(function(){
    $('img').click(function () {
        $(this).hide();
    });

    $('#btn').click(function (){
        $('img').show();
    });
});