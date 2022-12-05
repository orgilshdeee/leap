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

const bills = [3000, 27500, 100000];
const tips = [];
const totals = [];

function calcTip(bill) {
  return bill >= 5000 && bill <= 30000 ? bill * 0.15 : bill * 0.2;
}

for (i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

function calcAverage(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.round(sum / arr.length);
}

console.log(calcAverage(totals));
