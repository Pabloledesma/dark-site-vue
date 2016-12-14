(function(){
	var data = {
			tag1: 0

		};
	var app = angular.module('example', []);

	app.controller('CountController', function(){
		this.data = data;

		this.incTag1 = function(){
			this.data.tag1 = + 1;
		};

	});

})();