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

	(function() {\n
		//code\n	
	})();
	
* Object Literal\n	 
	var myObjLiteral = { \n
	  	defaults: { name: 'Bas' },\n
	  	someMethod: function () {\n
	    	console.log(this.defaults);\n
	  	}\n
	};
* Constructor \n
	    var myObjConstructor = function () {\n
        	// code\n
        var name = 'Bas';\n
        var age = 19;	\n
* Place external scripts at the bottom of the page
* Use Data_bind (custom HTML5) instead of classes (classes are meant for css)
* Namespace: The practice of namespacing is usually to create an object literal encapsulating your own functions and variables, so as not to collide with those created by other libraries


## CSS

## HTML