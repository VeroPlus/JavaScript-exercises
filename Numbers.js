/********************************************************************************************
 *                                        ЧИСЛА                                             *
 *******************************************************************************************/

/********************************************************************************************
 *                                                                                          *
 * Перед началом выполнения заданий рекомендуем ознакомиться с материалом:                  *
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates             *
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number     *
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math       *
 *                                                                                          *
 *******************************************************************************************/

/**
 * Найдите среднее значение двух чисел.
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
 function getAverage(value1, value2) {
    let middleValue = (value1 + value2) / 2;
    return middleValue;
}
getAverage(5, 5)//5
getAverage(10, 0)//5
getAverage(-3, 3)//0

/**
 * Решите уравнение a*x + b = 0 при заданных параметрах a и b.
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
    /* a*x + b = 0
        a*x = -b
        x = -b / a
     */
    let x = b / a;
    return x;
}
getLinearEquationRoot(5, 10)//x = 2, 5*x - 10 = 0 
getLinearEquationRoot(1, -8)//x = -8, x + 8 = 0 
getLinearEquationRoot(5, 0)//x = 0, 5*x = 0 

/**
 * Выведите последнюю цифру указанного числа.
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
    let numberToString = String(value);
    let lastVelue = Number(numberToString[numberToString.length - 1]);
    return lastVelue;
}
getLastDigit(100)//0
getLastDigit(37)//7
getLastDigit(5)//5
getLastDigit(0)//0

/**
 * Найдите длину диагонали параллелограмма, если даны длины его рёбер a,b,c.
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelipidedDiagonal(a,b,c) {
    //d2=a2+b2+c2
    let a2 = Math.pow(a,2);
    let b2 = Math.pow(b,2);
    let c2 = Math.pow(c,2);
    let diagonal = Math.sqrt(a2 + b2 + c2);
    return diagonal;
}
getParallelipidedDiagonal(1,1,1)//1.7320508075688772
getParallelipidedDiagonal(3,3,3)//5.196152422706632
getParallelipidedDiagonal(1,2,3 )//3.741657386773941

/**
 * Округлите число до указанного разряда.
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
    let setOne = num / (10**pow);
    let newNumber = Math.round(setOne) * (10**pow);
    return newNumber;
}
roundToPowerOfTen(1234, 0)//1234
roundToPowerOfTen(1234, 1)//1230
roundToPowerOfTen(1234, 2)//1200
roundToPowerOfTen(1234, 3)//1000
roundToPowerOfTen(1678, 0)//1678
roundToPowerOfTen(1678, 1)//1680
roundToPowerOfTen(1678, 2)//1700
roundToPowerOfTen(1678, 3)//2000