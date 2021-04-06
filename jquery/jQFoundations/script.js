$(document).ready(function(){
    console.log("hi");
    $("#add_btn").click(function () {
        $(".add p").addClass("red");
    });

    $(".hidden").hide();
    $("#slide_btn").click(function () {
        $(".hidden").slideToggle();
    });
    $("#slideDown_btn").click(function () {
        $(".slide #play").slideDown();
    });
    $("#slideUp_btn").click(function () {
        $(".slide  #play").slideUp();
    });
    $("#fadeIn_btn").click(function () {
        $(".slide  #play").fadeIn();
    });
    $("#fadeOut_btn").click(function () {
        $(".slide  #play").fadeOut();
    });

    $("#show").click(function () {
        $(".hidden").show();
    });

    $("#append_btn").click(function () {
        $(".append p").append(" This is an anothet text");
    });
    $("#before_btn").click(function () {
        $(".append p").before("Text Before!");
    });
    $("#after_btn").click(function () {
        $(".append p").after("Text After!");
    });

    $("#htmlBtn_btn").click(function () {
        $(".addHtml input").html(<input>Hello!</input>);
    });
    $("#attr_btn").click(function () {
        $(".addHtml input").attr("placeholder","Hi")
    });
    $("#htmlBtn_btn").click(function () {
        $(".addHtml input").text("text_btn");
    });

});