console.log("Vision Studio - 2018");

$('.page-scroll').on('click', function(e) {
  var target = $(this).attr('href');

  $('html, body').animate({
  scrollTop: $(target).offset().top - 60
  }, 800);
  e.preventDefault();
}); 

$(document).ready(function(){
  $('#nav-icon').click(function(){
  $(this).toggleClass('animate-icon');
    $('#overlay').fadeToggle();
  });
});

$(document).ready(function(){
  $('a.menu').click(function(){
    $('#nav-icon').removeClass('animate-icon');
    if ($(window).width() <= 720) {
      $('#overlay').toggle();   
    }
  });
});

$(document).on("scroll", function() {
  if($(document).scrollTop()>100) {
    $("header").css({"background-color":"rgba(0, 0, 0, .8)",
      "box-shadow":"0px 2px 10px 0px #2982bf"});
  }
  else {
    $("header").css({"background-color":"rgba(0, 0, 0, 0)",
      "box-shadow":"none"});
  }
});

$(window).resize(function() {
  if ($(window).width() > 720) {
     // $('#overlay').toggle();
    $('#overlay').css({"display":"block"});
  }
 else {
    $('#nav-icon').removeClass('animate-icon');
    $('#overlay').css({"display":"none"});
 }
});

$('img').each(function() {
var $img = $(this);
var imgURL = $img.attr('src');

$.get(imgURL, function(data) {
  // Get the SVG tag, ignore the rest
  var $svg = $(data).find('svg');
  // Replace image with new SVG
  $img.replaceWith($svg);
});
});


