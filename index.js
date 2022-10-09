console.log(
  "-----------------------------------------Ex A------------------------------------------"
);

let test = "String Value";
console.log(test);

console.log(
  "-----------------------------------------Ex B------------------------------------------"
);

let sum = 10 + 20;
console.log(sum);

console.log(
  "-----------------------------------------Ex C------------------------------------------"
);

let random = Math.floor(Math.random() * 21);
console.log(random);

console.log(
  "-----------------------------------------Ex D------------------------------------------"
);

const me = {
  name: "Sandro",
  surname: "Ierna",
  age: 26,
};
console.log(me);

console.log(
  "-----------------------------------------Ex E------------------------------------------"
);

delete me.age;
console.log(me);

console.log(
  "-----------------------------------------Ex F------------------------------------------"
);

me.skills = ["HTML", "CSS", "JS"];
console.log(me);

console.log(
  "-----------------------------------------Ex G------------------------------------------"
);

me.skills.pop();
console.log(me);

console.log(
  "-----------------------------------------Ex 1------------------------------------------"
);

const dice = function () {
  console.log(Math.floor(Math.random() * 6 + 1));
};
dice();

console.log(
  "-----------------------------------------Ex 2------------------------------------------"
);

const whoIsBigger = function (x, y) {
  if (x > y && x !== y) {
    console.log("The bigger number is:", x);
  } else if (x < y && x !== y) {
    console.log("The bigger number is:", y);
  } else {
    console.log("The given numbers are equal!");
  }
};
whoIsBigger(0.5, 0.5);

console.log(
  "-----------------------------------------Ex 3------------------------------------------"
);

const splitMe = function (string) {
  const splitArr = string.split(" ");
  console.log(splitArr);
};
splitMe("Hello world!");

console.log(
  "-----------------------------------------Ex 4------------------------------------------"
);

const deleteOne = function (string, boolean) {
  const splitArr = string.split("");
  let newString = "";
  if (boolean === true) {
    splitArr.shift();
    console.log(splitArr);
  } else {
    splitArr.pop();
  }
  for (let i = 0; i < splitArr.length; i++) {
    newString += splitArr[i];
  }
  console.log(newString);
};
deleteOne("String says hello", true);

console.log(
  "-----------------------------------------Ex 5------------------------------------------"
);

// const onlyLetters = function (string) {
//   for (let i = 0; i < string.length; i++) {
//     let newString = "";
//     let check = isNaN[i];
//     if (check === false) {
//       delete string[i];
//     }
//     newString += string[i];

//     console.log(newString);
//   }
//   // console.log(newString);
// };
// onlyLetters("I have 4 dogs");
