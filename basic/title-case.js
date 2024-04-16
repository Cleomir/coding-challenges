function titleCase(string) {
  // const words = string.toLowerCase().split(" ");

  // for (let i = 0; i < words.length; i++) {
  //   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  // }

  // return words.join(" ");

  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(titleCase("hello world")); //  "Hello World"
