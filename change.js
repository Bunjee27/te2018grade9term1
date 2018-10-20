// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
let changeMachine = {
	inputCents:undefined,
	quarters:undefined,
	dimes:undefined,
	nickels:undefined,
	pennies:undefined,
	greeting:"Welcome to the Change Machine. Please enter your change. :",
	farewell:"Thanks for using the Change Machine, have a nice day"
};
changeMachine.inputCents = READLINE.question(changeMachine.greeting);

// write code below that simulates the change machine in action!
let cents = changeMachine.inputCents
let q = Math.floor(cents/25);
let remainder = cents%25;
let d = Math.floor(remainder/10);
remainder = remainder%10
let n = Math.floor(remainder/5)
let p = remainder%5

changeMachine.quarters = q;
changeMachine.dimes = d;
changeMachine.nickels = n;
changeMachine.pennies = p;

console.log(`${changeMachine.inputCents} makes:
	${changeMachine.quarters} quarters,
	${changeMachine.dimes} dimes,
	${changeMachine.nickels} nickels,
	${changeMachine.pennies} nickels`)
