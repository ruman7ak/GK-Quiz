var readlineSync = require("readline-sync");

console.log("Welcome to Ruman's Quiz on GK .")

var name = readlineSync.question("Enter your name here: ");
console.log("Hello " + name + " Lets get started.");
var score = 0;


function play(question, answer) {
  var Q = readlineSync.question(question);
  if (Q === answer) {
    console.log("You are right");
    score++;
    console.log("You have scored " + score);
  } else {
    console.log("You are wrong");
    console.log("You have scored ", score);
  }
}



var questions = [{
  question: "In what year was the first iPhone released? ",
  answer: "2007"
}, {
  question: "The tallest building in the world is located in which city? ",
  answer: "Dubai"
}, {
  question: "How many children does Queen Elizabeth have? ",
  answer: "3"
}, {
  question: "Beirut is the capital of which country? ",
  answer: "Lebanon"
}, {
  question: "How many hearts does an octopus have? ",
  answer: "8"
}, {
  question: "What currency is used in Turkey? ",
  answer: "Turkish"
}]

for (i = 0; i < questions.length; i++) {
  console.log(play(questions[i].question, questions[i].answer));
}

console.log("Your grand total score is : " + score);

var highscore = [{
  name: "Ruman",
  score: 10
}, {
  name: "don",
  score: 9
}]

console.log("High scores so far: ");

for (i = 0; i < highscore.length; i++) {
  console.log(highscore[i].name, highscore[i].score);
}

console.log("If you have beaten the high score, send me a screenshot and the scores will be updated.")



