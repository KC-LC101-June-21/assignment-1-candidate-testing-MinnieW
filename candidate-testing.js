const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i=0; i < questions.length; i++) {
  candidateAnswers.push(input.question(questions[i]));
}
}

function changeValueToUpperCase(array) {
  let newTestArray = array.join(", ").toUpperCase().split(", ");

 return newTestArray;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (j=0; j <questions.length; j++) {
    console.log(`${j+1}) ${questions[j]} \nYour answer: ${candidateAnswers[j]} \nThe correct answer: ${correctAnswers[j]}\n`);
  }

  let grade = 0;
  let correctResponses = 0
  for (i=0; i < questions.length; i++) {
    if (changeValueToUpperCase(candidateAnswers)[i] === changeValueToUpperCase(correctAnswers)[i]) {
      correctResponses = correctResponses + 1;
    } 
  } 

  grade = correctResponses/questions.length*100;

  if (grade >= 80) {
    console.log(`You passed the test with a score of ${grade}% (${correctResponses}/${questions.length}) \u2B50`);
  } else {
    console.log(`You failed the test with a score of ${grade}% (${correctResponses}/${questions.length})`);
  }
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  console.log("\nWelcome " + candidateName + "!");
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};