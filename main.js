console.log("#6. JavaScript homework example file");

/*
 * #1
 * Задача: Калькулятор калорійності продуктів через клас.
 * Завдання: Розробити модуль на JavaScript, який імплементує клас CalorieCalculator. Клас має використовувати Map для управління даними про калорійність продуктів. Необхідно реалізувати наступні функціональності:
 * Додавання продуктів: Метод addProduct приймає назву продукту та його калорійність, додаючи їх до колекції.
 * Отримання калорійності продукту: Метод getProductCalories повертає калорійність продукту за його назвою. Якщо продукт не знайдено, повертає рядок 'Product not found'.
 * Видалення продукту: Метод removeProduct видаляє продукт з колекції за назвою.
 *
 * Критерії перевірки:
 * Клас CalorieCalculator має бути реалізований з використанням ключового слова class.
 * Внутрішнє сховище продуктів має бути реалізоване за допомогою new Map().
 * Наявність методів addProduct, getProductCalories, та removeProduct.
 */

class CalorieCalculator {
  #caloriesMap;

  constructor() {
    this.#caloriesMap = new Map();
  }

  addProduct(productName, productCalories) {
    this.#caloriesMap.set(productName, productCalories);
  }

  getProductCalories(productName) {
    const productCalories = this.#caloriesMap.get(productName);

    if (productCalories === undefined || productCalories === null) {
      return "Product not found";
    }

    return productCalories;
  }

  removeProduct(productName) {
    return this.#caloriesMap.delete(productName);
  }
}

//
const calculator = new CalorieCalculator();

//
calculator.addProduct("Apple", 52);
calculator.addProduct("Banana", 89);
calculator.addProduct("Orange", 43);

console.log("Apple:", calculator.getProductCalories("Apple")); // 52
console.log("Banana:", calculator.getProductCalories("Banana")); // 89
console.log("Orange:", calculator.getProductCalories("Orange")); // 43
console.log("Grapes:", calculator.getProductCalories("Grapes")); // Product not found

//
calculator.removeProduct("Banana");
console.log("Banana Remove:", calculator.getProductCalories("Banana")); // Product not found

//
calculator.addProduct("Watermelon", 30);

//
console.log("Watermelon:", calculator.getProductCalories("Watermelon")); // 30
console.log("Apple:", calculator.getProductCalories("Apple")); // 52
console.log("Orange:", calculator.getProductCalories("Orange")); // 43

/*
 * #2
 * Задача: Унікальні користувачі.
 * Завдання: Реалізувати модуль на JavaScript у формі класу UniqueUsernames, який використовує Set для збереження унікальних імен користувачів. Клас має надавати можливість:
 * Додавання імен користувачів: Метод addUser дозволяє додати нове ім'я до набору. Якщо ім'я вже існує, воно не буде додано повторно, зберігаючи унікальність імен у наборі.
 * Перевірка наявності імені: Метод exists перевіряє, чи існує задане ім'я серед збережених унікальних імен.
 * Отримання кількості унікальних імен: Метод count повертає кількість унікальних імен, збережених у наборі.
 *
 * Критерії перевірки:
 * Наявність методів addUser, exists, count у класі UniqueUsernames.
 * Використання конструкції class для створення класу UniqueUsernames.
 * Застосування new Set() для внутрішнього сховища імен користувачів у конструкторі класу.
 */

class UniqueUsernames {
  #usernamesSet;

  constructor() {
    this.#usernamesSet = new Set();
  }

  addUser(username) {
    this.#usernamesSet.add(username);
  }

  exists(username) {
    return this.#usernamesSet.has(username);
  }

  count() {
    return this.#usernamesSet.size;
  }
}

//
const uniqueUsernames = new UniqueUsernames();

uniqueUsernames.addUser("john_doe");
uniqueUsernames.addUser("jane_doe");
uniqueUsernames.addUser("john_doe"); // same

console.log(`Exist 'john_doe':`, uniqueUsernames.exists("john_doe")); // true
console.log(`Exist 'alice_smith':`, uniqueUsernames.exists("alice_smith")); // false
console.log(`Uniq name count:`, uniqueUsernames.count()); // 2

//
uniqueUsernames.addUser("alice_smith");
console.log(`Uniq name count after addUser:`, uniqueUsernames.count()); // 3
