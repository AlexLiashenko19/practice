// 🔹 Спеціальні символи
// Символ	Опис
// .	Будь-який символ, крім нового рядка
// \d	Будь-яка цифра (0-9)
// \D	Будь-який символ, крім цифр
// \w	Будь-яка буква, цифра або _ (латиниця)
// \W	Будь-який символ, крім \w
// \s	Пробіл, табуляція, новий рядок
// \S	Будь-який символ, крім пробільних
// \t - enter или начало с новой строки

// 🔹 Квантифікатори (повторення)
// Символ	Опис
// +	Один або більше разів (\d+ — одна або більше цифр)
// *	Нуль або більше разів (\w* — будь-яка кількість букв)
// ?	Нуль або один раз, если сходства не будет то вернуть пустую строку (colou?r — "color" або "colour")
// {n}	Рівно n повторень
// {n,}	Не менше n разів
// {n,m}	Від n до m повторень

// 🔹 Анкори (початок і кінець рядка)
// Символ	Опис
// ^	Початок рядка
// [^] Отрицательнный диапазон - символы которые нужно игнорировать
// $	Кінець рядка
// (?<=abc) Наше выражение должно начинаться abc не будет добавленно к вывову
// (?=abc) Наше выражение должно заканчиваться abc не будет добавленно к вывову
// (?:abc) Наше выражение должно заканчиваться abc будет добавленно к вывову

// 🔹 Групування та альтернативи
// Символ	Опис
// ( )	Групування
// `	`

// 🔹 Модифікатори (флаги)
// Флаг	Опис
// i	Ігнорування регістру (/hello/i знайде "Hello")
// g	Глобальний пошук (знаходить всі входження)
// m	Багаторядковий режим (робить ^ і $ працюючими для кожного рядка)

// /(?<=<@)\w+(?=\/)/g
// /[a-z0-9_]+@[a-z0-9_.]+\.[a-z]{2,12}/g
// /(\+?)\d+[0-9\-)(\s]{10,16}(?:\d)/g
// /(mess|call)\w{8}(ca|us)/ig
// /^http(s?):\/\/[a-z0-9_.\-]+\.[a-z]{2,12}$/+

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

// const text = 'gergt grtgr ffddf +1 (555) 123-4567 gtrgrf ttrr 555 123 4567 ttrg 555-123-4567hg ';

// const regex = /(\+?)\d+[0-9\-)(\s]{8,16}(?:\d)/g;

// console.log(text.match(regex)); // true
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

// \d+(\.?)\d+|(грн|$|€)

const freshCourses = { usd: 37.44, eur: 39.905 };

const data = `
- 02.10 Эдик 23524 грн
- 03.10 Саша 17328,грн
- 04.10 Денис 21570 грн
- 10.10 Данил 9200 грн
- 11.10 Саша 31050 грн
- 13.10 Денис 20264 грн
- 18.10 Данил 17250 грн
- 03.10 Илья 315$
- 04.10 Денис 277 €
- 06.10 Денис 503$
- 11.10 Денис 525€
- 23.10 Илья 650 $
- 31.10 Денис 596-$
- 31.10 Тимур 2350$
- 04.10 Федя 360€
- 17.10 Федя 720€
- 24.10 Федя 360€
- 04.10 Виталик 52000 грн
- 10.10 Виталик 54500 грн
- 10.10 Виталик 48700 грн 
- 20.10 Виталик 52200 грн
- 06.10 Максим 83472 грн
- 10.10 Федя 54690 грн
- 10.10 Саша 91000 грн
- 16.10 Илья 108800 грн
- 17.10 Игорь 72000 грн
- 26.10 Федя 52200 грн
`;

function groupAmountOfGrivnasByDate(str, freshCourses) {
  const regex = /\d+(\.?)\d+|(грн|$|€)/gi;
  const lines = str
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const result = {};
  let totalSum = 0;

  lines.forEach((line) => {
    const dateMatch = line.match(/(\d{2}\.\d{2})/);
    if (!dateMatch) return;

    const date = dateMatch[1];

    let match;
    while ((match = regex.exec(line)) !== null) {
      let amount = parseFloat(match[1].replace(",", "."));
      const currency = match[2];

      if (isNaN(amount)) continue;

      switch (currency) {
        case "$":
          amount *= freshCourses.usd;
          break;
        case "€":
          amount *= freshCourses.eur;
          break;
        case "грн":
        default:
          // already in grivnas or unknown currency – no conversion
          break;
      }

      amount = Math.round(amount * 100) / 100;

      if (!result[date]) {
        result[date] = 0;
      }

      result[date] += amount;
      totalSum += amount;
    }
  });

  totalSum = Math.round(totalSum * 100) / 100;

  return [result, totalSum];
}

console.log(groupAmountOfGrivnasByDate(data, freshCourses));

[
  {
    "26.10": 52200,
    "17.10": 100731.6,
    "16.10": 108800,
    "10.10": 258090,
    "06.10": 102304.32,
    "20.10": 52200,
    "04.10": 98989.485,
    "24.10": 14365.800000000001,
    "31.10": 110298.23999999999,
    "23.10": 24336,
    "11.10": 52000.125,
    "03.10": 29121.6,
    "18.10": 17250,
    "13.10": 20264,
    "02.10": 23524,
  },
  1064475.17,
];
