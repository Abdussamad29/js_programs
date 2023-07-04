let m = ['one',12,29]
console.log(m[2]);

//checking if the variable is an array or not
const arr = Array.isArray(m)
console.log(arr);

let score1 = 100;
let score2 = 200;
let score3 = 300;

let Arr = Array.of(score1,score2,score3);
console.log(Arr);

console.log(Array.from("Array"));

let numbers = [12,45,67,5668,368,457]
console.log(numbers.slice(1,3));

let num = numbers.splice(1,3)
console.log(num);

let age = 120
console.log(age.toFixed(1));

// program to convert first letter to uppercase
let fullName = "anonymous"
let cap_letter = fullName.slice(0,1).toUpperCase();
let other_words = fullName.slice(1,fullName.length);
let result = cap_letter+other_words;
console.log(result);