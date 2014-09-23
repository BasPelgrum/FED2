# FED
Bas Pelgrum // 500628858 // V2-02





# Best practices

* Comment your code

## JavaScript


03/09/2014

* Don't use global variables/objects
* Use short clear (meaningful) names
* Constructor function start with capital
* Constants with all captials
* camelCase the rest

23/09/2014

* SIV: Self Invoking Function: 

	(function(){
		//code	
	})();
	
* Object Literal	 
	
	var circus.clown = {
		// Properties
		name: 'pipo',
		shoeSize: 60,


		//method
		joke: function() {
			console.log('some nice joke');
			
			//This  points to clown object (the OBJECT it is in)
			this.laugh();
		},

		laugh: function () {
			console.log('whoehahahah');
		}
	};
	
* Constructor 
	   
	    var myObjConstructor = function () {
        	// code
        var name = 'Bas';
        var age = 19;

* Place external scripts at the bottom of the page
* Use Data_bind (custom HTML5) instead of classes (classes are meant for css)
* Namespace: The practice of namespacing is usually to create an object literal encapsulating your own functions and variables, so as not to collide with those created by other libraries


## CSS

## HTML