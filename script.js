/* Script for HTML/CSS/JS refresh */

$(document).ready(function(){

	$("p").click(function(){
		$(this).css("background-color","purple");
	})
	
	$("#coastModernEye").click(function(){
		$(this).attr("src","assets/2.jpg");
	})

})