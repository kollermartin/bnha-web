
$(".toggleHeroes").click(function(){
  $("#allHeroes").slideToggle("1000",function(){
    // $("html,body").animate({
    //   scrollTop:$("#allHeroes").offset().top
    // },2000)
  })
});
$(".toggleHeroes").click(function(e){
  $("html,body").animate({
      scrollTop: $("#allHeroes").offset().top
    },1000)
});