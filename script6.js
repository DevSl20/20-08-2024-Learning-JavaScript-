"use strict";

function move(char, step) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  if (!alpha.includes(char)) {
    if (alpha.toUpperCase().includes(char)) {
      alpha = alpha.toUpperCase();
    } else {
      return char;
    }
  }

  const indexChar = alpha.indexOf(char);
  let finalIndex = indexChar + step;

  if (finalIndex > 25) {
    finalIndex = finalIndex % 26;
  }

  const finalChar = alpha[finalIndex];
  return finalChar;

  //Find index of char
  // let index = alpha.indexOf(char);
  // index += 1;
  // console.log(alpha[index]);
}
const x = move("c", 4);
console.log(x);

// const y = move ("D", 6);
// console.log(y);

// move1("f");
