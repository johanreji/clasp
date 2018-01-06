$(document).ready(function(){
		$(".burger").on("click", function(e){
			e.preventDefault();
			$("nav ul").toggleClass("open");
		});

	});