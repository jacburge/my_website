$(document).ready(function(){

	$("#menu").click(function(){
		$('#toggle-menu').slideToggle(400);
	});

	$(".logo").hover(function(){
		$("#home").fadeIn(400);
	},function(){
		$("#home").fadeOut(400);
	});
	
	$("#professional").hover(function(){
		$("#professional").css("color","#A5E5E4");
		},function(){
		$("#professional").css("color","#4A4A4A");	
	});

	$("#professional").click(function(){
		$("#popup1").slideToggle(400);
	}); 

	$("#content").click(function() {
        $('#popup1').slideUp(300);
        $('#popup2').slideUp(300);
        $('#popup3').slideUp(300);
    });

	$("#creative_outlets").hover(function(){
		$("#creative_outlets").css("color","#A5E5E4");
		},function(){
		$("#creative_outlets").css("color","#4A4A4A");
	});

	$("#creative_outlets").click(function(){
		$("#popup2").slideToggle(400);
	});

	$("#just_for_fun").hover(function(){
		$("#just_for_fun").css("color","#A5E5E4");
		},function(){
		$("#just_for_fun").css("color","#4A4A4A");	
	});

	$("#just_for_fun").click(function(){
		$("#popup3").slideToggle(400);
	});

	$("#next-1").click(function(){
	  $("#education").hide(600);
	  $("#tech").show(1000);
	});

	$("#next-2").click(function(){
	  $("#tech").hide(600);
	  $("#leadership").show(1000);
	});

	$("#next-3").click(function(){
	  $("#leadership").hide(600);
	  $("#computer").show(1000);
	});

	$("#back-1").click(function(){
	  $("#tech").hide(600);
	  $("#education").show(1000);
	});

	$("#back-2").click(function(){
	  $("#leadership").hide(600);
	  $("#tech").show(1000);
	});

	$("#back-3").click(function(){
	  $("#computer").hide(600);
	  $("#leadership").show(1000);
	});

	jQuery(window).on('load', function(){ 
		var $ = jQuery;
		$('#photography-items').masonry({
		itemSelector : '.photo', 
		gutter: 20});
	});



	// $('.photo').hover(function(){
	// 	$('.photo-caption').fadeOut(400);
	// },function(){
	// 	$('.photo-caption').fadeIn(400);
	// });

});