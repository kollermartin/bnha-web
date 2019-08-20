// noinspection JSDeprecatedSymbols

$(".toggleHeroes").click(function(){
  $("#allHeroes").slideToggle("1000",function(){
    // $("html,body").animate({
    //   scrollTop:$("#allHeroes").offset().top
    // },2000)
  })
});
 // noinspection JSDeprecatedSymbols
$(".toggleHeroes").click(function () {
    $("html,body").animate({
        scrollTop: $("#allHeroes").offset().top
    }, 1000)
});

// $(".toggleVillains").click(function(){
//     $("#allVillains").slideToggle("1000",function(){
//
//     })
// });
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

