//1-misol
//Quyidagi obyektni name, age, va location maydonlariga ajratib oling va ularni konsolga chiqaring.

let user = { name: "Ali", age: 25, location: "Toshkent" };

let { name, age, location } = user;

console.log(name);
console.log(age);
console.log(location);

//2-misol
// Massivdan destructuring yordamida birinchi va ikkinchi elementlarni ajratib oling va qolgan barcha elementlarni others nomli yangi massivga joylashtiring.

let numbers = [10, 20, 30, 40, 50];

let [first, second, ...others] = numbers;

console.log(first);
console.log(second);
console.log(others);

//3-misol
// Funksiya parametrlari sifatida obyekt berilgan. Funksiya ichida destructuring orqali title va price maydonlarini oling va konsolga chiqaring.

let product = { title: "Telefon", price: 300, brand: "Samsung" };

function displayProduct({ title, price }) {
  console.log(title);
  console.log(price);
}

displayProduct(product);

//4-misol
// Quyidagi kodda x qiymatini global, local va block scope’da o‘zgartirib, ularning o‘zgarishlarini kuzating.

let x = 10;

function testScope() {
  let x = 20;
  if (true) {
    let x = 30;
    console.log("Block scope:", x);
  }
  console.log("Local scope:", x);
}

testScope();
console.log("Global scope:", x);

//5-misol
//Quyidagi kodda qaysi scope`da xatolik yuz berishini aniqlang va tuzating.

function calculate() {
  let result;
  if (true) {
    result = 10;
  }
  console.log(result);
}

calculate();

//6-misol
//Global scope’dagi o‘zgaruvchini funksiyada va blok ichida o‘zgartirish qanday natija berishini kuzating.

let count = 5;

function increment() {
  count++;
  console.log("Function scope:", count);
}

increment();

if (true) {
  count += 2;
  console.log("Block scope:", count);
}

console.log("Global scope:", count);

//7-misol
//Quyidagi ikkita massivni spread operator yordamida bitta massivga birlashtiring.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];

console.log(result);

//8-misol
//Funksiyaga istalgan miqdordagi argumentlarni yuboring va rest operator yordamida ularni bir massiv sifatida qabul qiling. Har bir elementni kvadratga ko‘paytirib qaytaring.

function squareNumbers(...numbers) {
  return numbers.map((number) => number ** 2);
}

console.log(squareNumbers(2, 3, 4));

//9-misol
//Quyidagi obyektga yangi maydonlar qo‘shish uchun spread operatoridan foydalaning.

const user1 = { name: "Ali", age: 25 };
const updatedUser = {
  ...user1,
  location: "Toshkent",
};

console.log(updatedUser);

//10-misol
//Quyidagi kodni hoisting qoidasiga asoslanib tahlil qiling va qaysi qatorda xatolik yuz berishini tushuntiring.

console.log(a); // undi
var a = 10;

// console.log(b); // ?
// let b = 20; //bu yerda let ni indexsini elon qilishdan oldin chiqarish kerak

test();
function test() {
  console.log("Test function called");
}

//11-misol
//TDZ haqida tushuncha hosil qilish uchun quyidagi kodni to‘ldiring va xatoni tushuntiring.

console.log(xx); // TDZ sababli let x = 5;  x   bolsa ham, unga murojat qilib bolmaydi.

let xx = 5;

//12-misol
//Quyidagi kodning ishlash tartibini tushuntiring.

var xxx = 10;

function example() {
  console.log(xxx); // bu 10 sonini chiqaradi
  var x = 20;
  console.log(x); // 20 sonini ciqaradi
}

example();

//13-misol
// Ikkita fayl yarating. Birinchi faylda sum va multiply funksiyalarini yozing va ularni eksport qiling. Ikkinchi faylda ushbu funksiyalarni import qiling va ulardan foydalaning.

import { sum, multiply } from "./app";

const a = 5;
const b = 3;

console.log(`Sum: ${sum(a, b)}`);
console.log(`Multiply: ${multiply(a, b)}`);

//14-misol
//Default eksportdan foydalaning. Bir faylda greet funksiyasini default qilib eksport qiling va boshqa faylda uni import qilib ishlating.

import greet from "./greet.js";

const c = "Ali";
console.log(greet(c));

//15-misol
//Modullarda nom o‘zgarishini sinab ko‘ring. Quyidagi funksiyani eksport qiling va import qiling, lekin boshqa nom bilan foydalaning.

import { divide as division } from "./math.js";

const d = 10;
const e = 2;

console.log(`Division result: ${division(d, e)}`);

//16-misol
// Funksiya massiv ichidagi isActive: true qiymatiga ega foydalanuvchilarni qaytarishi kerak.

const users = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Laylo", age: 30, isActive: false },
  { id: 3, name: "Sardor", age: 22, isActive: true },
  { id: 4, name: "Madina", age: 28, isActive: false },
];

function num16(users) {
  return users.filter((user) => user.isActive == true);
}

console.log(num16(users));

//17-misol
//Funksiya foydalanuvchilarni age qiymatiga qarab o‘sish tartibida saralashi kerak.

const users1 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Laylo", age: 30, isActive: false },
  { id: 3, name: "Sardor", age: 22, isActive: true },
  { id: 4, name: "Madina", age: 28, isActive: false },
];

function num17(users) {
  return users.sort((a, b) => a.age - b.age);
}

console.log(num17(users1));

//18-misol
//Funksiya ismni qabul qilib, massivdan shu ismga ega foydalanuvchini topishi kerak.

const users2 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Laylo", age: 30, isActive: false },
  { id: 3, name: "Sardor", age: 22, isActive: true },
  { id: 4, name: "Madina", age: 28, isActive: false },
];

function num18(users, name) {
  return users.find((user) => user.name == name);
}

console.log(num18(users2, "Sardor"));
console.log(num18(users2, "Ali"));
console.log(num18(users2, "Otabek"));

//19-misol
// Funksiya foydalanuvchilarning yoshlarining o‘rtacha qiymatini qaytarishi kerak.

//20-misol
// Funksiya minimal va maksimal yoshni qabul qilib, shu yosh oralig‘idagi foydalanuvchilarni qaytarishi kerak.

//21-misol
// Funksiya kategoriya nomini qabul qilib, shu kategoriyaga tegishli mahsulotlarni qaytarishi kerak.

const products = [
  { id: 1, name: "Telefon", price: 1200, category: "electronics" },
  { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
  { id: 3, name: "Stol", price: 150, category: "furniture" },
  { id: 4, name: "Kitob", price: 50, category: "books" },
];

function num21(products, category) {
  return products.filter((product) => product.category == category);
}

console.log(num21(products, "electronics"));

//22-misol
//Funksiya massivdagi eng qimmat mahsulotni qaytarishi kerak.

const products1 = [
  { id: 1, name: "Telefon", price: 1200, category: "electronics" },
  { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
  { id: 3, name: "Stol", price: 150, category: "furniture" },
  { id: 4, name: "Kitob", price: 50, category: "books" },
];

function num22(param) {}

//23-misol
//Funksiya barcha mahsulotlarning narxlari yig‘indisini qaytarishi kerak.

const products2 = [
  { id: 1, name: "Telefon", price: 1200, category: "electronics" },
  { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
  { id: 3, name: "Stol", price: 150, category: "furniture" },
  { id: 4, name: "Kitob", price: 50, category: "books" },
];

function num23(products) {
  if (!Array.isArray(products) || products.length === 0) {
    return 0;
  }

  return products.reduce((total, product) => total + product.price, 0);
}

const sum23 = num23(products2);
console.log(sum23);

//24-misol
// Funksiya mahsulotlarning narxini 10% ga kamaytirib, yangi massivni qaytarishi kerak.

const products3 = [
  { id: 1, name: "Telefon", price: 1200, category: "electronics" },
  { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
  { id: 3, name: "Stol", price: 150, category: "furniture" },
  { id: 4, name: "Kitob", price: 50, category: "books" },
];

function num24(products, discountPercentage) {
  if (!Array.isArray(products) || products.length === 0) {
    return [];
  }

  return products.map((product) => ({
    ...product,
    price: (product.price * (1 - discountPercentage / 100)).toFixed(2), // Narxni kamaytiramiz
  }));
}

const sum24 = num24(products3, 10);
console.log(sum24);

//25-misol
//Funksiya ma'lum bir minimal narxni qabul qilib, shu narxdan yuqori bo‘lgan mahsulotlarni qaytarishi kerak

const products4 = [
  { id: 1, name: "Telefon", price: 1200, category: "electronics" },
  { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
  { id: 3, name: "Stol", price: 150, category: "furniture" },
  { id: 4, name: "Kitob", price: 50, category: "books" },
];

function num25(products, minPrice) {
  return products.filter((product) => product.price > minPrice);
}

const sum25 = num25(products4, 1000);

// DOMLA TOGRISI UNCHA TUSHINMADIM
// VIDEONI RODUMKU LEKIN ISHLOLMAYAPMAN
