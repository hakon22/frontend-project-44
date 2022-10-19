import readlineSync from 'readline-sync';

const random = () => Math.floor(1 + Math.random() * 20);

let correctCount = 0;
let number;
let result;
let correctAnswer;

const play = () => {
  number = random();
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  console.log(`Question: ${number}`);
  result = readlineSync.question('Your answer: ');
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  play();
  for (let i = 0; i < 3; i += 1) {
    if (result === correctAnswer) {
      console.log('Correct!');
      correctCount += 1;
      if (correctCount !== 3) {
        play();
      } else {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${result}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
};
