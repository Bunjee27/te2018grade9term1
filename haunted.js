const READLINE = require("readline-sync");

let pronoun;
let possess;
let pronoun2;
let player = {
  gender: undefined,
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "suitcase",
  item: "phone",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
console.log("When you respond to questions, insert the word inside asterisks!!!");
player.gender = READLINE.question("What is your gender?: ")
if (player.gender == "female"){
  pronoun = "she";
  possess = "her";
  pronoun2 = "she";
}
else {
  pronoun = "he";
  possess = "his"
  pronoun2 = "him"
}
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} arrives on the island of ZEZE.`);
console.log(`${player.name} is escorted to the hotel by godly Stan Lee.`);
let enterHouse = READLINE.question("Will you enter the hotel? (**yes** or **no**) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} grabs ${possess} ${player.weapon} and goes through the  door...`);
  console.log(`${player.name} goes to the recption desk. ${pronoun} is greeted by XXXtentacion.`);

  let roomType = READLINE.question("How long is your stay? **3** or **5** days?");
  if (roomType == "3" || roomType == "3 days"){
    console.log(`${player.name} takes ${possess} room key and gets in the elevator. ${pronoun} takes it to the 5th floor.`);
    console.log(`${player.name} enters ${possess} room and takes a nap.`)
    console.log(`When ${player.name} wakes up, ${pronoun} is strapped to ${possess} bed and a masked man is sorting through their knives.`);
    console.log(`The chains are very strong and won't budge`);
    
    let planA = READLINE.question("Do you **scream for help** or **play dead?**")
    if (planA == "scream for help" || planA == "scream"){
      console.log(`${player.name} screams out and the masked man throws a dagger at ${possess} head...`)
      console.log(`It hits and ${player.name} dies.`)
    }

    else{
      console.log(`They realized you were playing dead and stabs you with a long cerrated knife.`)
      console.log(`You bleed out and die.`)
    }

  }
    else{
    console.log(`${player.name} takes ${possess} room key and gets in the elevator. ${pronoun} takes it to the penthouse.`);
    console.log(`${player.name} opens ${possess} room to see a circle of people in white robes with hoods praying and chanting.`)
    console.log(`They all turn towards ${player.name}.`)

    let cult = READLINE.question("Do you **join** them or **leave** the room?")
    if (cult == "join" || cult == "join them"){
      console.log(`${player.name} drops ${possess} bags at the door and joins the satanic circle`)
      console.log(`They give ${player.name} a robe and ${player.name} starts to chant with them`)
      console.log(`Suddenly,Tupac jumps thorugh the window and shoots everyone`)
      console.log(`${player.name} died.`)
      }
      else{
      console.log(`${player.name} runs down the hallway but hits a dead end.`)
      console.log(`${player.name} turns around and sees Mohammed Ali in front of ${pronoun2}.`)
      console.log(`${player.name} is frozen in fear and then Mohammed Ali punches ${pronoun2} to death.`)
      console.log(`${player.name} died.`)
    }
  }
} 
else {
  player.intellect++;
  console.log(`${player.name} decides not to go inside the hotel.`);
  console.log(`${player.name} goes around to the side of the hotel and sees a nice beach.`)
  console.log(`${player.name} drops ${possess} bags and jumps into the water. ${pronoun} sees a big coral reef with tons of fish.`)
  let coralReef = READLINE.question("Do you go closer to the reef?")
  if (coralReef == "yes"|| coralReef == "Yes"){
    console.log(`${player.name} goes closer to the fish. ${pronoun} doesn't realize they are piranhas.`)
    console.log(`${player.name} is swarmed by the fish and they eat ${pronoun} alive.`)
    console.log(`${player.name} died.`)
  }
  else{
    console.log(`${player.name} swims back to the surface but a shark appears.`)
    console.log(`The shark bites off ${player.name}'s limbs one by one.`)
  }
}

console.log("Thanks for playing!");

