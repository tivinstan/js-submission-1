//Que1
// Function to convert array of strings to uppercase
const convertToUpperCase = (array) =>
  array.map((string) => string.toUpperCase());

const string = ["hello", "world"];
const upperCaseStrings = convertToUpperCase(string);

console.log(upperCaseStrings);




//Que2
// Function to filter even numbers from array
const filterEvenNumbers = (numbers) =>
  numbers.filter((number) => number % 2 === 0);

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);

console.log(evenNumbers);  // Output: [2, 4, 6]




//Que3
// Function to remove eempty strings
const removeEmptyStrings = strings => strings.filter(string => string.trim() !== "");

const strings = ["hello","","world","","javascript "];
const nonEmptyStrings = removeEmptyStrings(strings);

console.log(nonEmptyStrings);  // Output: ["hello", "world", "javascript"] 




//Que4
//Function to concatenate an array of strings into a single string with each word separated by a space
const concatenateWords = words => words.reduce((acc, word) => acc.concat(word), []).join(" ");

const words = ["hello", "world", "javascript"];
const concatenatedString = concatenateWords(words);

console.log(concatenatedString); // Output: "hello world javascript"




//Que5
//
const sumOfSquaredNumbers = array => array.reduce((sum, item) =>
  typeof item === 'number' ? sum + item ** 2 : sum, 0);

const array = [4, 'hello', 3, true, 'Uki', 5];
const sumOfSquared = sumOfSquaredNumbers(array);

console.log(sumOfSquared); // Output: 50 (4^2 + 3^2 + 5^2 = 50)




//Que6
const reverseArray = array => array.slice().reverse();

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Output: [1, 2, 3, 4, 5]




//Que7
const createPerson = (name, age) => ({
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
});


const person = createPerson('John', 25);
person.greet(); // Output: "Hello, my name is John and I am 25 years old."




//Que8
const getHighGrades = students => students
  .filter(student => student.grade > 80)
  .map(student => student.name);


const students = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 70 },
  { name: 'Charlie', grade: 85 }
];

const highGradeStudents = getHighGrades(students);
console.log(highGradeStudents); // Output: ['Alice', 'Charlie']




//Que10
const age = 20; 

if (age >= 18) {
  console.log("Adult");
}




//Que11
const score = 65; 

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}




//Que12
const grade = 85; 

if (grade >= 90) {
  console.log("Excellent");
} else if (grade >= 75) {
  console.log("Good");
} else if (grade >= 50) {
  console.log("Average");
} else {
  console.log("Poor");
}




//Que13
function addTask(tasks, newTask) {
  tasks.push(newTask);
  return tasks;
}

const tasks = ['Buy groceries', 'Clean the house'];
console.log(addTask(tasks, 'Pay bills'));   // Output: ['Buy groceries', 'Clean the house', 'Pay bills']




//Que14
function findCommonElements(arr1, arr2) {
  const commonElements = arr1.filter(element => arr2.includes(element));
  return commonElements;
}

console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // Output: [3]




//Que15
function updateEmployeeRecord(employee, updates) {
  const updatedEmployee = { ...employee, ...updates };
  return updatedEmployee;
}

const employee = { name: 'John', position: 'Developer', salary: 50000 }; //spread operator
const updates = { position: 'Senior Developer', salary: 60000 };
console.log(updateEmployeeRecord(employee, updates)); // { name: 'John', position: 'Senior Developer', salary: 60000 }




//Que16
function inventoryValue(products) {
  return products.reduce((totalValue, product) => {
    return totalValue + product.price * product.quantity;
  }, 0);
}

const products = [
  { name: 'Laptop', price: 1000, quantity: 5 },
  { name: 'Phone', price: 500, quantity: 10 }
];

console.log(inventoryValue(products)); // Output: 10000




//Que17
function applyDiscount(price, discountPercentage = 10) {
  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}


console.log(applyDiscount(100)); // Output: 90 (default discount of 10% applied)
console.log(applyDiscount(100, 20)); // Output: 80 (discount of 20% applied)




//Que18
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
  // Recursive case: return n * factorial(n - 1)
    return n * factorial(n - 1);
  }
}


console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
console.log(factorial(0)); // Output: 1 (0! = 1)
console.log(factorial(1)); // Output: 1 (1! = 1)




//Que19
function registerUser(users, newUser) {
  // Check if the username already exists in the array
  const existingUser = users.find(user => user.username === newUser.username);

  // If the username doesn't exist, add the new user to the array
  if (!existingUser) {
    users.push(newUser);
    console.log(`User '${newUser.username}' has been registered.`);
  } else {
    console.log(`Username '${newUser.username}' already exists.`);
  }

  // Return the updated array of users
  return users;
}


const users = [
  { username: 'vijay', email: 'vijay@example.com' },
  { username: 'suriya', email: 'suriya@example.com' }
];
const newUser1 = { username: 'vijay', email: 'vijay@example.com' };
const newUser2 = { username: 'suriya', email: 'suriya@example.com' };

console.log(registerUser(users, newUser1));
console.log(registerUser(users, newUser2));















