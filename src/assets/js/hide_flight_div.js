$(document).ready(function(){
	var reserve = $("#subpanel_reserve_flights"),
		tabFlights = $("#tab_flights"),
		tabReserve = $("#tab_reserve"),
		widgetPromos = $("#widget_promos");

	reserve.hide();
	widgetPromos.hide();

	tabFlights.removeClass('selected');
	tabReserve.removeClass('selected');

	tabFlights.click(function(){
		reserve.show();
	});

	tabReserve.click(function(){
		reserve.show();
	});

});