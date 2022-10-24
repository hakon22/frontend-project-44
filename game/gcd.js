import { setup, logic } from '../src/index.js'; // импортируем объект с переменными и саму логику

setup.rules = 'Find the greatest common divisor of given numbers.'; // описываем правила

export const gcd = () => {
  const random = Math.floor(2 + Math.random() * 10); // генерируем множитель
  const number = Math.floor(1 + Math.random() * 20); // генерируем случайное первое число
  const number2 = Math.floor(1 + Math.random() * 20); // генерируем случайное второе число
  const num1 = random * number;
  const num2 = random * number2;
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  for (let i = min; ; i -= 1) {
    if (max % min === 0) {
      setup.correctAnswer = min.toString();
      break;
    }
    if (max === min) {
      setup.correctAnswer = min.toString();
      break;
    }
    if ((min % i === 0) && (max % i === 0)) {
      setup.correctAnswer = i.toString();
      break;
    }
  }
  console.log(`Question: ${num1} ${num2}`);
};

setup.function = gcd; // добавляем функцию в переменную

export default () => logic();
