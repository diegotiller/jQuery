$(function(){
	$('.icone').hover(function(){
		$(this).animate({
			"width":130,
			"height":130,
			"margin-top":-30,
			"border-radius":10
		}, 300);
	}, function(){
		$(this).animate({
			"width":100,
			"height":100,
			"margin-top":0,
			"border-radius":0
		}, 300);
	});
});


$(document).ready(function() {
    $(".carousel-caption").removeAttr("bottom");
});