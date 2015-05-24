$(document).ready(function(){ 
    $("div").css("border", "0px solid red");
    $("#about-text").hide();
    $("#my-name").hide();
    $("#achev").hide();
    $("#email").hide();
    $("#linkedin").hide();
    $("#github").hide();
    $("#placeholder").hide();
    $("#my-name").fadeIn(2000);
    $("#achev").fadeIn(2000);
    $("#email").fadeIn(3000);
    $("#linkedin").fadeIn(3000);
    $("#github").fadeIn(3000);
    $("#placeholder").fadeIn(3000);
});    

$('.about-me').on('click', function(){
    $(this).toggleClass('active');
    //$("#about-text").fadeToggle(300);
    if($(this).hasClass('active')) {
        $("#about-text").fadeIn(900);
    } else {
        $("#about-text").fadeOut(200);
    }
});
