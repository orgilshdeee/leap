// let activities = [
//   ["Ажиллах", 10],
//   ["Идэх", 1],
//   ["Ярилцах", 2],
//   ["Тоглох", 3],
//   ["Унтах", 8],
// ];

// for (i = 0; i < activities.length; i++) {
//   let percentage = ((activities[i][1] * 100) / 24).toFixed();
//   activities[i][2] = percentage + "%";
// }

// console.table(activities);

const arr = [43, 56, 23, 89, 88, 90, 99, 652];

// For regular arrays:
// var max = Math.max(...arrayOfNumbers);

// For arrays with tens of thousands of items:
let max = 0;
for (let i = 1; i < arr.length; ++i) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
