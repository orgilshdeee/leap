// const students = [
//   {
//     name: "orgil",
//     age: 26,
//     score: "B",
//     hobby: "dota",
//   },
//   {
//     name: "andy",
//     age: 32,
//     score: "A",
//     hobby: "dota",
//   },
//   {
//     name: "sharaw",
//     age: 19,
//     score: "C",
//     hobby: "volleyball",
//   },
//   {
//     name: "enhtuul",
//     age: 26,
//     score: "C",
//     hobby: "movie",
//   },
// ];

// function test(students) {
//   const result = students.filter((student) => {
//     return student.hobby === "dota";
//   });
//   return result;
// }

// console.log(test(students));

// let animals = [
//   {
//     type: "dog",
//     sound: "woof",
//   },
//   {
//     type: "cow",
//     sound: "moo",
//   },
//   {
//     type: "cat",
//     sound: "meow",
//   },
// ];

// function makeSound(type, sound) {
//   console.log(`What does the ${type} say? ${sound}!`);
// }

// for (i = 0; i < animals.length; i++) {
//   makeSound(animals[i].type, animals[i].sound);
// }

const person = {
  firstname: "Наранбаяр",
  lastname: "Эрдэнэ",
  printFullname: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};

person.printFullname();
