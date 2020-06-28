// Задание 1:
// Написать функцию, которая по введенному номеру дня недели выводит его название. Нумерация дней недели начинается с 1 – понедельник, 2 — вторник и т. д.

let weekDay = +prompt('Введите число от 1 до 7');

function dayName (weekDay) {
    switch(weekDay) {
        case 1:
            console.log('Понедельник');
                break;
        case 2:
            console.log('Вторник');
                break;
        case 3:
            console.log('Среда');
                break;
        case 4:
            console.log('Четверг');
                break;
        case 5:
            console.log('Пятница');
                break;
        case 6:
            console.log('Суббота');
                break;
        case 7:
            console.log('Воскресенье');
                break;
        default: console.log('Неверное значение');
    }
}
dayName(weekDay);

// Задание 2:
// Напишите функцию, которая проверяет, является ли введенное с клавиатуры число — целым числом.

let num = +prompt('Введите число');

function wholeNum (num) {
    console.log((num ^ 0) === num);
}

wholeNum(num);

// Задание 3:
// Написать функцию которая возводит введенное с клавиатуры число, в степень n,  степень и число вводится с клавиатуры.

let numb = Number(prompt('Введите ваше число'));
let degree = Number(prompt('Введите степень'));

function result(numb, degree) {
    console.log(numb ** degree);
}

result(numb, degree);

// Задание 4:
// Написать функцию, которая проверяет делится ли число 1 на число 2 без остачи.

function division(numi, num2) {
    if (Number.isInteger(numi / num2)) {
        return 'Остачи нет';
    } else {
        return 'Первое число на второе число не делится без остачи';
    }
}

console.log(division(2, 5));

// Задание 5:
// Напишите функцию, которая пишет в консоль число в заданном диапазоне.
// Используйте Math.random().

function range(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1)) + num1;
}

console.log(range(4, 234));

// Задание 7:
// Пользователь делает вклад в размере n рублей сроком на years лет под 10% годовых (каждый год размер его вклада увеличивается на 10%. Эти деньги прибавляются к сумме вклада, и на них в следующем году тоже будут проценты).

function contribution(n, years) {
    let procent = 10;

    return n * ((1 + procent / 100) ** years);
}
console.log(contribution(1000, 3));

// Задание 8:
// В зависимости от того, что выберет пользователь (ввести в prompt), вычислить площадь либо прямоугольника, либо треугольника, либо круга. Если выбраны прямоугольник или треугольник, то надо запросить длины сторон, если круг, то его радиус.
// Нужно написать 4 функции, по 1 для каждой фигуры и одна общая.

let question = prompt('Площадь какой фигуры считать: прямоугольник, треугольник или круг');

function square() {
    let a = +prompt('Введите значение высоты');
    let b = +prompt('Введите значение ширины');

    return a * b;
}
function triangle() {
    let a = +prompt('Введите значение основания');
    let h = +prompt('Введите значениее высоты');

    return (a / 2) * h;
}
function circle() {
    let r = +prompt('Введите значение радиуса');

    return Math.PI * (r ** 2);
}

function P(question) {
    if (question === 'прямоугольник') {
        return square();
    } else if (question === 'треугольник') {
        return triangle();
    } else if (question === 'круг') {
        return circle();
    } else {
        return 'Неверная фигура';
    }
}

console.log(P(question));