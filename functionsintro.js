const READLINE = require("readline-sync");
function sayHello(name) {
	console.log(`Hey ${name} :)`);
}


	function add(x,y){
	let sum = x+y;
	console.log(sum);
	}

//add(240,10);
//add(9,1);

function getAge() {
	let birthYear = READLINE.question("What is your birth year?: ")
	let currentYear = (new Date()).getFullYear();
	console.log(currentYear);
	let age = currentYear - birthYear;
	return age;
}
let userAge = getAge();
if(userAge < 17) {
	console.log("No R-rated movies")
}


let dog = {
	numLegs = 4
	amputate: function(legs) {
		this.numLegs = this.numLegs - legs;
	}
};



let fellow = "humpty dumpty";
console.log(`string: ${fellow}`)
let len = fellow.length
console.log(`length: ${len}`)
let six = fellow.charAt(7);
console.log(`Char at index 7`)
console.log(`Index of D: ${fellow`)

