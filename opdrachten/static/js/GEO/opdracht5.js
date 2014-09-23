!(function(){
	// 6.1 - Self Invoking Anonymous Function


	/* 6.2 - 6.2: Application structure Voeg aan het script een 'controller' object toe 
	met een 'init' methode vanuit waar de andere objecten worden geïnitialiseerd.
	*/
var app = app || { };
(function(){
	var controller = {
		init: function () {	app.gps.init();	}
	}
})();

	var gps = {
		init: function(){},
		startInterval: function(){},
		setPosition: function(){},
		updatePosition: function(){},
		checkLocations: function(){},
		calculateDistance: function(){}
	}

	var map = {

		updatePosition: function(){},
		generateMap: function(){}

	}

	var debug = {
		setCustomDebugging: function(){},
		geoErrorHandler: function(){},
		debugMessage: function(){}
	}

	var utilis = {
		isNumber: function(){}
	}
})(window, document);

//