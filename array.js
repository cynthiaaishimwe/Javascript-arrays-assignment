// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]

let arr1 = [3,7,34,90,12];
let LastElement = arr1[arr1.length-1];
console.log(LastElement);

let arr2 = [true, "green", "where",12,56];
let result = arr2[arr2.length-1];
console.log(result);

// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Python", "Snake", "Dog"];

let myPets =["cow","python","snake","Dog"];
let pets = myPets.toString();
console.log(pets);


// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let resultArray =arr3.sort();
console.log(resultArray);


// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];



let arr = ["apple","mango","apple","orange","mango","mango"];
 let fruits = [...new Set (arr)];
 console.log(fruits);

//  Write a JS script to sort the following string

let word = "lufituaeb";
let word2 = word.sort();
console.log(word2);

 

