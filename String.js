/********************************************************************************************
 *                                        СТРОКИ                                            *
 *******************************************************************************************/

/********************************************************************************************
 *                                                                                          *
 * Перед началом выполнения заданий рекомендуем ознакомиться с материалом:                  *
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String     *
 *                                                                                          *
 *******************************************************************************************/

/**
 * Извлеките название страны из строки формата 'I live in <Страна>!'.
 *   'I live in Belarus!' => 'Belarus'
 *   'I live in England!' => 'England'
 */
function extractCountryFromTemplate(value) {
    let newString = value.substring(0,value.length - 1);
    let arrayOfWords = newString.split(" ");
    let country = arrayOfWords[arrayOfWords.length - 1];
    return country;
}
extractCountryFromTemplate('I live in Belarus!');//Belarus
extractCountryFromTemplate('I live in England!');//England

/**
 * Удалите ведущие и конечные пробелы из строки.
 *   '  Abracadabra'    => 'Abracadabra'
 *   'EPAM'              => 'EPAM'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
    let trimingString = value.trim()
    return trimingString;
}
removeLeadingAndTrailingWhitespaces('  Abracadabra' );//'Abracadabra'
removeLeadingAndTrailingWhitespaces('EPAM');//'EPAM'
removeLeadingAndTrailingWhitespaces('\tHello, World! ');//'Hello, World!'

/**
 * Повторите строку указанное число раз и верните результирующую строку.
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
    let repeatingString = value.repeat(count);
    return repeatingString;
}
repeatString('A', 5);//'AAAAA'
repeatString('cat', 3);//'catcatcat'

/**
 * Удалите указанную строку из другой строки и верните усечённый вариант. 
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs'
 *   'Penny', 'ny' => 'Pen'
 */
function removeFirstOccurrences(str, value) {
    let valueLenght = value.length;
    let firstIndexOfValue = str.indexOf(value);
    let lastIndexOfValue = firstIndexOfValue + valueLenght;
    let newString = str.slice(0, firstIndexOfValue) + str.slice(lastIndexOfValue + 1);
    return newString;
}
removeFirstOccurrences('To be or not to be', 'not')//'To be or to be'
removeFirstOccurrences('I like legends', 'end')//'I like legs'
removeFirstOccurrences('Penny', 'ny')//'Pen'

/**
 * Удалите первую и последнюю угловые скобки из заданной строки.
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
    let newString = str.substr(1, str.length-2);
    return newString;
}
unbracketTag('<div>')//'div'
unbracketTag('<span>')//'span'
unbracketTag('<a>')//'a'