

/* 3.2: Prototype
Voeg de methods ‘walk’ en ‘eat’ toe aan het ‘Persoon’-object met de prototype function van het object. 
*/

function Person(name) {
	this.name = name; 

	this.speak = function() {
		console.log('Hi, i am ' + this.name);
	}
} //waarom deze niet sluiten?? met ;

Person.prototype.eat = function(){
	console.log(this.name + ' is eating a sandwich!');
};

Person.prototype.walk = function(){
	console.log(this.name + ' is walking down the street');
};


bas = new Person('Bas');
bas.speak();
bas.walk();
bas.eat();