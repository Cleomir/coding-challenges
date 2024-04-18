function reverseString1(string) {
  return string.split("").reverse().join("");
}

function reverseString2(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

console.log(reverseString1("hello world")); // "dlrow olleh"
console.log(reverseString2("hello world")); // "dlrow olleh"
