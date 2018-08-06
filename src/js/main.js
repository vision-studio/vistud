// console.log("gulp bootstrap starter");
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
  $('#overlay').click(function(){
  	if ($(window).width() < 720) {
			$('#nav-icon').removeClass('animate-icon');
			$('#overlay').toggle();	
		};
		// alert('oy');
    
  });
});

$(window).resize(function() {
  if ($(window).width() > 720) {
  	$("#overlay").css("display", "block"); } 
  else {
  	$("#overlay").css("display", "none"); }
});

$(function(){
  $(window).scroll(function(){
    if ($(window).width() < 720 ) {
	    if ($("#overlay").css("display", "none")) 
		    {
		    	$('#nav-icon').removeClass('animate-icon');	
		    }
    }
	  
  });
});

