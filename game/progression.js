import { setup, logic } from '../src/index.js'; // импортируем объект с переменными и саму логику

setup.rules = 'What number is missing in the progression?'; // описываем правила

export const progression = () => {
  setup.correctAnswer = 0;
  const numbers = [];
  const pass = '..';
  const random = Math.floor(2 + Math.random() * 10); // генерируем множитель
  const number = Math.floor(1 + Math.random() * 20); // генерируем первое число
  let num = 0;
  const randNum = Math.floor(Math.random() * 9); // случайный индекс будущего ответа
  for (let i = 0; i < 9; i += 1) {
    if (randNum !== 0 && numbers.length === 0) {
      numbers.push(number);
    } else if (randNum === 0 && numbers.length === 0) {
      numbers.push(pass); // добавляем вместо числа пропуск
      num = number;
      setup.correctAnswer = num.toString();
    }
    if (i === randNum && setup.correctAnswer === 0) {
      numbers.push(pass); // добавляем вместо числа пропуск
      num = numbers[i] + random;
      setup.correctAnswer = num.toString();
    } else if (setup.correctAnswer) {
      num += random;
      numbers.push(num);
    } else {
      num = numbers[i] + random;
      numbers.push(num); // генерируем остальные числа
    }
  }
  console.log(`Question: ${numbers.join(' ')}`);
};

setup.function = progression; // добавляем функцию в переменную

export default () => logic();
