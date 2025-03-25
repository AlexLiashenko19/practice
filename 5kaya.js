// Напиши функцію, яка приймає рядок і повертає найчастіший символ у ньому. Якщо таких символів кілька, поверни їх у масиві.

// function func(str) {
//   if (typeof str !== "string") {
//     return false;
//   }

//   let obj = {};
//   let maxCount = 0;
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     obj[str[i]] = (obj[str[i]] || 0) + 1;
//   }

//   for (let key in obj) {
//     if (obj[key] > maxCount) {
//         maxCount = obj[key]
//     }
//   }

//   for (let key in obj) {
//     if (obj[key] === maxCount) {
//         result.push(key)
//     }
//   }

//   return result;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши функцию, которая принимает строку и возвращает строку, состоящую из уникальных символов (каждый символ появляется в строке только один раз).

// function func(str) {
//     if (typeof str !== "string") {
//         return false;
//     }

//     const correctStr = str.trim().toLowerCase();
//     let obj = {};
//     let result = [];
    
//     for (let i = 0; i < correctStr.length; i++) {
//         obj[correctStr[i]] = (obj[correctStr[i]] || 0) + 1
//     }

//     for (let key in obj) {
//         if (obj[key] === 1) {
//             result.push(key)
//         }
//     }

//     return obj;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши функцию, яка приймає рядок і повертає true, якщо цей рядок є анаграмою паліндрому, і false в іншому випадку.

// function func(str) {
//     if (typeof str !== "string") {
//         return false;
//     }

//     let obj = {};
//     let addCount = 0;

//     for (let i = 0; i < str.length; i++) {
//         obj[str[i]] = (obj[str[i]] || 0) + 1;
//     }

//     for (let key in obj) {
//         if (obj[key] % 2 !== 0) {
//             addCount++;
//         }
//     }
//     return addCount <= 1;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// У тебя есть массив чисел. Твоя задача — отсортировать массив в порядке возрастания, 
// но с исключением одного условия: если число отрицательное, оно должно быть перемещено в конец массива, а порядок остальных чисел должен остаться прежним.

// function func(arr) {
//     if (!Array.isArray(arr)) {
//         return false;
//     }

//     let plus = [];
//     let minus = [];
//     let result = [];

//     arr.forEach(el => {
//         if (el > 0) {
//             plus.push(el)
//         } else {
//             minus.push(el)
//         }
//     });

//     result.push(plus, minus);

//     return result;
// }

// Альтернатива с reduce

// function func(arr) {
//     if (!Array.isArray(arr)) {
//         return false;
//     }

//     return arr.reduce((acc, el) => {
//         if (el > 0) {
//             acc[0].push(el); // Положительные числа
//         } else {
//             acc[1].push(el); // Отрицательные числа
//         }
//         return acc;
//     }, [[], []]); // Изначально два пустых массива для положительных и отрицательных чисел
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Необходимо реализовать функцию, которая принимает массив строк и возвращает новый массив, состоящий из всех строк, которые содержат хотя бы одну гласную букву.

// function func(arr) {
//     if (!Array.isArray(arr)) {
//         return false;
//     }

//     const voltes = /[aeiouAEIOU]/;
//     let result = [];

//     arr.forEach(element => {
//         if (voltes.test(element)) {
//             result.push(element)
//         }
//     });

//     result.sort();

//     return result;
// }

// function func(arr) {
//     if (!Array.isArray(arr)) {
//         return false;
//     }

//     const voltes = /[aeiouAEIOU]/;

//     return arr.filter(element => voltes.test(element)).sort();
// }

// Напиши функцию, которая принимает строку и возвращает строку, состоящую из уникальных символов (каждый символ появляется в строке только один раз).

// function func(str) {
//     if (typeof str !== "string") {
//         return false;
//     }

//     const correctStr = str.trim()
//     let obj = {};
//     let result = [];

//     for (let i = 0; i < correctStr.length; i++) {
//         obj[correctStr[i]] = (obj[correctStr[i]] || 0) + 1
//     }

//     for (let key in obj) {
//         if (obj[key] === 1) {
//             result.push(key)
//         }
//     }

//     return result;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Нужно написать функцию, которая находит все уникальные элементы из двух массивов и возвращает новый массив с этими элементами. Используй объект для подсчета уникальных элементов.

// function func(arr1, arr2) {
//     if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
//         return false;
//     }

//     let obj = {};

//     arr1.forEach(element => {
//         obj[element] = (obj[element] || 0) + 1;
//     });

//     arr2.forEach(element => {
//         obj[element] = (obj[element] || 0) + 1;
//     });

//     let filteredObj = Object.keys(obj).filter(key => obj[key] === 1);

//     return filteredObj;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// У нас есть два массива объектов. 
// Нужно объединить их, и затем оставить только те объекты, у которых есть ключ id с уникальным значением (то есть, чтобы объекты с одинаковыми значениями по ключу id были удалены).

// function func(arr1, arr2) {
//     if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
//         return false;
//     }
    
//     const newArr = arr1.concat(arr2);
//     let obj = {};

//     newArr.forEach(element => {
//         obj[element.id] = element
//     });

//     return Object.values(obj)
// }