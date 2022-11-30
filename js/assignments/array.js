const arr1 = ["z", "b", "d", "a", "r", "g", "j", "k", "o", "p", "p"];

// arr1.sort();
// console.log("===============");
// console.log(arr1);

function isPrime(num) {
  var sqrtnum = Math.floor(Math.sqrt(num));
  var prime = num != 1;
  for (var i = 2; i < sqrtnum + 1; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

console.log(isPrime(11));
