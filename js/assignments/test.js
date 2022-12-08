// const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"];
// const slicedWeekday = weekday.slice(0, 2);
// const test = weekday.slice(-2);

// console.log(weekday);
// console.log(slicedWeekday);
// console.log(test);
// console.log(weekday.indexOf("monday"));

// console.log(weekday.join(" "));

// const test = "davaa myagmar lkhagva";

// console.log(test.split(""));

// const numbers = [0, 10, 1000, 20, 30, 40, 4, 5, 30000];

// console.log(
//   numbers.sort((a, b) => {
//     return b - a;
//   })
// );

const alphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "Ф",
  "Х",
  "У",
  "Ц",
];

const register = "ЕУ96032716";

function isCorrectReg(reg) {
  if (
    alphabet.includes(reg[0]) &&
    alphabet.includes(reg[1]) &&
    Number.isInteger(Number(reg.slice(2, 10))) &&
    reg.length == 10
  ) {
    getRegisterInfo(reg);
  } else {
    console.log("РД буруу байна");
  }
}

isCorrectReg(register);

function getRegisterInfo(reg) {
  const huis = getGender(reg[8]);
  const birthDay = getBirthDay();
  const birthRegion = getBirthRegion();

  console.log(`huis: ${huis}`);
}

function getGender(number) {
  if (number % 2 == 0) {
    return "emegtei";
  } else {
    return "eregtei";
  }
}

function getBirthDay() {
  return "";
}

function getBirthRegion() {
  return "";
}
