// let activities = [
//   ["Ажиллах", 10],
//   ["Идэх", 1],
//   ["Ярилцах", 2],
//   ["Тоглох", 3],
//   ["Унтах", 8],
// ];

for (i = 0; i < activities.length; i++) {
  let percentage = ((activities[i][1] * 100) / 24).toFixed();
  activities[i][2] = percentage + "%";
}

console.table(activities);

// arr1.sort();
// console.log("===============");
// console.log(arr1);

// function isPrime(num) {
//   var sqrtnum = Math.floor(Math.sqrt(num));
//   var prime = num != 1;
//   for (var i = 2; i < sqrtnum + 1; i++) {
//     if (num % i == 0) {
//       prime = false;
//       break;
//     }
//   }
//   return prime;
// }

// console.log(isPrime(11));
