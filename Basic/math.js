// Math
// Javascript-এ Math হলো একটি অবজেক্ট। যেগুলোকে ডট নোটেশান দিয়ে একসেস করতে হয়।

var max = Math.max(12, 25, 46, 48); // 48
var min = Math.min(12, 25, 46, 48); // 12
var min1 = Math.min("He", "She", "I", "You"); // NaN
//
//
//
let num = 4.548;

console.log(Math.abs(num)); // '+' or '-' it always converted to positive number.

console.log(Math.floor(num)); // 4

console.log(Math.ceil(num)); // 5

console.log(Math.round(num)); // 4

console.log(Math.pow(2, 3)); // 8

console.log(Math.pow(3, 3)); // 27

console.log(Math.sqrt(64)); // 8

console.log(Math.sqrt(9)); // 3

//
// Math.random
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1)); // num create within (1-10)
console.log(Math.floor(Math.random() * 100)); // num create within (0-100)
console.log(Math.round(Math.random() * 1000 + 1)); // num create within (1-1000)

//
//
const splitted = "jobayer";
const res = splitted.split("").reverse().join("");
console.log(res);

console.log(0xff);
