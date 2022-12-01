// let test = 123456;

// let digit = 0;

// while (test != 0) {
//   test = Math.floor(test / 10);
//   digit++;
// }

// console.log(digit);

// let counter = 0;
// let A = 0;
// let str =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// while (counter < str.length) {
//   if (str[counter] == "a" || str[counter] == "A") {
//     A++;
//   }
//   counter++;
// }
// console.log(A);

// let num = 10;
// let total = 0;
// let i = 0;

// while (i <= num) {
//   total = total + i;
//   i++;
// }
// console.log(total);

//fibonacchi n-th number
// const n = 8;

// let a = 0; // first fibo
// let b = 1; // second fibo
// let c = 0; // this will be the third fibo but currently at 0 now
// let i = 2;

// while (i <= n) {
//   c = a + b; // calcing third fibo = first fibo + second fibo
//   a = b; // now we need to save second fibo to calculate fourth fibo 4th fibo = third fibo + second fibo
//   b = c;
//   i++;
// }

// console.log(c);

// let number = 997;
// let result = true;

// if (number == 0) {
//   console.log("number is 0");
// } else if (number == 1) {
//   console.log("number is 1");
// } else if (number == 2) {
//   console.log("number is 2");
// } else if (number > 1) {
//   let i = 2;
//   while (i < number) {
//     if (number % i == 0) {
//       result = false;
//       break;
//     }
//     i++;
//   }
//   if (result) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is not a prime number`);
//   }
// }

// var num = 5;
// var result = 1;

// while (num > 1) {
//   if (num == 0 || num == 1) {
//     result = 1;
//   } else {
//     result = result * num;
//     num--;
//   }
// }

// console.log(result);

// const num = 10;
// let i = 1;
// let sumEven = 0;
// let sumOdd = 0;
// while (i <= 10) {
//   if (i % 2 == 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
//   i++;
// }
// console.log(sumEven);
// console.log(sumOdd);

// const num = 10;
// let i = 0;
// let total = 0;

// while (i <= num) {
//   total = total + i;
//   i++;
// }
// console.log(total);

//plandromic number

// const test = "3211221123";
// const testt = "21012";
// let result = true;
// const len = test.length;

// let i = 0;
// while (i < len) {
//   console.log(len - 1 - i);
//   if (test[i] !== test[len - 1 - i]) {
//     result = false;
//   }
//   i++;
// }

// console.log(result);
