// let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];

// function arraySorter(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
// }
// arraySorter(arr);
// console.log("Sorted array=>", arr);

// function func(max, min) {
//   const result = [];
//   for (i = min; i <= max; i++) {
//     if (i % 2 == 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(func(50, 10));

// const bills = [3000, 27500, 100000];
// const tips = [];
// const totals = [];

// function calcTip(bill) {
//   return bill >= 5000 && bill <= 30000 ? bill * 0.15 : bill * 0.2;
// }

// for (i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// function calcAverage(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return Math.round(sum / arr.length);
// }

// console.log(calcAverage(totals));

// let input = "HELLO WORLD";
// const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lower = "abcdefghijklmnopqrstuvwxyz";

// function checker(char) {
//   for (i = 0; i < upper.length; i++) {
//     if (char == upper.charAt(i)) {
//       up = true;
//     }
//     if (char == lower.charAt(i)) {
//       low = true;
//     }
//   }
//   if (up) {
//     return "toLower";
//   } else if (low) {
//     return "toUpper";
//   } else {
//     return "other";
//   }
// }

// str = "Hello, I am GonchigSumlai.";
// res = "";

// for (var i = 0; i < str.length; ++i) {
//   c = str[i];
//   if (c == c.toUpperCase()) {
//     res += c.toLowerCase();
//   } else if (c == c.toLowerCase()) {
//     res += c.toUpperCase();
//   } else {
//     res += c;
//   }
// }
// console.log(res);

// function converter(str) {
//   let result = "";
//   for (i = 0; i < str.length; i++) {
//     if (upper.includes(str[i])) {
//       result += str[i].toLowerCase();
//     } else if (lower.includes(str[i])) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

// console.log(converter("HELLO"));

const array0 = [0, 5, 10, 15, 21, 26, 7398, 89172398, 0912830];
const array1 = [5, 10, 15, 20];
const array2 = [5, 10, 15, 20];
const array3 = [5, 10, 15, 20];

// for (i = 0; i < arr.length; i++) {
//   totals += arr[i];
// }

// for (i = 0; i < arr1.length; i++) {
//   totals += arr[i];
// }

// function total(array, array1, array2) {
//   let totals = 0;
//   for (i = 0; i < array.length; i++) {
//     totals += array[i];
//   }
//   return `total of array is: ${totals}`;
// }

// function greet(name) {
//   console.log("Hello " + name);
// }

function add(p1, p2) {
  console.log(p1 + p2);
}

add(10, 15);

// const test = "10";

// function x(num) {
//   return num * num;
// }

// x(3);

// let x = function (num) {
//   return num * num;
// };
// let y = x(3);

// const findIndex = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// };
// console.log(findIndex([10, 20, 23, 44, 1, 66, 92], 10));

// let result = "";

// for (i = 1; i <= 10; i++) {
//   if (!(i % 2 == 0)) {
//     result = result + i + " ";
//   }
// }

// console.log(result);
