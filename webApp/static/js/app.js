var movieApp = movieApp || {};


//self invoking anonymous function
(function(){

	/* CONTROLLER
		- Object literal.
		- Method: "init" 
	*/
	var controller = {
		init:function () {
			router.init();
			sections.init();
		}
	};


	/* ROUTER
		- Object literal.
		- Method: "init".
		- Properties: "about" en "movies" 
	*/
	var router = {
		init: function () {
			routie({
				// click about: execute function (show class about, hide class movies)
	    		'about': function() {
	    			sections.toggle(".about", ".movies");
	    		},
	    		// Click movies: execute function. 
	    		'movies': function() {
	    			sections.toggle(".movies", ".about");
	    		}
			});
		}
	};



	var sections = {
		init: function(){
			//this refereert naar het element waar het in staat. (het sections object) -- Joost
			this.about();
			this.movies();
		},

		about: function(){
			//voor de komma, waar de de content in moet. Na de komma, is de content.
			Transparency.render(document.querySelector('.about'), movieApp.content.about, movieApp.content.directives);
		},
		
		movies: function(){
			Transparency.render(document.querySelector('.movies'), movieApp.content.movies, movieApp.content.directives);
		},
		
		toggle: function(show, hide){
			document.querySelector(show).classList.add('active');
			document.querySelector(hide).classList.remove('active');
		} 
	};
	
	//initialize controler
	controller.init();
}());


//method: manier om iets te doen dus -> functie
//propertie: eigenschap 

