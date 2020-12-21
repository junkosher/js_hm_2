// PART 1

// ---------------------

// point 1

// let number = prompt('Введите число');
// if (number < 0) {
//     alert( 'Введённое число меньше нуля' );
// } 

//     else if (number == 0) {
//     alert( 'Введённое число равно нулю' );
// } 

//     else {
//     alert( 'Введённое число больше нуля' );
// }

// point 2

// let yourAge = prompt('Введите Ваш возраст');
// if (yourAge < 0) {
//     alert( 'Введите корректный возраст!' );
// } 

//     else if (yourAge == 0) {
//     alert( 'Введите корректный возраст!' );
// } 

//     else if (yourAge >120) {
//     alert( 'Введите корректный возраст!' );
// }

// else {
//     alert( 'Ваш возраст равен ' + yourAge );
// }

// point 3

// let moduleNumber = prompt('Введите число');
// if (moduleNumber < 0) {
//     alert( 'Модуль числа ' + moduleNumber + ' равен ' + moduleNumber*(-1) );
// } 

// else {
//     alert( 'Модуль числа ' + moduleNumber + ' равен ' + moduleNumber );
// }

// point 5

// let userHours = prompt('Введите значение в часах');
// let userMinutes = prompt('Введите значение в минутах');
// let userSeconds = prompt('Введите значение в секундах');
// if (userHours <0 && userHours >23) {
//     alert( 'Введите корректное значение в часах!' );
// } 

// if (userMinutes <0 || userMinutes >60) {
//     alert( 'Введите корректное значение в минутах!' );
// } 

// if (userSeconds <0 || userSeconds >60) {
//     alert( 'Введите корректное значение в секундах!' );
// } 

// else {
//     alert( 'Введённое время равно ' + userHours + ' ч. ' + userMinutes + ' мин. ' + userSeconds + ' сек.' );
// }

// point 6

let month = prompt('Введите номер месяца');

switch (month) {
    case '1':
        alert( 'Первый месяц - Январь' );
        break;
    case '2':
        alert( 'Второй месяц - Февраль' );
        break;
    case '3':
        alert( 'Третий месяц - Март' );
        break;
    case '4':
        alert( 'Четвёртый месяц - Апрель' );
        break;
    case '5':
        alert( 'Пятый месяц - Май' );
        break;
    case '6':
        alert( 'Шестой месяц - Июнь' );
        break;
    case '7':
        alert( 'Седьмой месяц - Июль' );
        break;
    case '8':
        alert( 'Восьмой месяц - Август' );
        break;
    case '9':
        alert( 'Девятый месяц - Сентбярь' );
        break;
    case '10':
        alert( 'Десятый месяц - Октябрь' );
        break;
    case '11':
        alert( 'Одинадцатый месяц - Ноябрь' );
        break;
    case '12':
        alert( 'Двенадцатый месяц - Декабрь' );
        break;
    default:
        alert( "Нет такого месяца!" );
}






























// number, string, boolean, null, undefined - примитивы
// object - ссылочный тип данных

//преобразование к number:
// Number() -> явное
// математические операторы - неявное
// +'123' -> 123 -> явное

// undefined -> NaN
// null -> 0
// NaN * / 123 -> NaN
// Number('qwe') -> NaN
// +'123'
// 12 / 0 -> Infinity
// Number(true) -> 1, false -> 0
// '123' / 123 -> 1
// NaN -> невозможность проведения математической операции

// string
// знак сложения - если по одну из сторон будет строка,то все выражение будет клеиться в одну строку в рамках приоритета
// речь выше только про два оператора
// выше не явное
// String() - явное

// 123 + 123 + '123' -> 246 + '123' -> '246123'
// '123' + 123 + 123 -> '123123' + 123 => '123123123'
// '123' + (123 + 123) -> '123' + 246 -> '123246'
// console.log(String(null)) -> 'null'
// console.log(String(undefined)) 'undefined'
// console.log(String(Infinity)) 'Infinity'
// console.log(String(NaN)) 'NaN'
// console.log(String(true)) 'true'


// boolean
// Boolean() - явное
// ! - преобразование к бул наоборот
// !! = Boolean()
// >, <, <=, >=, ==, ===, &&, ||, !=, !== ----> неявное

// console.log(Boolean(1)) -> true
// console.log(Boolean(0)) -> false
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(Infinity)) // true
// console.log(Boolean(NaN)) // false
// console.log(Boolean('')) // false
// console.log(Boolean(' ')) // false
// console.log(NaN + 5) //
// console.log(Boolean(true)) //

// console.log(!null)
// console.log(!undefined)

// >, <, <=, >=, ==, ===, &&, ||, !=, !==
// null, undefined не равны ничему кроме самих себя при использовании ==
// == - нестрогое равно, !=
// === - строгое равно, !==
// !, !!, ===, !==, &&, ||;
// const a = 6 != '6' -> 6 != 6 -> false
//console.log(a)

//