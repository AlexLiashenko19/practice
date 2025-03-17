// Задача: Напиши функцию sumEvenNumbers(arr), которая принимает массив чисел и возвращает сумму всех чётных чисел в этом массиве.

// function sumEvenNumbers(arr) {
//     let sum = 0;

//      arr.forEach(ar => {
//         if (ar % 2 === 0) {
//             sum += ar;
//         }
//     });
//     return sum;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача: Напиши функцию findLongestWord(str), которая принимает строку и возвращает самое длинное слово в этой строке.

// function findLongestWord(str) {
//     const word = str.split(' ');
//     let longerWord = '';

//     for (let i = 0; i < word.length; i++) {
//         if(word[i].length > longerWord.length) {
//             longerWord = word[i];
//         }
//     }
//     return longerWord;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача: Напиши функцию filterLongWords(words, length), которая принимает массив строк words и число length.
// Функция должна возвращать новый массив, содержащий только те слова, длина которых больше или равна заданной.

// function filterLongWords(word, length) {
//     if(!Array.isArray(word)) {
//         return [];
//     }

//     const newArray = [];

//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length >= length) {
//             newArray.push(word[i])
//         }
//     }

//     return newArray;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши функцию getShortWords(words, maxLength), которая принимает массив строк words и число maxLength.
// Функция должна возвращать массив слов, длина которых меньше или равна maxLength.

// function getShortWords(words, maxLength) {
//     if(!Array.isArray(words)) {
//         return [];
//     }

//     const newArray = [];

//     for (let i = 0; i < words.length; i++) {
//         if(words[i].length <= maxLength) {
//             newArray.push(words[i]);
//         }
//     }

//     return newArray;
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши функцию createMultiplier(multiplier), которая принимает число multiplier и возвращает новую функцию.
// Эта новая функция должна принимать число n и умножать его на multiplier.

// function createMultiplier(multiplier) {
//     if (typeof multiplier !== "number") {
//         throw new Error("Multiplier должен быть числом");
//     }

//     return function (n) {
//         if (typeof n !== "number") {
//             throw new Error("Аргумент должен быть числом");
//         }
//         return n * multiplier;
//     }
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши асинхронную функцию fetchData(url), которая принимает URL и эмулирует задержку 2 секунды перед возвратом данных.

// console.log("Начало запроса...");

// async function fetchData(url) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ message: "Данные загружены с " + url });
//         }, 2000);
//     });
// }

// console.log("Запрос отправлен!");

// fetchData("https://api.example.com").then((data) => {
//     console.log("Данные получены:", data);
// });

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши асинхронную функцию fetchUser(id), которая:
// Принимает id пользователя.
// Эмулирует запрос с задержкой 1 сек.
// Возвращает объект { id, name: "User #" }.

// console.log("Запрос пользователя...");

// async function fetchUser(id) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id, name: "User #" + id });
//         }, 1000);
//     })
// }

// fetchUser(5).then((user) => {
//     console.log("Пользователь получен:", user);
// });

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши асинхронную функцию fetchProducts(count), которая:
// Принимает количество товаров (count).
// Эмулирует задержку 1.5 сек перед возвратом данных.
// Возвращает массив объектов, где каждый объект — { id, name: "Product #id" }.

// console.log("Загрузка товаров...");

// async function fetchProducts(count) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const products = Array.from({ length: count }, (_, i) => ({
//                 id: i + 1,
//                 name: "Product #" + (i + 1),
//             }));
//             resolve(products);
//         }, 1500);
//     })
// }

// fetchProducts(3).then((products) => {
//     console.log("Товары загружены:", products);
// });

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши асинхронную функцию fetchUsers(count), которая:
// Принимает количество пользователей (count).
// Эмулирует задержку 1 секунду перед возвратом данных.
// Возвращает массив объектов, где каждый объект — { id, username: "User #id" }.

// console.log("Загрузка пользователей...");

// async function fetchUsers(count) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const users = Array.from({ length: count}, (_, i) => ({
//         id: i + 1,
//         username: "User #" + (i + 1)
//       }))
//       resolve(users);
//     }, 1000);
//   });
// }

// fetchUsers(4).then((users) => {
//   console.log("Пользователи загружены:", users);
// });

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача: Загрузка данных о пользователях и их заказах
// Представь, что у нас есть две асинхронные операции:

// Получение списка пользователей (как в предыдущих примерах).
// Получение заказов для каждого пользователя.
// Нужно создать две асинхронные функции:

// fetchUsers(count) — возвращает список пользователей, как раньше.
// fetchOrders(userId) — возвращает список заказов для пользователя с определённым userId.
// Задача: Загрузить пользователей и для каждого пользователя загрузить его заказы, а затем вывести на экран.

// console.log("Загрузка пользователей...");

// async function fetchUsers(count) {
//     return new Promise((resolve) => {
//         const users = Array.from({ length: count }, (_, i) => ({
//             id: i + 1,
//             username: `User #${i + 1}`,
//         }));
//         resolve(users);
//     });
// }

// async function fetchOrders(userId) {
//     return new Promise((resolve) => {
//         const numberOfOrders = Math.floor(Math.random() * 5) + 1;
//         setTimeout(() => {
//             const orders = Array.from({ length: numberOfOrders }, (_, i) => ({
//                 orderId: i + 1,
//                 item: `Item ${i + 1} for User #${userId}`,
//             }));
//             resolve(orders);
//         }, 1000);
//     });
// }

// async function main() {
//     const users = await fetchUsers(3);
//     for (const user of users) {
//         const orders = await fetchOrders(user.id)
//         console.log(`Заказы пользователя ${user.username}:`, orders);
//     }
// }

// main();

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача:

// Ты получаешь список пользователей с помощью fetchUsers.
// Для каждого пользователя ты получаешь заказы с помощью fetchOrders, но теперь нам нужно запрашивать заказы для всех пользователей одновременно, а не по очереди.
// Мы будем использовать Promise.all для того, чтобы все заказы были получены одновременно.

// console.log("Загрузка пользователей...");

// async function fetchUsers(count) {
//     return new Promise((resolve) => {
//         const users = Array.from({ length: count }, (_, i) => ({
//             id: i + 1,
//             username: `User #${i + 1}`,
//         }));
//         resolve(users);
//     });
// }

// async function fetchOrders(userId) {
//     return new Promise((resolve) => {
//         const numberOfOrders = Math.floor(Math.random() * 5) + 1;
//         setTimeout(() => {
//             const orders = Array.from({ length: numberOfOrders }, (_, i) => ({
//                 orderId: i + 1,
//                 item: `Item ${i + 1} for User #${userId}`,
//             }));
//             resolve(orders);
//         }, 1000);
//     });
// }

// async function main() {
//     const users = await fetchUsers(3);

//     const ordersPromises = users.map(user => fetchOrders(user.id));
//     const ordersList = await Promise.all(ordersPromises);

//     users.forEach((user, index) => {
//         console.log(`Заказы пользователя ${user.username}:`, ordersList[index]);
//     });
// }

// main();

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача:
// У нас есть функция для получения данных о пользователях и функция для получения их статистики (например, количество постов, лайков и т.д.). Тебе нужно написать код, который:

// Получит список пользователей.
// Для каждого пользователя получит его статистику.
// Использует Promise.all для параллельного выполнения запросов статистики для всех пользователей.
// После получения данных, выведет их в консоль.

// console.log("Загрузка пользователей...");

// async function fetchUsers(count) {
//     return new Promise((resolve) => {
//         const users = Array.from({ length: count }, (_, i) => ({
//             id: i + 1,
//             username: `User #${i + 1}`,
//         }));
//         resolve(users);
//     });
// }

// async function fetchStats(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const stats = {
//                 posts: Math.floor(Math.random() * 10) + 1,
//                 likes: Math.floor(Math.random() * 100) + 1,
//             };
//             resolve(stats);
//         }, 1000);
//     });
// }

// async function main() {
//     const users = await fetchUsers(3);

//     const statsPromises = users.map(user => fetchStats(user.id));
//     const statsList = await Promise.all(statsPromises);

//     users.forEach((user, index) => {
//         console.log(`Статистика пользователя ${user.username}:`, statsList[index]);
//     });
// }

// main();

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача:
// Загрузка пользователей — будет так же, как и раньше.
// Загрузка статистики — но теперь, помимо статистики, для каждого пользователя нужно загрузить информацию о его последних комментариях. То есть, мы будем запрашивать как статистику, так и комментарии для каждого пользователя.
// Обработка ошибок — при запросах могут возникать ошибки, например, если сервер не ответит. Нужно обработать такие ошибки и вывести сообщение о том, что запрос не удался.
// Задержка между запросами — между запросами для каждого пользователя будет случайная задержка (например, от 1 до 3 секунд).

// console.log("Загрузка пользователей...");

// async function fetchUsers(count) {
//     return new Promise((resolve) => {
//         const users = Array.from({ length: count }, (_, i) => ({
//             id: i + 1,
//             username: `User #${i + 1}`,
//         }));
//         resolve(users);
//     });
// }

// async function fetchStats(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.2;
//             if (success) {
//                 const stats = {
//                     posts: Math.floor(Math.random() * 10) + 1,
//                     likes: Math.floor(Math.random() * 100) + 1,
//                 };
//                 resolve(stats);
//             } else {
//                 reject(new Error("не удалось получить статистику"));
//             }
//         }, 1000);
//     });
// }

// async function fetchComments(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.3;
//             if (success) {
//                 resolve([{ commentId: 1, text: `Комментарий для пользователя #${userId}` }]);
//             } else {
//                 reject(new Error("Не удалось получить комментарии"));
//             }
//         }, Math.random() * 2000 + 1000);
//     });
// }

// async function main() {
//     const users = await fetchUsers(3);

//     // Запрашиваем статистику и комментарии для всех пользователей параллельно
//     const statsPromises = users.map(user => fetchStats(user.id));
//     const commentsPromises = users.map(user => fetchComments(user.id));

//     try {
//         // Получаем статистику и комментарии
//         const statsList = await Promise.all(statsPromises);
//         const commentsList = await Promise.all(commentsPromises);

//         // Выводим информацию о пользователях
//         users.forEach((user, index) => {
//             console.log(`Пользователь ${user.username} - Статистика:`, statsList[index]);
//             console.log(`Комментарии пользователя ${user.username}:`, commentsList[index]);
//         });
//     } catch (error) {
//         // Если произошла ошибка при получении статистики или комментариев, выводим ее
//         console.log("Ошибка:", error.message);
//     }
// }

// main();

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача:
// Создай объект person с двумя методами: greet и setAge. Метод greet должен выводить приветствие с именем, а метод setAge должен менять возраст, но при этом проверять, что переданный возраст — это число.
// Используя метод bind, привяжи эти методы к контексту объекта.

// Требования:

// Метод greet должен выводить приветствие с именем пользователя, например: "Привет, Иван!".
// Метод setAge должен проверять, что переданное значение возраста — это число, и менять свойство age объекта.
// Используй bind, чтобы методы всегда работали с правильным контекстом объекта person, даже если они будут переданы в другой контекст.

// const person = {
//   name: "Иван",
//   age: 25,
//   greet: function () {
//     console.log(`Hello, ${this.name}`);
//   },
//   setAge: function (newAge) {
//     if (typeof newAge === "number") {
//       this.age = newAge;
//       console.log(`Возраст обновлен на ${this.age}`);
//     } else {
//       console.log("Возраст должен быть числом!");
//     }
//   },
// };

// const greetName = person.greet.bind(person);
// const setAgeAge = person.setAge.bind(person);

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача: Напиши функцию, которая создает объект с методами для хранения и изменения приватного состояния (например, банковского счета).
// Сделай так, чтобы пользователи не могли напрямую изменять баланс, а могли только через методы для пополнения и снятия средств.

// function bankAccount() {
//   let balance = 0;

//   return {
//     addCount: function (amount) {
//       if (typeof amount === "number" && amount > 0) {
//         balance += amount;
//       } else {
//         console.log("Введите положительное число для пополнения");
//       }
//       console.log(`Пополнено на ${amount}. Текущий баланс: ${balance}`);
//     },
//     removeCount: function (amount) {
//       if (typeof amount === "number" && amount > 0 && amount <= balance) {
//         balance -= amount;
//         console.log(`Снято ${amount}. Текущий баланс: ${balance}`);
//       } else {
//         console.log("Недостаточно средств или неправильная сумма");
//       }
//       console.log(balance);
//     },
//     getBalance: function () {
//       return balance;
//     },
//   };
// }

// const count = bankAccount();

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача: Напиши функцию, которая будет работать с картой (словарем). Она должна поддерживать следующие операции:
// Добавление пары ключ-значение.
// Получение значения по ключу.
// Удаление ключа.
// Вывод всех ключей.

// function createDictionary() {
//   let dictionary = {};

//   return {
//     add: function (key, value) {
//       dictionary[key] = value;
//       console.log(`Добавлено: ${key} = ${value}`);
//     },
//     get: function (key) {
//       if (key in dictionary) {
//         console.log(`Значение по ключу ${key}: ${dictionary[key]}`);
//       } else {
//         console.log(`Ключ ${key} не найден`);
//       }
//     },
//     remove: function (key) {
//       if (key in dictionary) {
//         delete dictionary[key];
//         console.log(`Ключ ${key} удален`);
//       } else {
//         console.log(`Ключ ${key} не найден`);
//       }
//     },
//     showKeys: function () {
//       console.log("Все ключи:", Object.keys(dictionary));
//     },
//   };
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Реализуй функцию-конструктор Person, которая имеет свойства name и age, а также метод sayHello, который выводит в консоль Привет, меня зовут [name].
// Затем создай объект student, который наследует Person и имеет дополнительное свойство grade.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayHello = function () {
//     console.log(`Hello, my name is ${this.name}.`);
// };

// // Создаём функцию-конструктор для Student
// function Student(name, age, grade) {
//     Person.call(this, name, age); // Вызываем Person внутри Student, передавая this
//     this.grade = grade;
// }

// // Наследуем методы Person
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// // Добавляем метод для Student
// Student.prototype.study = function () {
//     console.log(`${this.name} is studying.`);
// };

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача:
// Реализуй два конструктора:

// Animal(name, sound), который имеет метод makeSound, выводящий звук животного.
// Dog(name, breed), который наследует Animal и добавляет метод bark, который выводит "Woof! Woof!".

// function Animal (name, sound) {
//     this.name = name;
//     this.sound = sound;
// }

// Animal.prototype.makeSound = function () {
//     console.log(`This voice ${this.sound} was ${this.name}`);
// }

// function Dog (name, breed) {
//     Animal.call(this, name, "Woof!")
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//     console.log("Woof! Woof!")
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задание:
// Создай класс Car, который:

// Принимает в constructor параметры brand (марка машины) и year (год выпуска).
// Имеет метод getInfo(), который выводит строку:
// "Автомобиль марки {brand}, выпущен в {year} году."
// Создай класс ElectricCar, который:

// Наследуется от Car
// Добавляет параметр batteryCapacity (емкость батареи)
// Переопределяет метод getInfo(), добавляя к базовой информации строку "Емкость батареи: {batteryCapacity} кВтч."

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
//   getInfo() {
//     console.log(`Автомобиль марки ${this.brand}, выпущен в ${this.year} году.`);
//   }
// }

// class ElectricCar extends Car {
//     constructor(brand, year, batteryCapacity) {
//         super(brand, year)
//         this.batteryCapacity = batteryCapacity;
//     }

//     getInfo() {
//         super.getInfo()
//         console.log(`Емкость батареи: ${this.batteryCapacity} кВтч.`)
//     }
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Создай класс Person с полями name и age, а также методом introduce(), который выводит в консоль фразу:
// 👉 "Меня зовут {name}, мне {age} лет."

// Затем создай класс Student, который наследуется от Person. У Student должно быть дополнительное поле university и
// переопределенный метод introduce(), который сначала вызывает метод родителя, а потом добавляет:
// 👉 "Я учусь в {university}."

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce() {
//         console.log(`Меня зовут ${this.name}, мне ${this.age} лет.`)
//     }
// }

// class Student extends Person {
//     constructor(name, age, university) {
//         super(name, age)
//         this.university = university;
//     }

//     introduce() {
//         super.introduce()
//         console.log(`Я учусь в ${this.university}.`)
//     }
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Добавь в класс Car (из прошлого примера) статический метод compareAge(car1, car2), который сравнивает возраст двух машин и выводит в консоль, какая старше.

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
//   static compareAge(car1, car2) {
//     const actualYear = new Date().getFullYear();
//     const carAge1 = actualYear - car1.year
//     const carAge2 = actualYear - car2.year
//     return carAge1 - carAge2;
//   }

//   getInfo() {
//     console.log(`Автомобиль марки ${this.brand}, выпущен в ${this.year} году.`);
//   }
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Создай класс Rectangle с приватными свойствами _width и _height (используй _ для обозначения приватности).
// Реализуй геттеры и сеттеры для изменения и получения ширины и высоты. Также добавь геттер area, который возвращает площадь (width * height).

// class Rectangle {
//   #width;
//   #height;
//   constructor(width, height) {
//     this.#height = height;
//     this.#width = width;
//   }
//   getArea() {
//     return this.#width * this.#height;
//   }
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Реалізуй проміс, який через 3 секунди або повертає число 42 , або видає помилку "Неудача" (в залежності від рандома).
// Используй Math.random() > 0.5для случайного успеха/ошибки.

// const myPromise = new Promise((resolve, reject) => {
//   let success = Math.random() > 0.5;

//   setTimeout(() => {
//     if (success) {
//       resolve(42);
//     } else {
//       reject("Неудача");
//     }
//   }, 3000);
// });

// myPromise
//   .then((data) => console.log("Успех:", data))
//   .catch((error) => console.error("Ошибка:", error))
//   .finally(() => console.log("Операция завершена."));

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Попробуй переписать код, используя async/await.

// async function executePromise() {
//   try {
//     const result = await new Promise((resolve, reject) => {
//       let success = Math.random() > 0.5;

//       setTimeout(() => {
//         if (success) {
//           resolve(42);
//         } else {
//           reject("Неудача");
//         }
//       }, 3000);
//     });

//     console.log("Успех:", result);
//   } catch (error) {
//     console.error("Ошибка:", error);
//   } finally {
//     console.log("Операция завершена.");
//   }
// }

// executePromise();

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача:
// Напиши функцию fetchData(), которая:

// Запрашивает данные с двух разных источников (имитируем fetch с Promise).
// Ждёт ответа от обоих промисов с помощью Promise.all().
// Выводит результат в консоль, если оба запроса успешны.
// Обрабатывает ошибку, если хотя бы один из промисов завершается с reject.

// async function fetchData() {
//   try {
//     const urls = [
//       "https://jsonplaceholder.typicode.com/todos/1",
//       "https://jsonplaceholder.typicode.com/todos/2",
//     ];

//     // Ждем ответа от обоих запросов
//     const results = await Promise.all(
//       urls.map((url) => fetch(url).then((res) => res.json()))
//     );

//     console.log("Успех:", results);
//   } catch (error) {
//     console.error("Ошибка:", error);
//   } finally {
//     console.log("Операция завершена.");
//   }
// }

// fetchData();

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Задача:
// Создай кнопку, при нажатии на которую выводится сообщение "Кнопка нажата!".

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log("Кнопка нажата!")
// })

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Есть массив с числами. Перебери его и выведи на экран только те числа, которые больше 5.

// const numbers = [3, 6, 8, 1, 4, 7, 2];

// numbers.forEach((number) => {
//   if (number > 5) {
//     return console.log(number);
//   }
// });

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Есть объект с информацией о студенте. Нужно перебрать его ключи и вывести на экран все ключи и их значения.

// const student = {
//     name: "Алексей",
//     age: 21,
//     university: "МГУ",
//     course: 3
// };

// for ( const key in student ) {
//     console.log(`${key}: ${student[key]}`)
// }

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Используй map(), чтобы создать новый массив, в котором у каждого товара будет добавлен новый ключ discountPrice, равный price * 0.9 (10% скидка).

// const products = [
//   { name: "Телефон", price: 1000 },
//   { name: "Ноутбук", price: 2000 },
//   { name: "Планшет", price: 1500 },
// ];

// const discountedProducts = products.map((product) => ({
//     ...product,
//     discountPrice: product.price * 0.9
// }))

// console.log(discountedProducts)

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Есть массив с числами. Нужно создать новый массив, который будет содержать только четные числа из исходного массива.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sqlNumbers = numbers.filter((number) => number % 2 === 0)

// console.log(sqlNumbers)

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Есть массив чисел. Нужно найти произведение всех чисел в массиве (умножить их).

// const numbers = [2, 3, 4];

// const sqlNumbers = numbers.find((number) => number * number > 10)

// console.log(sqlNumbers)

// ________________________________________________________________________________________________________________________________________________________________________________________________________________

// Напиши функцию deepClone, которая создает глубокую копию объекта. Функция должна работать с вложенными объектами и массивами.

// function deepClone(obj) {
//     if (obj === null) return null;

//     if (obj instanceof Date) {
//         return new Date(obj);
//     }

//     if (typeof obj === 'function') {
//         return obj;
//     }

//     if (Array.isArray(obj)) {
//         return obj.map(item => deepClone(item)); // Создаём новый массив и рекурсивно копируем элементы
//     }

//     if (typeof obj === 'object') {
//         let clonedObj = {};
//         for (let key in obj) {
//             if (obj.hasOwnProperty(key)) {
//                 clonedObj[key] = deepClone(obj[key]); // Копируем свойства в новый объект
//             }
//         }
//         return clonedObj;
//     }

//     return obj; // Если это примитив (число, строка, boolean), просто возвращаем его
// }

// Анаграми. Напишіть функцію, яка перевіряє, чи є два рядки анаграмами один одного.

// function isAnagram(str1, str2) {
//   if (typeof str1 !== 'string' || typeof str2 !== 'string') {
//     return false;
// }

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const str1Let = str1.toLowerCase().split("").sort().join('')
//   const str2Let = str2.toLowerCase().split("").sort().join('')

//   return str1Let === str2Let
// }