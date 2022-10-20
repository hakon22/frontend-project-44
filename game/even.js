import { setup, logic } from '../src/index.js'; // импортируем объект с переменными и саму логику

// обозначаем правильные ответы
const response1 = 'yes';
const response2 = 'no';
setup.rules = 'Answer "yes" if the number is even, otherwise answer "no".'; // описываем правила

export const randomNumber = () => {
  const number = Math.floor(1 + Math.random() * 20); // генерируем случайное число от 1 до 20
  const examination = number % 2 === 0; // проверка на чётность
  setup.correctAnswer = examination ? response1 : response2; // добавляем верный ответ в переменную
  console.log(`Question: ${number}`);
};

setup.function = randomNumber; // добавляем функцию в переменную

export default () => logic();
