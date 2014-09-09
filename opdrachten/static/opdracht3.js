/* 3.1: Constructor object
Maak met een Constructor object een ‘Persoon’-object aan. Voeg de property ‘name’ en de method ‘speak’ toe. 
En maak een nieuwe instantie aan van dit object waarbij je de naam ‘Bob’ meegeeft als parameter van het object.
*/


/* 3.2: Prototype
Voeg de methods ‘walk’ en ‘eat’ toe aan het ‘Persoon’-object met de prototype function van het object. 
*/

/* 3.3: Object Literal
Maak nu hetzelfde object, met dezelfde properties en methods aan met een object literal
*/


//3.1

function Persoon(name) {
	this.name = name;
	this.speak = function() {
		console.log('hello world, ik ben ' + this.name);
	}
} 

persoon = new Persoon ("Bob")
persoon.speak() 

//3.2


