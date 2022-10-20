import readlineSync from 'readline-sync';

export const setup = {
  correctCount: 0,
  result: '',
  correctAnswer: '',
  rules: '',
  function: '',
};

const play = () => {
  setup.function();
  setup.result = readlineSync.question('Your answer: ');
};

export const logic = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(setup.rules);
  play();
  for (let i = 0; i < 3; i += 1) {
    if (setup.result === setup.correctAnswer) {
      console.log('Correct!');
      setup.correctCount += 1;
      if (setup.correctCount !== 3) {
        play();
      } else {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${setup.result}' is wrong answer ;(. Correct answer was '${setup.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
