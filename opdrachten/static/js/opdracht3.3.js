/* 3.3: Object Literal
Maak nu hetzelfde object, met dezelfde properties en methods aan met een object literal
*/
function laatBasDingenDoen() {
	var Bas = {
		name : "Bas", //KOMMA NIET VERGETEN!!

		eat: function () {
			console.log(this.name + " is eating a delicious Subway sandwich");
		}, //KOMMA NIET VERGETEN!!

		walk: function () {
			console.log(this.name + " is walking down the street with his nikes on");
		}, //KOMMA NIET VERGETEN!!

		speak: function () {
			alert('Hi! i am ' + this.name);
		}

	}

		Bas.speak();
		Bas.walk();
		Bas.eat();
}

laatBasDingenDoen();