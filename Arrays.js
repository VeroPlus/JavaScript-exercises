/*****************************************************************************************************
 *                                        МАССИВЫ                                                    *
 ****************************************************************************************************/

/*****************************************************************************************************
 *                                                                                                   *
 * Перед началом выполнения заданий рекомендуем ознакомиться с материалом:                           *
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array               *
 *                                                                                                   *
 * ПРИМЕЧАНИЕ: При выполнении заданий запрещается использовать циклические операторы for и while!    *
 *                                                                                                   *
 ****************************************************************************************************/

 /**
  * Преобразуйте исходный массив таким образом, чтобы в нём остались только положительные числа.
  *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
  *    [-1, 2, -5, -4, 0] => [ 2 ]
  *    [] => [] 
  */
 function getArrayOfPositives(arr) {
   let newArr = arr.filter(element => element > 0);
   return newArr;
 }
 getArrayOfPositives([ 0, 1, 2, 3, 4, 5 ])//[ 1, 2, 3, 4, 5 ]
 getArrayOfPositives([-1, 2, -5, -4, 0])//[ 2 ]
 getArrayOfPositives([])//[]

 /**
  * Преобразуйте строки в изначальном массиве в сроки верхнего регистра.
  *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
  *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
  */
 function getUpperCaseStrings(arr) {
    let newArr = [];
    arr.forEach(element => {
         newArr.push(element.toUpperCase());
      });
      return newArr;
 } 
getUpperCaseStrings([ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ])//[ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
getUpperCaseStrings([ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ])//[ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]

 /**
  * Преобразуйте массив строк в массив чисел, где каждое число будет означать длину заменяемой строки.
  *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
  *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
  */
 function getStringsLength(arr) {
    let newArr = [];
    arr.forEach(element => {
       newArr.push(element.length);
    });
    return newArr;
 }
 getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ])//[ 0, 1, 2, 3, 4 ]
 getStringsLength([ 'angular', 'react', 'ember' ])//[ 7, 5, 5 ]

 /**
  * Создайте новый массив из n первых элементов исходного массива.
  *    [ 1, 3, 4, 5 ], 2  => [ 1, 3 ]
  *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
  */
 function getHead(arr, n) {
    let newArr = arr.slice(0,n);
    return newArr;
 }
 getHead([ 1, 3, 4, 5 ], 2)//[ 1, 3 ]
 getHead([ 'a', 'b', 'c', 'd'], 3)//[ 'a', 'b', 'c' ]

 /**
  * Удалите каждый второй элемент исходного массива и верните новый массив.
  * Example :
  * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
  * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
  * [ "a" ] => []
  */
 function getSecondItems(arr) {
   let newArr =[];
   arr.forEach(element => {
      if(arr.indexOf(element) % 2 != 0){
         newArr.push(element);
      }
   });
   return newArr;
 }
 getSecondItems([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])//[ 2, 4, 6, 8, 10 ]
 getSecondItems([ 'a', 'b', 'c' , null ])//[ "b", null ]
 getSecondItems([ "a" ])//[]
 
 /** 
  * Создайте новый массив, который содержит 3 самых больших числа из исходного массива чисел.
  *   [] => []
  *   [ 1, 2 ] => [ 2, 1 ]
  *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
  *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
  *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
  */
 function get3TopItems(arr) {
    arr.sort((i, j) => j - i);
    let newArr = arr.slice(0,3);
    return newArr;
 }
 get3TopItems([])//[]
 get3TopItems([ 1, 2 ])//[ 2, 1 ]
 get3TopItems([ 1, 2, 3 ])//[ 3, 2, 1 ]
 get3TopItems([ 1,2,3,4,5,6,7,8,9,10 ])//[ 10, 9, 8 ]
 get3TopItems([ 10, 10, 10, 10 ])//[ 10, 10, 10 ]

 /**  
  * Сосчитайте количество положительных чисел в массиве.
  *   [ ]          => 0
  *   [ -1, 0, 1 ] => 1
  *   [ 1, 2, 3]   => 3
  *   [ null, 1, 'elephant' ] => 1
  *   [ 1, '2' ] => 1
  */
 function getPositivesCount(arr) {
    let sum = 0;
    arr.filter(i => {
       if(i > 0 && typeof(i) == "number"){
         sum++;
       }
    });
    return sum;
 }
 getPositivesCount([ ])//0
 getPositivesCount([ -1, 0, 1 ])//1
 getPositivesCount([ 1, 2, 3])//3
 getPositivesCount([ null, 1, 'elephant' ])//1
 getPositivesCount([ 1, '2' ])//1