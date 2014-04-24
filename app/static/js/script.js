$(document).ready(function(){

	// $('.nav-bar').waypoint(function(direction){
	// 	if (direction == 'down') {
	// 		$('.nav-bar').css({'position':'fixed', 'top': '0px'});
	// 	} else {
	// 		$('.nav-bar').css({'position':'absolute', 'top': 'auto'});
	// 	}
	// });

	// 	$(window).scroll(function(){
	// 	var offset = $(window).scrollTop();
	// 	if (offset >= 502) {
	// 		alert('I am working!');
	// 		$('.nav-bar').css({'position': 'fixed', 'top': '0px'});
	// 	} else {
	// 		$('.nav-bar').css({'position': 'absolute', 'top':'auto'});
	// 	}
	// });


	$("#next-1").click(function(){
	  $("#education").hide(600);
	  $("#tech").show(600);
	});

	$("#next-2").click(function(){
	  $("#tech").hide(600);
	  $("#leadership").show(600);
	});

	$("#next-3").click(function(){
	  $("#leadership").hide(600);
	  $("#computer").show(600);
	});

	$("#back-1").click(function(){
	  $("#tech").hide(600);
	  $("#education").show(600);
	});

	$("#back-2").click(function(){
	  $("#leadership").hide(600);
	  $("#tech").show(600);
	});

	$("#back-3").click(function(){
	  $("#computer").hide(600);
	  $("#leadership").show(600);
	});

























});