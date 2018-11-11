const READLINE = require("readline-sync");

let ready = READLINE.question("How are you doing in school?:");
if (ready == "good"){
	console.log("Good job!");
}
if (ready == "bad"){
	console.log("Better work on it!");
}
let grade = READLINE.question("What are your grades like?:");
if (grade >= 90 && grade < 100){
	console.log("Great job");
}
if (grade >= 80 && grade < 90){
	console.log("You have to study harder to bring up your GPA");
}
if (grade >= 70 && grade < 80){
	console.log("Manage your time wisely and study more.");
}

let homework = READLINE.question("Did you do your homework?:");
if (homework ==  "yes"){
	console.log("Keep up the good work");
}
if (homework == "no"){
	console.log("Go and do it! NOW!");
}

let phone = READLINE.question("Is your phone dead?:");
if (phone == "yes"){
	console.log("Go and charge it.");
}
if (phone == "no"){
	console.log("Don't let it die!");
}
