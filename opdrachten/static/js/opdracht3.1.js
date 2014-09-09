/* 3.1: Constructor object
Maak met een Constructor object een ‘Persoon’-object aan. Voeg de property ‘name’ en de method ‘speak’ toe. 
En maak een nieuwe instantie aan van dit object waarbij je de naam ‘Bob’ meegeeft als parameter van het object.
*/

function Person(name) {
	this.name = name;
	this.speak = function() {
		console.log('Hi, i am ' + this.name);
	}
} 

bas = new Person ("Bas")
bas.speak() //alerts hallo ik ben (ingevoerde naam)
