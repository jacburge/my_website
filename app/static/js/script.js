$(document).ready(function(){

	$("#menu").click(function(){
		$('#toggle-menu').slideToggle(400);
	});
	

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