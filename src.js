$(document).ready(function(){
		$(".burger").on("click", function(e){
			e.preventDefault();
			$("nav ul").toggleClass("open");
		});

	});

$(".slide > div:gt(0)").hide();

setInterval(function() { 
  $('.slide > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slide');
},  3000);

$(window).scroll(function () {

    if ($(window).scrollTop() > 500) {
      $('nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 501) {
      $('nav').removeClass('navbar-fixed');
    }
  });

var hgt = $(window).height();
    $("#main").css("height", hgt)