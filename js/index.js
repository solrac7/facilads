$(function(){
	$('.ascensor').click(function(e){
		e.preventDefault();
		$('html, body')
			.stop()
			.animate({
				scrollTop: $($(this).attr('href')).offset().top + -80}, 1000);
	});

	$(".menu").click(function(){
		$(this).toggleClass('open');
		$(".botonera").fadeToggle("fast");
	})

	$(".botonera").find(".ascensor").click(function(){
		$(".botonera").fadeOut("fast");
		$(".menu").toggleClass('open');
	})

});