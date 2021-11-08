/*****************************************************************************************************
 *                                        Objects and Functions                                      *
 ****************************************************************************************************/

/**
 * Создать объект car, добавить к нему свойство color со значением 'черный'.
 * Изменить свойство color объекта car на 'зеленый'.
 * В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя.
 */
let car = {}
car.color = "Black"
console.log(car.color);//Black

car.color = "Green";
console.log(car.color);//Green

car.power = function (){
   console.log("Engine power");
}
car.power();//Engine power

console.log(typeof car);//Object

/**
 * На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок.
 */
function stock(apples, pears){
   let sumOfApplesAndPears = apples + pears;
   return sumOfApplesAndPears;
}
stock(5, 5);//10

/**
 * В терминале оплаты сохранено ваше имя. 
 * Напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени).
 */
let terminal = ["Jhon", "Sten", "Alice", "Maikle"];
function isNameCorrect(name) {
   if(terminal.includes(name)){
      console.log(`Hello, ${name}.`);
   } else {
      console.log("That name is not found.");
   }
} 
isNameCorrect("Sten")//Hello, Sten.
isNameCorrect("Nick")//That name is not found.

/**
 * Напишите функцию вычисления типа аргумента и вывод типа в консоль.
 */
function typeOfArgument(argument){
   let type = typeof(argument);
   console.log(type);
}
typeOfArgument(5);//number
typeOfArgument("String");//string
typeOfArgument(true);//boolean
