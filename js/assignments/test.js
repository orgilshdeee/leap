const n = 8;

let a = 0; // first fibo
let b = 1; // second fibo
let c = 0; // this will be the third fibo but currently at 0 now
let i = 2;

while (i <= n) {
  c = a + b; // calcing third fibo = first fibo + second fibo
  a = b; // now we need to save second fibo to calculate fourth fibo 4th fibo = third fibo + second fibo
  b = c;
  i++;
}

console.log(c);
