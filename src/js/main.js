// console.log("gulp bootstrap starter");
$('.page-scroll').on('click', function(e) {
	var target = $(this).attr('href');

	// $('body').scrollTop(target.offset().top);
	$('body').animate({
        scrollTop: $(target).offset().top - 60
    }, 800);

	e.preventDefault();
});	


function openNav() {
    // document.getElementById("menu-resv").style.opacity = 1;	
    // document.getElementById("menu-resv").style.display = "block";
    // document.getElementById("menu-resv").style.width = "100%";
    // $("#menu-resv").css({'animation': 'fadein .5s'})
    $("#menu-resv").animate({height: "100%"});
}

function closeNav() {
    // document.getElementById("menu-resv").style.width = "0%";
    // document.getElementById("menu-resv").style.opacity = 0;
    // document.getElementById("menu-resv").style.display = "none";
    $("#menu-resv").animate({height: "0"});
}

