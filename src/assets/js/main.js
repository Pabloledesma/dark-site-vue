$(document).ready(function(){

	var contenido = $("#content"),
		menuItems = $("#navbar ul li");

	$("ul.nav-second-level").delegate('a', 'click', function(e){
		var href = $(this).attr('href');
		contenido.load( href + ' #blog-post' );
		e.preventDefault();
	});

});

