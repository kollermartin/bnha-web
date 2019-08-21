// noinspection JSDeprecatedSymbols

$(".toggleHeroes").click(function(){
  $("#allHeroes").slideToggle("1000",function(){

  })
});
 // noinspection JSDeprecatedSymbols
$(".toggleHeroes").click(function () {
    $("html,body").animate({
        scrollTop: $("#allHeroes").offset().top
    }, 1000)
});


$(".toggleVillains").click(function(){
    $("#allVillains").slideToggle("1000",function(){

    })
});

// noinspection JSDeprecatedSymbols
$(".toggleVillains").click(function () {
    $("html,body").animate({
        scrollTop: $("#allVillains").offset().top
    }, 1000)
});
$(".cardButton").click(function () {

    $(this).parents(".card").slideUp("slow",function () {
        $(this).siblings(".card-2").slideDown("slow");
    });

});

$(".card2Button").click(function () {
    $(this).parents(".card-2").siblings(".card").slideDown("slow");
    $(this).parents(".card-2").slideUp("slow");
})


