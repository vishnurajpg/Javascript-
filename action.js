/*
Task 1 - Student Details
Create variables using:
const for college name
let for student name
var for student age
Print all values using console.log().
*/
const collegeName = "KSR College";
let studentName = "Vishnu";
var studentAge = 21;

console.log(collegeName);
console.log(studentName);
console.log(studentAge);
/*
Task 2 - Mobile Price
Create a variable price = 25000.
Change the price to 27000.
Print the updated price.
*/
let price = 25000;
price = 27000;

console.log(price);
/*
Task 3 - Company Name
Create a const variable called company.
Try to change its value.
Observe the error.
*/
const company = "Google";

//company = "Amazon"; //  Error
/*
Task 4 - Console Practice
Print the following using different console methods.
"Login Successful"
"Password is Weak"
"Network Error"
Use:
console.log()
console.warn()
console.error()
 */
console.log("Login Successful");
console.warn("Password is Weak");
console.error("Network Error");
/*
Task 5 - Data Types
Create variables for:
Your Name
Your Age
Are you a developer? (true/false)
An uninitialized variable
Print the value and its datatype. */
let name = "Vishnu";
let age = 21;
let isDev = true;
let temp;

console.log(name, typeof name);
console.log(age, typeof age);
console.log(isDev, typeof isDev);
console.log(temp, typeof temp);
/*Task 6 - Shopping Cart Array
Create an array named cart.
Store:
Laptop
Mouse
Keyboard
Headset
Monitor
Print:
First product
Third product
Last product */
let cart = ["Laptop", "Mouse", "Keyboard", "Headset", "Monitor"];

console.log(cart[0]); // First
console.log(cart[2]); // Third
console.log(cart[cart.length - 1]); // Last
/*Task 7 - Favorite Movies
Create an array with 6 movie names.
Print:
2nd movie
5th movie
Last movie */
let movies = ["Leo", "Vikram", "Master", "Jailer", "Beast", "Kaithi"];

console.log(movies[1]); // 2nd
console.log(movies[4]); // 5th
console.log(movies[movies.length - 1]); // Last
/*Task 8 - Employee Object
Create an object.
Properties:
name
age
department
skills (array)
salary
Print:
Employee name
Department
First skill
Salary */
let employee = {
  name: "Vishnu",
  age: 25,
  department: "IT",
  skills: ["Java", "Spring Boot", "SQL"],
  salary: 40000
};

console.log(employee.name);
console.log(employee.department);
console.log(employee.skills[0]);
console.log(employee.salary);
/**Task 9 - Product Details
Create an object.
Properties:
productName
brand
price
colors (array)
Print:
Brand
Price
Second color */
let product = {
  productName: "Phone",
  brand: "Samsung",
  price: 20000,
  colors: ["Black", "Blue", "White"]
};

console.log(product.brand);
console.log(product.price);
console.log(product.colors[1]);
/* Task 10 - Arithmetic Calculator
Take two numbers.
Perform:
Addition
Subtraction
Multiplication
Division
Modulus
Exponent
Print every result.
*/
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
/*Task 11 - Increment Practice
let a = 5;
Perform:
a++
++a
a--
--a
Print after every step.*/
let a = 5;

a++;
console.log(a); // 6

++a;
console.log(a); // 7

a--;
console.log(a); // 6

--a;
console.log(a); // 5
/*Task 12 - Predict the Output
let a = 10;

let b = a++;

let c = ++b;

console.log(a);
console.log(b);
console.log(c);
Write the output before running.*/
let a = 10;
let b = a++; // b=10, a=11
let c = ++b; // b=11, c=11

console.log(a); // 11
console.log(b); // 11
console.log(c); // 11
/*Task 13 - Predict the Output
let x = 7;

let y = --x;

let z = y++;

console.log(x);
console.log(y);
console.log(z);
Predict the output.
*/
let x = 7;
let y = --x; // x=6, y=6
let z = y++; // z=6, y=7

console.log(x); // 6
console.log(y); // 7
console.log(z); // 6
/*Task 14 - School Object
Create an object.
Properties:
schoolName
principal
totalStudents
classes (array)
Print:
School name
Principal
Last class*/
let school = {
  schoolName: "ABC School",
  principal: "Ravi",
  totalStudents: 500,
  classes: ["1st", "2nd", "3rd", "4th"]
};

console.log(school.schoolName);
console.log(school.principal);
console.log(school.classes[school.classes.length - 1]);
/*Task 15 - Grocery List
Create an array with 8 grocery items.
Print:
First item
Fourth item
Last item*/
let grocery = ["Rice", "Sugar", "Salt", "Milk", "Oil", "Eggs", "Tea", "Coffee"];

console.log(grocery[0]);
console.log(grocery[3]);
console.log(grocery[grocery.length - 1]);
/*Task 16 - User Profile
Create variables:
Username
Email
Age
IsPremium
Print each value and datatype.*/
let username = "Vishnu";
let email = "vishnu@gmail.com";
let age = 25;
let isPremium = true;

console.log(username, typeof username);
console.log(email, typeof email);
console.log(age, typeof age);
console.log(isPremium, typeof isPremium);
/*Task 17 - Variable Rules
Create:
one var
one let
one const
Try:
Reassign all
Redeclare all
Write which operations are allowed and which give errors.*/
var a = 10;
let b = 20;
const c = 30;

// Reassign
a = 15; // 
b = 25; // 
// c = 35; 

// Redeclare
var a = 100; // 
// let b = 200; 
// const c = 300; 

/*Task 18 - Marks Calculation
Create:
let tamil = 85;
let english = 90;
let maths = 95;
Calculate:
Total
Average
Print both.*/
let tamil = 85;
let english = 90;
let maths = 95;

let total = tamil + english + maths;
let avg = total / 3;

console.log(total);
console.log(avg);
/*
Task 19 - Company Database
Create an object:
Company
Employees (Array)
Location
Founded Year
CEO
Print:
CEO
Location
First employee*/
let company = {
  Company: "TCS",
  Employees: ["Vishnu", "Arun", "Kumar"],
  Location: "Chennai",
  Founded: 1968,
  CEO: "Rajesh"
};

console.log(company.CEO);
console.log(company.Location);
console.log(company.Employees[0]);
/*Task 20 - Mini Profile
Create an object where one property is an array.
Example:
Name
City
Hobbies (Array)
Age
Print:
Name
Second hobby
Age*/
let profile = {
  name: "Vishnu",
  city: "Salem",
  hobbies: ["Coding", "Gaming", "Music"],
  age: 25
};

console.log(profile.name);
console.log(profile.hobbies[1]);
console.log(profile.age);