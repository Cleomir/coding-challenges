function countVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];

  return string
    .toLowerCase()
    .split("")
    .reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0);
}

console.log(countVowels("hello")); // 2
console.log(countVowels("why")); // 0
