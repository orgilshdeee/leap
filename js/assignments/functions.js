// 1. Өгөгдсөн 2 тооны ихийг олох функц бич.

// function maxNumber(num1, num2, num3) {
//   return Math.max(num1, num2, num3);
// }

// console.log(maxNumber(11, 12, 30));

// 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.

// const arrays = [0, 10, 20, 15, 30, 40, 50, 76, 64, 99];

// function arrayFunction(arr, num) {
//   for (i = 0; i < arr.length; i++) {
//     if (num == arr[i]) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(arrayFunction(arrays, 33));

// 3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.

// const testString = "abcdefghijklmnopqrsmtuvwxyz";

// function stringFunction(str, c) {
//   for (i = 0; i < str.length; i++) {
//     if (c == str.charAt(i)) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(stringFunction(testString, "m"));

// 4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.

function randomNumber(a, b) {
  let random =
    Math.floor(Math.random() * (Math.max(a, b) - Math.min(a, b) + 1)) +
    Math.min(a, b);
  return random;
}

for (i = 0; i < 30; i++) {
  console.log(randomNumber(90, 100));
}
// 5. Өгөгдсөн array - ийн дундажыг олох функц бич.
// 6. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.

// 7. Өгөгдсөн тоо анхны эсэхийг олох функц бич.

// 8. Өгөгдсөн тэмдэгт мөрийн бүх үсгийг том үсэг болгох функц бич.

// 9. Өгөгдсөн тэмдэгт мөрийн бүх үсгийг жижиг үсэг болгох функц бич.
