// // 1. Length
// // 1-masala
// let array1 = [1, 2, 3, 4, 5];
// console.log(array1.length); // 5

// let text1 = "Hello, world!";
// console.log(text1.length); // 12

// let array2 = [10, 20, 30];
// console.log(array2[array2.length - 1]); // 30

// // 2. Concat
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let combined1 = arr1.concat(arr2);
// console.log(combined1); // [1, 2, 3, 4]

// let str1 = "Hello";
// let str2 = "World";
// let str3 = "!";
// let result1 = str1.concat(" ", str2, str3);
// console.log(result1); // "Hello World!"

// let combined2 = arr1.concat(arr2);
// combined2.push(9);
// console.log(combined2); // [1, 2, 3, 4, 9]

// // 3. Includes
// let arr3 = [1, 2, 3, 4];
// console.log(arr3.includes(3)); // true

// let text2 = "Hello world!";
// console.log(text2.includes("world")); // true

// let arr4 = [2, 5, 12, 9];
// let isGreaterThan10 = arr4.some((num) => num > 10);
// console.log(isGreaterThan10); // true

// // 4. IndexOf, LastIndexOf
// let arr5 = [5, 3, 7, 3];
// console.log(arr5.indexOf(3)); // 1

// console.log(arr5.lastIndexOf(3)); // 3

// let text3 = "hello world";
// console.log(text3.indexOf("a")); // -1
// console.log(text3.lastIndexOf("a")); // -1

// // 5. Sort
// let arr6 = [7, 3, 5, 1];
// arr6.sort((a, b) => a - b);
// console.log(arr6); // [1, 3, 5, 7]

// let arr7 = ["apple", "banana", "cherry"];
// arr7.sort();
// console.log(arr7); // ["apple", "banana", "cherry"]

// arr6.sort((a, b) => b - a);
// console.log(arr6); // [7, 5, 3, 1]

// // 6. Reverse
// let arr8 = [1, 2, 3, 4];
// arr8.reverse();
// console.log(arr8); // [4, 3, 2, 1]

// let text4 = "hello";
// let reversed1 = text4.split("").reverse().join("");
// console.log(reversed1); // "olleh"

// let arr9 = [1, 2, 3, 4];
// console.log(arr9.reverse()); // [4, 3, 2, 1]

// // 7. ToString
// let arr10 = [1, 2, 3];
// console.log(arr10.toString()); // "1,2,3"

// let arr11 = [10, 20, 30];
// console.log(arr11.join(",")); // "10,20,30"

// let numbers = [1, 2, 3, 4];
// console.log(numbers.join()); // "1,2,3,4"

// // 8. Join
// let arr12 = [1, 2, 3];
// console.log(arr12.join("-")); // "1-2-3"

// let arr13 = ["apple", "banana", "cherry"];
// console.log(arr13.join(" ")); // "apple banana cherry"

// console.log(arr13.join("|")); // "apple|banana|cherry"

// // 9. Push, Shift
// let arr14 = [1, 2];
// arr14.push(3);
// console.log(arr14); // [1, 2, 3]

// arr14.shift();
// console.log(arr14); // [2, 3]

// arr14.push(4);
// arr14.shift();
// console.log(arr14); // [3, 4]

// // 10. Unshift, Pop
// let arr15 = [2, 3];
// arr15.unshift(1);
// console.log(arr15); // [1, 2, 3]

// arr15.pop();
// console.log(arr15); // [1, 2]

// arr15.push(4);
// arr15.unshift(0);
// arr15.pop();
// console.log(arr15); // [0, 1, 2]
