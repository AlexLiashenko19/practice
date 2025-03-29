// 🔹 Спеціальні символи
// Символ	Опис
// .	Будь-який символ, крім нового рядка
// \d	Будь-яка цифра (0-9)
// \D	Будь-який символ, крім цифр
// \w	Будь-яка буква, цифра або _ (латиниця)
// \W	Будь-який символ, крім \w
// \s	Пробіл, табуляція, новий рядок
// \S	Будь-який символ, крім пробільних

// 🔹 Квантифікатори (повторення)
// Символ	Опис
// +	Один або більше разів (\d+ — одна або більше цифр)
// *	Нуль або більше разів (\w* — будь-яка кількість букв)
// ?	Нуль або один раз (colou?r — "color" або "colour")
// {n}	Рівно n повторень
// {n,}	Не менше n разів
// {n,m}	Від n до m повторень

// 🔹 Анкори (початок і кінець рядка)
// Символ	Опис
// ^	Початок рядка
// $	Кінець рядка

// 🔹 Групування та альтернативи
// Символ	Опис
// ( )	Групування
// `	`

// 🔹 Модифікатори (флаги)
// Флаг	Опис
// i	Ігнорування регістру (/hello/i знайде "Hello")
// g	Глобальний пошук (знаходить всі входження)
// m	Багаторядковий режим (робить ^ і $ працюючими для кожного рядка)

// 🟢 Легкі завдання:
// 1️⃣ Перевірка, чи рядок містить лише цифри

// const regex = /[0-9]+/g; // Доповни регулярний вираз
// console.log(regex.test("123456")); // true
// console.log(regex.test("123abc")); // false

// 2️⃣ Знайти всі слова у реченні

// const regex = //\w+/g/g; // Доповни вираз
// console.log("Hello, world! How are you?".match(regex)); 
// // ["Hello", "world", "How", "are", "you"]

// 3️⃣ Перевірка правильності email

// const regex = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Напиши вираз для перевірки email
// console.log(regex.test("test@example.com")); // true
// console.log(regex.test("invalid-email")); // false

// 4️⃣ Перевірка телефонного номера (формат: +380123456789)

// const regex = /(\+)\d+/g; // Напиши вираз
// console.log(regex.test("+380123456789")); // true
// console.log(regex.test("380123456789")); // false
// 🟡 Середнього рівня:

// 5️⃣ Витягнути всі HTML-теги із рядка

// const regex = /<\/?[a-z0-9_-]+\/?>/g;
// console.log("<div>Hello</div><span>World</span><br/>".match(regex)); 
// // // ["<div>", "</div>", "<span>", "</span>"]

// 6️⃣ Перевірити, чи рядок є коректним IPv4-адресом

// const regex = /\b(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.
// (25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.
// (25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.
// (25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\b/g;
// console.log(regex.test("192.168.1.1")); // true
// console.log(regex.test("999.999.999.999")); // false

// 7️⃣ Перевірка паролю (мінімум 8 символів, 1 велика, 1 мала літера, 1 цифра, 1 спецсимвол)

// const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
// console.log(regex.test("StrongPass1!")); // true
// console.log(regex.test("weakpass")); // false

// 🔴 Складні завдання:

// 8️⃣ Видалити всі HTML-теги з рядка, залишивши лише текст

// const regex = /<\/?[^>]+>/g;
// console.log("<div>Hello <b>world</b></div>".replace(regex, "")); 
// "Hello world"

// 9️⃣ Перевірити, чи рядок є дійсним URL

// const regexURL = /(^https?):\/\/[\w]+\./;
// console.log(regexURL.test("https://www.example.com")); // true
// console.log(regexURL.test("http://example.com")); // true
// console.log(regexURL.test("ftp://example.com")); // false
// console.log(regexURL.test("https://example.com/path?query=1&another=2")); // true
// console.log(regexURL.test("http://example.com/")); // true

// 🔟 Перевірка дати у форматі "YYYY-MM-DD"

const regex = /^\d{4}-\d{2}-\d{2}$/;
console.log(regex.test("2024-03-25")); // true
console.log(regex.test("25-03-2024")); // false
