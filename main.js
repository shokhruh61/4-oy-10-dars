// // // // Sodda masalalar
// // 1-MASALA JAVOBI
let arr = [10, "BMW", 25, "Audi", 50, "Tesla", 4];
alert(arr.length);
// // 2-masala
// let arr = 'Mercedes, Toyota, Chevrolet, Nissan, Ford';
// let res = arr.length;
// console.log(res);

// // 3-masala
// let arr = [10, 'BMW', 25, 'Audi', 5];
// let res = arr[arr.length - 1];
// console.log(res);

// // // ### 2. Concat
// // 1-masala
// let arr1 = [10, "BMW", 25];
// let arr2 = [50, "Audi", 75];

// let res = arr1.concat(arr2);
// console.log(res);

// // 2-masala
// let arr1 = ["Olma", "Toyota", "Qizil"];
// let arr2 = ["Banan", "Honda", "Yashil"];
// let arr3 = ["Anor", "Ford", "Moviy"];
// let res = arr1.concat(arr2, arr3);
// console.log(res);

// // 3-masala
// let arr1 = [10, "BMW", 25];
// let arr2 = [50, "Audi", 75];
// let res = arr1.concat(arr1);
// let res1 = res.push(`Olcha`);
// console.log(res1);

// // // ### 3. Includes
// // 1-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 7];
// console.log(arr.includes(5));

// // 2-masala
// let arr = ["Lorem ipsum dolor sit amet.", `Olma`, `Behi`, `Xurmo`];
// console.log(arr.includes(`Olma`));
// // 3-SAVOL JAVOBI
// let arr = [5, 8, 2, 3, 7, 35, 2];
// let res = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     res = true;
//     break;
//   }
// }
// console.log(res);

// // // ### 4. IndexOf, LastIndexOf
// // 1-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 10, 7];
// console.log(arr.indexOf(7));

// // 2-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 10, 7];
// console.log(arr.lastIndexOf(7));
// // 3-masala
// let arr = ["Lorem", "Banana", "Ford", "Ipsum", "Apple", "Audi"];
// let res = arr[1].indexOf("a");
// let sum = arr[1].lastIndexOf("a");
// console.log(res);
// console.log(sum);
// // // ### 5. Sort

// // 1-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);

// // 2-SAVOL JAVOBI

// let arr = ["Olma", "Banan", "Anor", "Nok", "Shaftoli"];
// arr.sort();
// console.log(arr);

// // 3-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.sort(function (a, b) {
//   return b - a;
// });
// console.log(arr);

// // // ### 6. Reverse
// // 1-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr = arr.reverse();
// console.log(arr);

// // 2-masala
// let arr = ["Olma", "Banan", "Anor", "Nok", "Shaftoli"];
// let res = "";

// for (let i = arr.length - 1; i >= 0; i--) {
//   res += arr[i];
// }
// console.log(res);

// // 3-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.reverse();
// console.log(res.join(" , "));

// // // ### 7. ToString
// // 1-masala
// let arr = ["Olma", "Banan", "Anor", "Nok", "Shaftoli"];
// let str = arr.toString();
// console.log(str);

// // 2-masala
// let arr = ["Apple", "Banana", "Cherry"];
// let res = arr.toString();
// console.log(res);

// // 3-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.toString();
// console.log(res);

// // // ### 8. Join
// // 1-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.join("_")
// console.log(res);

// // 2-masala
// let arr = ["Olma", "Banan", "Anor", "Nok", "Shaftoli"];
// let res = arr.join(" ")
// console.log(res);

// // 3-masala
// let arr = ["Olma", "Banan", "Anor", "Nok", "Shaftoli"];
// let res = arr.join("|")
// console.log(res);

// // // ### 9. Push, Shift
// // 1-masala
// let arr = ["Olma", "Banan", "Anor", "Nok", "Shaftoli"];
// arr.push("Behi")
// console.log(arr);

// // 2-masala
// let arr = ["Olma", "Banan", "Anor", "Nok", "Shaftoli"];
// arr.shift()
// console.log(arr);

// // 3-masala
// let arr = ["Olma", "Banan", "Anor", "Nok", "Shaftoli"];
// arr.push("Behi", "Olcha", "Uzum")
// arr.shift()
// console.log(arr);

// // // ### 10. Unshift, Pop

// // 1-masala

// let arr = ["Olma", "Banan", "Anor", "Nok", "Shaftoli"];
// arr.unshift("Behi");
// console.log(arr);

// // 2-masala

// let arr = ["Olma", "Banan", "Anor", "Nok", "Shaftoli"];
// arr.pop();
// console.log(arr);

// // 3-masala
// let arr = ["Olma", "Banan", "Anor", "Nok", "Shaftoli"];
// arr.unshift("Behi", "Gilos", "Xurmo");
// arr.pop();
// arr.pop();
// console.log(arr);

// // // // Qiyinroq masalalar
// // 1-masala

// let arr = [1, 2, 3, 4, 5];
// if (arr.length % 2 !== 0) {
//   let res1 = Math.floor(arr.length / 2);
//   arr.splice(res1, 1);
//   console.log(arr);
// } else {
//   let res2 = arr.length / 2;
//   let sum1 = arr.slice(0, res2);
//   let sum2 = arr.slice(res2);
//   console.log(sum1);
//   console.log(sum2);
// }

// // 2-masala

// let arr1 = [12341, "Pagani", 343, "Banan"];
// let arr2 = [4213, "Olcha", 6123, "Maymun"];
// let count = arr1.concat(arr2);
// let res = [];

// for (let i = 0; i < count.length; i++) {
//   if (typeof count[i] == "number") {
//     res.push(count[i]);
//   }
// }
// console.log(res);

// // 3-masala

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = 3;
// let res = 6;
// let sum = arr1.indexOf(arr2);
// if (sum !== -1) {
//   arr1.splice(sum, 1);
// } else {
//   arr1.push(res);
// }
// console.log(arr1);

// // 4-masala

// let arr = [1, 2, 3, 4, 5, 3, 6];
// let res = 3;
// let sum1 = arr.indexOf(res);
// let sum2 = arr.lastIndexOf(res);
// let last_arr = arr.slice(sum1, sum2 + 1);
// console.log(last_arr);

// // 5-masala

// let arr = [53, "Apple", 252, "Banana", 352, "Cherry"];
// let num = [];
// let writ = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "number") {
//     num.push(arr[i]);
//   } else if (typeof arr[i] == "string") {
//     writ.push(arr[i]);
//   }
// }
// num.sort((a, b) => a - b);
// writ.reverse();
// let sum = num.concat(writ);
// console.log(sum);

// // // 6-SAVOL JAVOBI

// let arr = [1, 2, 3, 4, 5];
// let sum = [];
// for (let i = 0; i < arr.length; i++) {
//   sum.push(arr[i] * 2);
// }
// let res = sum.join(" , ");
// console.log(res);

// // 7-masala

// let arr1 = ["olma", "Pagani", "Toyota"];
// let arr2 = ["Chevrolet", "Mersedes", 1];
// let arr3 = ["Kia", "anor", 2];
// let sum = arr1.concat(arr2, arr3);
// let res = sum.join("-").toUpperCase();
// console.log(res);

// // 8-masala

// let arr = ["olma", "banan", "Toyota", "Hyundai", "mango", "Kia", "anor"];
// arr.shift();
// arr.pop();
// let res = arr.join(":");
// console.log(res);

// // 9-masala
// let arr = ["olma", "banan", "Toyota", "Hyundai", "mango"];
// arr.unshift("anor");
// arr.push("Kia");
// arr.sort();
// let res = arr.slice(-3);
// console.log(res);

// // 10-masala
// let arr = ["olma","banan",1,2,3,4,5,"Toyota","Hyundai","mango","anor","Kia",];
// arr.reverse();
// arr.splice(0, 2);
// arr.splice(-3, 3);
// arr.sort();
// console.log(arr);
