let test = 123456123123;

let digit = 0;

while(test!=0){
    test = Math.floor(test/10);
    digit++;
}

console.log(digit)