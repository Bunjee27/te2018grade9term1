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

