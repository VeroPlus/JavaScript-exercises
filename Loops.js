/********************************************************************************************
 *                                        ЦИКЛЫ                                             *
 *******************************************************************************************/

/********************************************************************************************
 *                                                                                          *
 * Перед началом выполнения заданий рекомендуем ознакомиться с материалом:                  *
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration           *
 *                                                                                          *
 *******************************************************************************************/

/**
 * Найдите факториал числа.
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
 function getFactorial(n) {
     let factorial = 1;
     for (let i = 1; i <=n; i++){
        factorial *= i;       
     }
    return factorial;
}
getFactorial(1)//1
getFactorial(5)//120
getFactorial(10)//3628800


/**
 * Найдите сумму чисел, находящихся между двумя указанными числами.
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}
getSumBetweenNumbers(1, 2)//3
getSumBetweenNumbers(5, 10)//45
getSumBetweenNumbers(-1, 1)//0

/**
 * Перепишите указанную строку в обратном порядке следования символов
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    let strArr = str.split('');
    let newArr = [];
    for (let i = strArr.length - 1; i >= 0; i--) {
        newArr.push(strArr[i])
    }
    let newStr = newArr.join("");
    return newStr;
}
reverseString('The quick brown fox jumps over the lazy dog')//'god yzal eht revo spmuj xof nworb kciuq ehT'
reverseString('abracadabra')//'arbadacarba'
reverseString('rotator')//'rotator'
reverseString('noon')//'noon'

/**
 * Перепишите указанное число в обратном порядке следования цифр
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    let numToStr = String(num);
    let strArr = numToStr.split('');
    let newArr = [];
    for (let i = strArr.length - 1; i >= 0; i--) {
        newArr.push(strArr[i])
    }
    let newStr = newArr.join("");
    let newNum = Number(newStr);

}
reverseInteger(12345)//54321
reverseInteger(1111)//1111
reverseInteger(87354)//45378
reverseInteger(34143)//34143