/* eslint-disable default-case */
import { setup, logic } from '../src/index.js'; // импортируем объект с переменными и саму логику

const sign = ['+', '-', '*'];
setup.rules = 'What is the result of the expression?'; // обозначаем правила игры
let examination;

export const arithmetic = () => {
  const number = Math.floor(1 + Math.random() * 20); // генерируем случайное первое число
  const number2 = Math.floor(1 + Math.random() * 20); // генерируем случайное второе число
  const signIndex = Math.floor(Math.random() * sign.length); // вычисляем индекс ариф-кого знака
  // обозначаем проверку
  switch (sign[signIndex]) {
    case '+':
      examination = number + number2;
      break;
    case '-':
      examination = number - number2;
      break;
    case '*':
      examination = number * number2;
      break;
  }
  setup.correctAnswer = examination.toString(); // добавляем верный ответ в переменную
  console.log(`Question: ${number} ${sign[signIndex]} ${number2}`);
};

setup.function = arithmetic; // указываем, какая функция будет использоваться в логике

export default () => logic();
