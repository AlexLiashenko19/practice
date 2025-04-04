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

// const regex = /[0-9]+/g;
// console.log(regex.test("123456")); // true
// console.log(regex.test("123abc")); // false

// 2️⃣ Знайти всі слова у реченні

// const regex = //\w+/g/g; // Доповни вираз
// console.log("Hello, world! How are you?".match(regex)); 
// // ["Hello", "world", "How", "are", "you"]

// 3️⃣ Перевірка правильності email

// const text = 'dfvffdv fdvfdvd 234 test@example.com ccdsd test_1-2+3@example.com123'

// const regex = /[\w\-\+]+@[\w.]+\.[a-z]+/g; // Напиши вираз для перевірки email
// console.log(text.match(regex)); // true
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

// const regexURL = /https?\:\/\//;

// console.log(regexURL.match("https://www.example.com")); // true
// console.log(regexURL.match("http://example.com")); // true
// console.log(regexURL.match("ftp://example.com")); // false
// console.log(regexURL.match("https://example.com/path?query=1&another=2")); // true
// console.log(regexURL.match("http://example.com/")); // true

// 🔟 Перевірка дати у форматі "YYYY-MM-DD"

// const regex = /^\d{4}-\d{2}-\d{2}$/;
// console.log(regex.test("2024-03-25")); // true
// console.log(regex.test("25-03-2024")); // false

// 1️⃣1️⃣ Проверка правильности ввода номера телефона
// Необходимо создать регулярное выражение для проверки номера телефона в формате:
// +1 (555) 123-4567
// (555) 123-4567
// 555-123-4567

const text = 'gergt grtgr ffddf +1 (555) 123-4567 gtrgrf ttrr 555 123 4567 ttrg 555-123-4567hg ';

const regex = /(\+?)\d+[0-9\-)(\s]{8,16}(?:\d)/g;

console.log(text.match(regex)); // true
// console.log(regex.test("(555) 123-4567")); // true
// console.log(regex.test("555-123-4567")); // true
// console.log(regex.test("+1 555 123 4567")); // true
// console.log(regex.test("5551234567")); // false
// console.log(regex.test("(555)-123-4567")); // false
// console.log(regex.test("+99 (555) 123-4567")); // true

// Подсказка: Используй скобки для группировки и символы \d для цифр.

// 1️⃣2️⃣ Извлечение хешей из строки
// Найди все хеши в строке, которые начинаются с символа # и содержат только буквы и цифры. Пример:

// Вход: "#abc123 #test #123abc"

// Выход: ["#abc123", "#test", "#123abc"]

// const regex = /^#\w+$/;
// console.log('#abc123 #test #123abc')

// Подсказка: Используй # как начало хеша и ограничь символы после него буквами и цифрами.

// 1️⃣3️⃣ Проверка на присутствие только латинских букв (без чисел и символов)
// Напиши регулярное выражение, которое проверяет, состоит ли строка только из латинских букв (без пробелов и символов). Пример:

// const regex = /[a-zA-Z]+/g;

// console.log(regex.test("HelloWorld")) // true
// console.log(regex.test("HelloWorld123")) // false


// 1️⃣4️⃣ Извлечение всех URL-адресов из текста
// Напиши регулярное выражение для извлечения всех URL-адресов из текста. Пример:

// const text = 'Visit us at https://www.example.com or http://www.test.com!';

// const regex = /https?:\/\/[^\s]+\.[a-z]$/g;

// Выход: ["https://www.example.com", "http://www.test.com"]

// console.log(text.match(regex))

// 1️⃣5️⃣ Проверка времени в 24-часовом формате
// Напиши регулярное выражение для проверки времени в 24-часовом формате HH:MM, где:

// const text = "23:45, 25:30";

// const regex = /[(0-2)(0-4)]+\:[(0-6)(0-9)]+/;

// 00:00 — минимальное время,

// 23:59 — максимальное время.

// Пример:

// console.log(text.match(regex))

// console.log(regex.test("23:45")); // true

// console.log(regex.test("25:30")); // false

// 1️⃣6️⃣ Преобразование строки в кэмелкейс
// Напиши регулярное выражение для преобразования строки в кэмелкейс (camelCase). Пример:

// Вход: "hello_world_example"

// Выход: "helloWorldExample"

// Подсказка: Используй регулярное выражение для поиска подстрок, начинающихся с нижнего подчеркивания.

// 1️⃣7️⃣ Извлечение всех чисел из строки
// Напиши регулярное выражение для извлечения всех чисел (целых и с плавающей точкой) из строки. Пример:

// const text = "I have 3 apples and 2.5 bananas, also -4.75 oranges and 10 grapes";
// const regex = /-?\d+(\.\d+)?/g;

// console.log(text.match(regex));  

// ["3", "2.5", "-4.75", "10"]

// 1️⃣8️⃣ Проверка даты в формате DD/MM/YYYY
// Напиши регулярное выражение для проверки даты в формате DD/MM/YYYY, где:

// const text = "I have 32/02/1998";
// const regex = /\b([0]){2}\/\d{2}\/\d{4}\b/g;

// console.log(text.match(regex));  

// DD — день (от 01 до 31),

// MM — месяц (от 01 до 12),

// YYYY — год (4 цифры).