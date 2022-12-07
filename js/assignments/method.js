// const register = "ЕУ96032716";
// let aimag = "";

// function getGender(num) {
//   if (num % 2 === 0) {
//     return "emegtei";
//   } else {
//     return "eregtei";
//   }
// }

// function getBirthRegion(firstLetter) {
//   if (firstLetter == "У") {
//     return "Ulaanbaatar";
//   } else if (firstLetter == "А") {
//     return "Arhangai";
//   } else if (firstLetter == "Б") {
//     return "Bayan-Olgii";
//   } else if (firstLetter == "В") {
//     return "Bayanhongor";
//   } else if (firstLetter == "Г") {
//     return "Bulgan";
//   } else if (firstLetter == "Д") {
//     return "Govi-Altai";
//   } else if (firstLetter == "Е") {
//     return "Dornogovi";
//   } else if (firstLetter == "Ж") {
//     return "Dundgovi";
//   } else if (firstLetter == "З") {
//     return "Zavhan";
//   } else if (firstLetter == "И") {
//     return "Uvurhangai";
//   } else if (firstLetter == "Й") {
//     return "Umnugovi";
//   } else if (firstLetter == "К") {
//     return "Sukhbaatar";
//   } else if (firstLetter == "Л") {
//     return "Selenge";
//   } else if (firstLetter == "М") {
//     return "Tuv";
//   } else if (firstLetter == "Н") {
//     return "Uvs";
//   } else if (firstLetter == "О") {
//     return "Hovd";
//   } else if (firstLetter == "П") {
//     return "Huwsgul";
//   } else if (firstLetter == "Р ") {
//     return "Khentii";
//   } else if (firstLetter == "С ") {
//     return "Darkhan-Uul";
//   } else if (firstLetter == "Т") {
//     return "Orkhon";
//   } else if (firstLetter == "Ф") {
//     return "Govisumber";
//   } else if (firstLetter == "Х") {
//     return "Ulaanbaatar";
//   }
// }

// function getBirthDay(num) {
//   const year = 19 + num.slice(0, 2);
//   const month = num.slice(2, 4);
//   const day = num.slice(4, 6);
//   return `${year}-${month}-${day}`;
// }

// function getRegisterInfo(reg) {
//   const birthRegion = getBirthRegion(reg.slice(0, 1));
//   const huis = getGender(Number(reg.slice(8, 9)));
//   const birthDay = getBirthDay(reg.slice(2, 8));
//   console.log(`${birthRegion} hot/aimagt tursun.`);
//   console.log(huis);
//   console.log(birthDay);
// }

// function isCorrectReg(register) {
//   const alphabet = [
//     "А",
//     "Б",
//     "В",
//     "Г",
//     "Д",
//     "Е",
//     "Ж",
//     "З",
//     "И",
//     "Й",
//     "К",
//     "Л",
//     "М",
//     "Н",
//     "О",
//     "П",
//     "Р",
//     "С",
//     "Т",
//     "Ф",
//     "Х",
//     "У",
//     "Ц",
//   ];

//   const numbers = Number(register.slice(2, 10));

//   if (
//     Number.isInteger(numbers) &&
//     alphabet.includes(register[0].toUpperCase()) &&
//     alphabet.includes(register[1].toUpperCase())
//   ) {
//     getRegisterInfo(register);
//   } else {
//     console.log("register dugaar bish bna");
//   }
// }

// isCorrectReg(register);

// [У]Х[[98][[0]1][02]][3]1

// function getGender(secondLastDigit) {
//     if (secondLastDigit % 2 === 0) {
//       return "Emegtei";
//     }
//     return "Eregtei";
//   }

//   function isBornInTwenties(fifthDigit) {
//     if (fifthDigit === 3 || fifthDigit === 2) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   function getBirthDay(reg) {
//     const day = reg.substr(6, 2);

//     let isBornInTwenty = isBornInTwenties(reg[4]);

//     const fifthDigit = reg[4];
//     if (fifthDigit === 3 || fifthDigit === 2) isBornInTwenty = true;

//     let month = Number(reg.substr(4, 2));
//     if (isBornInTwenty) month -= 20;

//     let year = reg.substr(2, 2);
//     if (isBornInTwenty) {
//       year = 20 + year;
//     } else {
//       year = 19 + year;
//     }
//     year = Number(year);

//     return `${year}-${month}-${day}`;
//   }

//   function register(reg) {
//     const huis = getGender(Number(reg.substr(8, 1)));
//     const birthDay = getBirthDay(reg);

//     const firstLetter = reg.substr(0, 1);
//     if (firstLetter == "У") {
//       aimag = "Ulaanbaatar";
//     } else if (firstLetter == "А") {
//       aimag = "Arhangai";
//     } else if (firstLetter == "Б") {
//       aimag = "Bayan-Olgii";
//     } else if (firstLetter == "В") {
//       aimag = "Bayanhongor";
//     } else if (firstLetter == "Г") {
//       aimag = "Bulgan";
//     } else if (firstLetter == "Д") {
//       aimag = "Govi-Altai";
//     } else if (firstLetter == "Е") {
//       aimag = "Dornogovi";
//     } else if (firstLetter == "Ж") {
//       aimag = "Dundgovi";
//     } else if (firstLetter == "З") {
//       aimag = "Zavhan";
//     } else if (firstLetter == "И") {
//       aimag = "Uvurhangai";
//     } else if (firstLetter == "Й") {
//       aimag = "Umnugovi";
//     } else if (firstLetter == "К") {
//       aimag = "Sukhbaatar";
//     } else if (firstLetter == "Л") {
//       aimag = "Selenge";
//     } else if (firstLetter == "М") {
//       aimag = "Tuv";
//     } else if (firstLetter == "Н") {
//       aimag = "Uvs";
//     } else if (firstLetter == "О") {
//       aimag = "Hovd";
//     } else if (firstLetter == "П") {
//       aimag = "Huwsgul";
//     } else if (firstLetter == "Р ") {
//       aimag = "Khentii";
//     } else if (firstLetter == "С ") {
//       aimag = "Darkhan-Uul";
//     } else if (firstLetter == "Т") {
//       aimag = "Orkhon";
//     } else if (firstLetter == "Ф") {
//       aimag = "Govisumber";
//     } else if (firstLetter == "Х") {
//       aimag = "Ulaanbaatar";
//     }
//     console.log(`${aimag} hot/aimag-t tursun`);
//     console.log("birthDay", birthDay);
//     console.log("huis", huis);
//   }

//   register("УШ96103147");

// const test = "dad";
// const temp = test.split("").reverse().join("");

// console.log(test);
// console.log(temp);
const arr = ["bat", "dorj", "purev", "davaa", "tomor"];
// 2р индекс хүртлэхийг тасдаж авна
console.log(arr.slice(2));
// ["purev", "davaa", "tomor"]

// 2р индексээс 4р индекс хүртлэхийг авна
console.log(arr.slice(2, 4));
// ["purev", "davaa"]

// хойноосоо 2р индексээс эхлэн тасдаж авна
console.log(arr.slice(-2));
// ["davaa", "tomor"]
