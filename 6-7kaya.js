// Завдання: Перетворення рядка у хеш-таблицю
// Напиши функцію, яка приймає рядок і повертає об'єкт, де ключами є символи рядка, а значенням – кількість їх повторень.

// function func(str) {
//     let newObj = {};

//     for (let i = 0; i < str.length; i++) {
//         if (newObj[str[i]]) {
//             newObj[str[i]] += 1;
//         } else {
//             newObj[str[i]] = 1;
//         }
//     }

//     return newObj;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Описание задачи: Напишите функцию, которая находит все символы, которые встречаются только один раз в строке.

// function func(sym) {
//     let obj = {};
//     let result = [];

//     for (let i = 0; i < sym.length; i++) {
//         if (obj[sym[i]]) {
//             obj[sym[i]] += 1;
//         } else {
//             obj[sym[i]] = 1;
//         }
//     }

//     for (let i = 0; i < sym.length; i++) {
//         if (obj[sym[i]] === 1) {
//             result.push(sym[i]);
//         }
//     }

//     return result;
// }

// function func(sym) {
//     let obj = {};
//     let result = [];

//     for (let i = 0; i < sym.length; i++) {
//         obj[sym[i]] = (obj[sym[i]] || 0) + 1;
//     }

//     for (let key in obj) {
//         if (obj[key] === 1) {
//             result.push(key);
//         }
//     }

//     return result;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши функцію, яка приймає рядок і повертає об'єкт, де ключі — голосні літери (a, e, i, o, u), а значення — кількість їх входжень.

// function countVowels(str) {
//     let vowels = 'aeiou';
//     let result = {};

//     // Проходимо по рядку
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
        
//         // Перевіряємо, чи є символ голосним
//         if (vowels.includes(char)) {
//             // Якщо є, додаємо його до об'єкта
//             result[char] = (result[char] || 0) + 1;
//         }
//     }

//     return result;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача: Проверить, является ли строка анаграммой другой строки.

// function func(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let res1 = {};
//     let res2 = {};

//     for (let i = 0; i < str1.length; i++) {
//         res1[str1[i]] = (res1[str1[i]] || 0) + 1;
//         res2[str2[i]] = (res2[str2[i]] || 0) + 1;
//     }

//     for (let key in res1) {
//         if (res1[key] !== res2[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// У нас есть массив чисел. Нужно вернуть массив всех уникальных чисел из этого массива, то есть тех, которые встречаются ровно один раз.

// function func(arr) {
//     if (!Array.isArray(arr)) {
//         return false;
//     }

//     let obj = {};
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] = (obj[arr[i]] || 0) + 1
//     }

//     for (let key in obj) {
//         if (obj[key] === 1) {
//             result.push(key)
//         }
//     }

//     return result;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача: Напиши функцию, которая принимает строку и возвращает объект, где ключи — это символы строки, а значения — их количество в строке.

// function func(str) {
//     if (typeof str !== "string") {
//         return false
//     }

//     let obj = {};

//     for (let i = 0; i < str.length; i++) {
//         obj[str[i]] = (obj[str[i]] || 0) + 1;
//     }

//     return obj;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача: Напиши функцию, которая принимает массив строк и возвращает объект, где ключами будут уникальные символы, а значениями – количество их вхождений во всех строках массива.

// function func(arr) {
//     if (!Array.isArray(arr)) {
//         return false;
//     }

//     let obj = {};

//     for (let i = 0; i < arr.length; i++) {
//         let str = arr[i];

//         for (let j = 0; j < str.length; j++) {
//             let char = str[j]

//             obj[char] = (obj[char] || 0) + 1;
//         }
//     }

//     return obj
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши функцию, которая получает строку (или массив строк) и возвращает объект с количеством каждого символа, который встречается в строках.

// function func(str) {
//     if (typeof str !== "string") {
//         return false;
//     }

//     let obj = {};

//     for (let i = 0; i < str.length; i++) {
//         obj[str[i]] = (obj[str[i]] || 0) + 1;
//     }

//     return obj;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши функцію, яка приймає рядок і підраховує кількість входжень кожної цифри (0-9) у цьому рядку.

// function func(str) {
//     if (typeof str !== "string") {
//         return false;
//     }

//     let obj = {};


//     for (let i = 0; i < str.length; i++) {
//         if (/\d/.test(str[i])) {
//             obj[str[i]] = (obj[str[i]] || 0) + 1;
//         }
//     }

//     return obj;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши функцію, яка приймає рядок і повертає кількість голосних букв у ньому. Голосні: a, e, i, o, u (і великі теж).

// function func(str) {
//     if (typeof str !== "string") {
//         return false;
//     }

//     let voltes = "aeiouAEIOU";
//     let obj = {};

//     for (let i = 0; i < str.length; i++) {
//         if (voltes.includes(str[i])) {
//             obj[str[i]] = (obj[str[i]] || 0) + 1
//         }
//     }

//     return obj
// }