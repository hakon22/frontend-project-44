import { setup, logic } from '../src/index.js'; // импортируем объект с переменными и саму логику

// обозначаем правильные ответы
const response1 = 'yes';
const response2 = 'no';
setup.rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'; // описываем правила

export const prime = () => {
  setup.correctAnswer = 0;
  const number = Math.floor(2 + Math.random() * 100); // генерируем случайное число от 2 до 100
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number === 2) {
      setup.correctAnswer = response1; // добавляем верный ответ в переменную
      break;
    }
    if (number % i === 0) {
      setup.correctAnswer = response2; // добавляем верный ответ в переменную
    }
  }
  if (setup.correctAnswer === 0) {
    setup.correctAnswer = response1;
  }
  console.log(`Question: ${number}`);
};

setup.function = prime; // добавляем функцию в переменную

export default () => logic();
