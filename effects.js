// noinspection JSDeprecatedSymbols


$(".toggleHeroes").click(function(){
  $("#allHeroes").slideToggle("1000");
    $("html,body").animate({
        scrollTop: $("#allHeroes").offset().top
    }, 1000)
});

$(".toggleVillains").click(function(){
    $("#allVillains").slideToggle("1000");
    $("html,body").animate({
        scrollTop: $("#allVillains").offset().top

    }, 1000);
});

$(".toggleHeroes,.toggleVillains").click(function () {
    $(".card-2").slideUp();
    $(".card").slideDown();
});

$(".cardButton").click(function () {
    $(this).parents(".card").slideUp("slow",function () {
        $(this).siblings(".card-2").slideDown("slow");
    });

});

$(".card2Button").click(function () {
    $(this).parents(".card-2").slideUp("slow");
    $(this).parents(".card-2").siblings(".card").slideDown("slow");

});
$(".scrollToTop").click(function () {
    $("html,body").animate({
        scrollTop: $(".navbar").offset().top
    }, 500)

});
$(window).scroll(function () {

 if( $(window).scrollTop()>100){
     $(".scrollToTop").fadeIn();
 }
 else{
     $(".scrollToTop").fadeOut();
 }

});


