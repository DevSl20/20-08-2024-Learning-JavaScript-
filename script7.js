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

function caesarCipher(sentence, count){
  let finalstr = "";
  for (let i=0; i<sentence.length;i++){
    finalstr+= move(sentence[i],count)
  }
    return finalstr;
}

console.log(caesarCipher("Doraemon",2));