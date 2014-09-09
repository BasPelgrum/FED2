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

function Personage(name) {
	this.name = name;
	this.speak = function() {
		console.log('hello world, ik ben ' + this.name);
	}
} 

persoon = new Personage ("Bob")
persoon.speak() //alerts hallo ik ben (ingevoerde naam)

//3.2

function Personage(name) {
	this.name = name;
	
	this.speak = function() {
		console.log('hello world, ik ben ' + this.name)
	}
}

Personage.prototype.walk = function() {
		console.log(this.name + " is walking down the street");
}

Personage.prototype.walk = function() {
	console.log(this.name + 'is eating a sandwich');
}

persoon = new Personage ("Bob")
persoon.speak();

persoon = new Personage ("Bas")
persoon.eat(); 

persoon = new Personage ("Gert")
persoon.walk();


