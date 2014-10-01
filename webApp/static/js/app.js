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
				// click about: execute function
	    		'about': function() {
	    			sections.toggle(".about", ".movies");
	    		},
	    		'movies': function() {
	    			sections.toggle(".movies", ".about");
	    		}
			});
		}
	};


	var sections = {
		init: function(){
			//this refereert naar het element waar het in staat. (sections.about of sections.movies)
			this.about();
			this.movies();
		},

		about: function(){
			//voor de komma, waar de de content in moet. Na de komma, is de content.
			Transparency.render(document.querySelector('.about'), movieApp.content.about);
		},
		
		movies: function(){
			Transparency.render(document.querySelector('.movies'), movieApp.content.movies);
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

