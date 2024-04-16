function countOccurrences(string, char) {
  console.log(string.split(char));
  return string.split(char).length - 1;
}

console.log(countOccurrences("hello hello", "l")); // 4
console.log(countOccurrences("hello hello", "h")); // 2
